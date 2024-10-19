/**Escreva uma função que calcule e retorne o fatorial de um número inteiro fornecido pelo usuário. */

function calcular() {
    var num = parseInt(prompt("Digite um número"));

    //verifica se o número fornecido é negativo
    if(num < 0){
        alert("O fatorial não existe para números negativos.");
        return;
    }

    //inicia o fatorial como 1
    var fatorial = 1;

    for(var i = 1; i <= num; i++){
        fatorial *= i;
    }

    alert("O fatorial de " + num + " é: " + fatorial);
}
calcularFatorial();