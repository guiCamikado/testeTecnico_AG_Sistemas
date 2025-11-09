from flask import Blueprint, request, jsonify
from flask_cors import CORS, cross_origin
from core.database_manager import dataBase

intentControllerBp = Blueprint("intentControllerBp", __name__)
con, cur = dataBase()

@intentControllerBp.route("/api_intent/register", methods=["POST"])
def register_intention():
    data = request.get_json()
    print(request.data)

    foreignKey = data.get("foreignKey")
    username = data.get("username")
    company = data.get("empresa")
    reason = data.get("razao")

    if not all([foreignKey, username, company, reason]):
        return jsonify({"error": "Dados incompletos"}), 400

    cur.execute(
        "SELECT username, rowid FROM users WHERE username = ? AND rowid = ?",
        (username, foreignKey),
    )
    existing_user = cur.fetchone()

    if existing_user:
        cur.execute(
            "INSERT INTO intention (username, empresa, reason, username) VALUES (?, ?, ?, ?)",
            (username, company, reason, foreignKey),
        )
        con.commit()
        return jsonify({"success": True, "message": "Intenção registrada com sucesso"}), 201
    else:
        return jsonify({"error": "Usuário não encontrado"}), 404

@intentControllerBp.route("/api_intent/get_intentions", methods=["GET"])
def get_intentions():
    # Seleciona todas as linhas da tabela
    cur.execute("SELECT * FROM intention")
    rows = cur.fetchall()

    # Pega os nomes das colunas
    col_names = [desc[0] for desc in cur.description]

    # Converte cada linha em um dicionário
    intentions = [dict(zip(col_names, row)) for row in rows]

    # Retorna a lista de intenções em formato JSON
    return jsonify(intentions), 200
