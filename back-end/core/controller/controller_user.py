from flask import Blueprint, request, jsonify
from flask_cors import CORS, cross_origin
from core.database_manager import dataBase

userControllerBp = Blueprint("userController Bp", __name__)
con, cur = dataBase()


@userControllerBp.route("/api_user/register", methods=["POST"])
def register_user():
    data = request.get_json()

    username = data.get("username")
    email = data.get("email")
    age = data.get("age")
    password = data.get("password")

    if not all([username, email, age, password]):
        return jsonify({"error": "Dados incompletos"}), 400

    cur.execute(
        "SELECT username, email FROM users WHERE username = ? OR email = ?",
        (username, email),
    )
    existing_user = cur.fetchone()

    if existing_user:
        return jsonify({"error": "Usuário ou e-mail já cadastrados"}), 409

    cur.execute(
        "INSERT INTO users (username, email, age, password, auth) VALUES (?, ?, ?, ?, ?)",
        (username, email, age, password, "user"),
    )
    con.commit()

    return jsonify({"success": True, "message": "Usuário registrado com sucesso"}), 201


@userControllerBp.route("/api_user/login", methods=["POST"])
def login_user():
    print(request.data)
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if not all([username, password]):
        return jsonify({"error": "Dados incompletos"}), 400

    cur.execute(
        "SELECT rowid, username FROM users WHERE username = ? AND password = ?",
        (username, password)
    )

    existing_user = cur.fetchone()

    if not existing_user:
        return jsonify({"error": "Usuário ou senha inválidos"}), 401

    user_id, user_name = existing_user
    return jsonify({
        "id": user_id,
        "username": user_name
    }), 200 

