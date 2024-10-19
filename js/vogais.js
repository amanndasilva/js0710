/**Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra). */

function contar(){
    var txt = prompt("Digite uma palavra");
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    var cont = 0;

    //lê as palavras em letra minúscula
    txt = txt.toLocaleLowerCase();

    for(var i = 0; i < txt.length; i++){
        //verifica se o caractere contado é uma vogal
        if (vogais.includes(txt[i])){
            cont++;
        }
    }

    alert("Número de vogais: " + cont);
}
contar();