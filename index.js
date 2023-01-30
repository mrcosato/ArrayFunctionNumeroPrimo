var readline = require('readline-sync');
var n = 0;
var count = 0; // contador verificar se é num primo ou n
var i = 0;

function NumeroPrimo(n){
//dividir um numero n vezes
var retorno = false;
    for(i=1; i <=n ; i++){
        
        if(n%i==0){
            count == count++;
        }
    }

    //decisáo
    if (count == 2)
    {
        retorno= true;
    }
    return retorno;
}

//aqui nesta parte fora da function e como se fosse o 
//caminho passo a passo para execucao no terminal
console.log("Programa que verifica se o numero é primo");
n = parseInt(readline.question("Informe um numero inteiro: "));
var resposta = NumeroPrimo(n);
    if (resposta == true){
        console.log("o numero n é um numero primo");
    }
    else {
     console.log("o numero n náo é um numero primo");
    }
