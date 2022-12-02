var Horas = "";
var Salario = "";


function capturar(){
    Horas = parseInt(document.getElementById('valor').value);
    
    if(Horas<160){
        Salario = Horas * 1;
        alert("Salario:  "+ Salario);
    }

    if(Horas>160){
        Salario = ((Horas - 160 )* 1.5) + 160 ;
        alert("Salario: " + Salario);
    }
}


