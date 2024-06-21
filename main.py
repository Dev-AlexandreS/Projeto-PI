from flask import Flask, render_template,jsonify
from auto import buscaDados

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/dados")
def dadosArduino():
    return render_template("resultado.html")


@app.route('/get_dados')
def get_dados():
    # Aqui você pode retornar os dados que deseja atualizar na div
    dados = buscaDados()
    return jsonify({'dados': dados})

@app.route("/posto")
def posto():
    return render_template("posto.html")

if __name__ ==  "__main__":
    app.run(debug = True)