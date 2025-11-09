# Sobre

Esse programa faz parte do teste técnico pedido pela empresa AG Sistemas. O objetivo do mesmo é demonstrar minhas capacidades de gerir e programar um projeto React.

## Sobre o Front-end
### Quais técnologias esse programa possuí:

- React
- Vite
- Tailwind

### Quais páginas e funções principais esse programa possuí:

- Tela de cadastro
- Tela de login



## Sobre o Back-end
### Quais técnologias esse programa possuí:

- Flask
- Banco de dados SQLite


# Setup Front-End

Para iniciar o programa primeiramente é necessário instalar todas as suas dependencias. Sendo assim é necessário estar utilizando node. A versão em que utilizei é a v24.11+.
Aqui o site do mesmo: <a>https://nodejs.org/en/download

Estando dentro do diretório em:
> *\AGSistemas\testeTecnico_AG_Sistemas

Utiliza-se: `npm i "ou" npm install` Dessa forma o node irá instalar todas as dependencias necessárias para rodar o código na parte do front-end.

Também é necessário criar um arquivo .env na raiz do diretório e dentro do mesmo digitar o seguinte:

> VITE_APP_API_URL="127.0.0.1:5000" ou VITE_APP_API_URL="http://localhost:5000"

Aspas são necessárias

---

Logo após a instalação de todas as dependências é necessário iniciar o projeto utilizando `npm run dev`. Dessa forma o projeto abrirá no provavel link:
> http://localhost:5173/

# Setup Back-End

Para iniciar o back-end da aplicação é necessário possuir python 3.14.0 instalado na máquina
> https://www.python.org/downloads


Tendo o Python instalado é muito simples, só iniciar a aplicação app.py que se encontra na pasta back-end, Eu fiz um script para instalar todas as dependencias necessárias automaticamente, porém se não puder executar por questões de segurança pode instalar as seguintes dependencias manualmente:

    >>> pip install flask
    >>> pip install flask-cors

