var inputTexto = document.getElementById("inputTexto");

function codificar() {
    var texto = inputTexto.value.toLowerCase(); 

    var textoCodificado = texto.replace(/e/igm, "enter");
    var textoCodificado = textoCodificado.replace(/o/igm, "ober");
    var textoCodificado = textoCodificado.replace(/i/igm, "imes");
    var textoCodificado = textoCodificado.replace(/a/igm, "ai");
    var textoCodificado = textoCodificado.replace(/u/igm, "ufat");

    testar(textoCodificado);
} 

function decodificar() {
    var texto = inputTexto.value.toLowerCase();

    var textoCodificado = texto.replace(/enter/igm, "e");
    var textoCodificado = textoCodificado.replace(/ober/igm, "o");
    var textoCodificado = textoCodificado.replace(/imes/igm, "i");
    var textoCodificado = textoCodificado.replace(/ai/igm, "a");
    var textoCodificado = textoCodificado.replace(/ufat/igm, "u");
    
    testar(textoCodificado);
}

var mensagem = document.getElementById("mensagem1");
var mensagem2 = document.getElementById("mensagem2");
var resposta = document.getElementById("resposta");
var copiar = document.getElementById("copiar");

function testar(textoCodificado) {
    mensagem.style.display = "none";
    mensagem2.style.display = "none";
    imagem.style.display = "none";
    resposta.innerHTML = textoCodificado;
    copiar.style.display = "inherit";
}

var copiar = document.getElementById("copiar");

copiar.onclick = () => {
    navigator.clipboard.writeText(resposta.innerText);
}
    