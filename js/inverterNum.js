/**Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578. */

function inverter(){
    var num = prompt("Digite um número");
    var invertido = num.split('').reverse().join(''); //inverte o número inserido na caixa de texto
    alert("Número invertido: " + invertido);
}
inverter();