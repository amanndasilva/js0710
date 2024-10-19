/**Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não. */

function primo() {
    var num = parseInt(prompt("Digite um número"));

    if(num <= 1){
        alert(num + " não é um número primo.");
        return;
    }

    //verifica se o número é divisível por qualquer número entre 2 e o número - 1
    for(var i = 2; i < num; i++){
        if(num % i === 0){
            alert("O número " + num + " não é um número primo.");
            return;
        }
    }

    alert("O número " + num + " é um número primo.");
}
primo();