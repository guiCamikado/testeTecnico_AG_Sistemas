import sqlite3

def dataBase():
    con = sqlite3.connect("data/database.db", check_same_thread=False)
    cur = con.cursor()
    return con, cur

def criaDatabase():
    con = sqlite3.connect("data/database.db", check_same_thread=False)
    cur = con.cursor()

    cur.execute("""
    CREATE TABLE IF NOT EXISTS users(" 
        "username," 
        "email," 
        "age," 
        "password," 
        "auth
    )
    """)
    cur.execute("DROP TABLE IF EXISTS intention")
    # Tabela intent faz referencia ao rowid de users
    cur.execute("""
    CREATE TABLE IF NOT EXISTS intention(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username,
        empresa,
        reason,
        FOREIGN KEY(username) REFERENCES users(rowid)
    )
    """)

    con.commit()
    con.close()