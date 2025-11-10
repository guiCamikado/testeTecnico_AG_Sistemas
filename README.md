# Sobre

Esse programa faz parte do teste técnico pedido pela empresa AG Sistemas. O objetivo do mesmo é demonstrar minhas capacidades de gerir e programar um projeto React.

## Sobre o Front-end
### Quais técnologias esse programa possuí:

- next.js
- React
- Vite
- Tailwind

### Quais páginas e funções principais esse programa possuí:

- Tela de cadastro
- Tela de login

## Sobre o Back-end
```bash
cd back-end
pip install -r requirements.txt
python app.py
```

# Setup Front-End
```bash
cd front-end
npm install
npm run dev
```
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


Tendo o Python instalado é muito simples, só iniciar a aplicação app.py que se encontra na pasta back-end, Eu fiz um script para instalar todas as dependencias necessárias automaticamente para utilizar o mesmo é só retirar o comentario da terceira linha do arquivo `app.py`, porém se não puder executar por questões de segurança pode instalar as seguintes dependencias manualmente:

    >>> pip install flask
    >>> pip install flask-cors


# Desenho de Arquitetura

### Cruciais
- Página de login & registro
    - Essas páginas são cruciais pois elas criar usuários que eventualmente possuírão autorizações diferentes e funções diferentes dentro do programa de gestão.

- Banco de dados relacional
    - Será necessário para a principio armazenar os usuários da mesma. O relacionamento dentre banco de dados deverá existir para eventualmente um usuário não ter acesso a dados dos quais não deverá ter acesso

- Utilização de sessão ou JWT
    - Necessário por questões de segurança e autenticação do usuário no sistemas para evitar acesso e autorizações indevidas por questões de segurança.

### Funcionamento

 Após o login de usuário encontrará uma página principal do qual o mesmo terá acesso a menus referentes a utilização da página como por exemplo menus de "gestão", "perfil", "pedidos", etc..

 Esse menu principal sempre será aberto quando o usuário estiver conectado na página e deverá conter avisos para coisas importantes também como se fosse uma página de anuncios.

 Uma vez que conectado é importante que exista a possibilidade por meio de administradores e usuários de bloquearem uns aos outros e a capacidade do código de prever e evitar spams e tentativas de burlar o sistema.

### Adendo

- Por um pequeno erro de atenção e por ter apenas um dia para fazer a aplicação acabei por esquecer de implementar a mesma em nextJs e tive problemas no momento de migração para o framework que acabou pela mesma não possuir CSS já que tive muitos problemas migrando o "framework css" tailwind de vite para nextJS. Apesar disso a mesma está funcionando normalmente só que sem estilização. 