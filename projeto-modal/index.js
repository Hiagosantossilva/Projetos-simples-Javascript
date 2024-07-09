var modal = window.document.getElementById("caixaModal")

var botaofechar= window.document.getElementById("fecharModal")
var botaoAbrir = window.document.getElementById("botaoAbrirModal")

botaoAbrir.addEventListener("click", abrirModal)
botaofechar.addEventListener("click", fecharModal)

function abrirModal() {
    modal.style.display = "block";

}

function fecharModal(){
    modal.style.display = "none";

}