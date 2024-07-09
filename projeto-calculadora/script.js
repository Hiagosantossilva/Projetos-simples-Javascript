function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    console.log(resultado)
}

function clean(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = "";
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = eval(resultado);
}