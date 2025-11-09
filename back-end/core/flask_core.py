from flask import Flask
from flask_cors import CORS

# Imports
from core.controller.controller_user import userControllerBp
from core.controller.controller_intent import intentControllerBp

# Importação dos blueprints vindos dos controllers
# from api.user_routes import user_bp
# from api.product_routes import product_bp


def applicationBlueprints(app: Flask):
    # Registra todos os blueprints da aplicação em um único lugar.
    app.register_blueprint(userControllerBp)
    app.register_blueprint(intentControllerBp)

    print("BPs registrados!")


def startApi():
    # Inicializa e executa a API Flask.
    app = Flask(__name__)
    CORS(app, supports_credentials=True,origins=["*"])

    # Registra os blueprints
    applicationBlueprints(app)

    # Inicia o servidor
    app.run(debug=True)