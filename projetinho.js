var nomeDosCarros = [];
var preçoDosCarros = [];
var qtde ;

function cadastrar() {
    let nomeDosCarrinhos = document.getElementById("modeloDoCarro").value;
    let preçoDosCarrinhos = document.getElementById("preçoDoCarro").value;

    if (nomeDosCarrinhos && preçoDosCarrinhos) {
        nomeDosCarros.push(nomeDosCarrinhos);
        preçoDosCarros.push(preçoDosCarrinhos);
        let tabela = document.getElementById("tabela").innerHTML = "<tr><th> Modelo do Carro </th><th> Preço do Carro </th></tr>";
        for (qtde = 0; qtde <= (nomeDosCarros.length - 1); qtde++) {
            tabela += "<tr><td>" + nomeDosCarros[qtde] + "</td><td>" + preçoDosCarros[qtde] + "</td></tr>";
            document.getElementById("tabela").innerHTML = tabela;
        }
    } else {
        alert("Usúario favor preencher os campos obrigatórios!");
    }
    document.getElementById('modeloDoCarro').value = "";
    document.getElementById('preçoDoCarro').value = "";
    
}