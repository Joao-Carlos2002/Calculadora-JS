function insert(num) {
    var number = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = number + num
}
function clean(){
    document.getElementById("resultado").innerHTML = ""
}
function back(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado);
    } else {
        document.getElementById("resultado").innerHTML = "Nada para calcular!"
    }
}
function hours(){
    today = new Date();
    hour= today.getHours();
    minute= today.getMinutes();
    second= today.getSeconds();
    document.getElementById("clock").innerHTML = hour + ':' + minute + ':' + second;
    setTimeout('hours()', 500);
}