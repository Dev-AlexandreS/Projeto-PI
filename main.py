from flask import Flask, render_template
from auto import buscaDados

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/dados")
def dadosArduino():
    while True:
        dados = buscaDados()
        return render_template("resultado.html", dados = dados)



@app.route("/posto")
def posto():
    return render_template("posto.html")

if __name__ ==  "__main__":
    app.run(debug = True)