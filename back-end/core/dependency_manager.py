# Responsavel por instalar todas as dependencias necessárias para rodar a aplicação automaticamente
def dependencyManager():
    import subprocess
    import sys

    userInput = input("Deseja instalar todas as dependências necessárias para rodar o projeto y/n? (Note que o programa deverá ser executado como administrador).")

    if (userInput == "y" or "Y" or "yes" or "s" or "S" or "Sim" or "sim" or "Yes"):
        # Ponto de entrada do projeto
        dependencias = ["flask","flask-cors"]

        for dep in dependencias:
            print(f"📦 Instalando {dep}...")
            subprocess.check_call([sys.executable, "-m", "pip", "install", "--upgrade", dep])
    
    else:
        return None