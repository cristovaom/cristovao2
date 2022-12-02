var saldo = "";
var credito = "";
var debito = "";
var soma = "";

function capturar(){
    saldo = parseInt(document.getElementById('valor2').value);
    soma = Number(saldo + credito) - debito;
    document.getElementById('ValorDigitado3').innerHTML = soma;
    if(soma<0){
        alert("Conta Negativa");
    }

    if(soma>0){
        alert("Conta Positiva");
    }
}

function capturar2(){
    debito = parseInt(document.getElementById('valor1').value);
  
}


function capturar3(){
    credito = parseInt(document.getElementById('valor').value);
}

