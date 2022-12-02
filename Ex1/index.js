var VotosTotais = "";
var VotosBrancos = "";
var VotosAnulados = "";
var VotosValidos;


function capturar(){
    VotosTotais = parseInt(document.getElementById('valor').value);
    document.getElementById('ValorDigitado').innerHTML = VotosTotais;
}

function capturar2(){
    VotosBrancos = parseInt(document.getElementById('valor1').value);
    document.getElementById('ValorDigitado2').innerHTML = VotosBrancos;
}

function capturar3(){
    VotosAnulados = parseInt(document.getElementById('valor2').value);
    document.getElementById('ValorDigitado3').innerHTML = VotosAnulados;
}

function capturar4(){
    VotosValidos = VotosTotais -VotosBrancos - VotosAnulados;
    document.getElementById('ValorDigitado4').innerHTML = VotosValidos;
}