/**Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string. Tanto o caractere quanto a string devem ser fornecidos pelo usuário. */

function caractereCont() {
    var txt = prompt("Digite uma palavra");

    var caractere = prompt("Digite o caractere que deseja contar");

    //verifica se o caractere é único
    if(caractere.length !== 1){
        alert("Por favor, digite apenas um caractere.");
        return;
    }

    var contador = 0;

    //converte a string para um array de caracteres e conta as ocorrências do caractere
    for(var i = 0; i < txt.length; i++){
        if(txt[i] === caractere){
            contador++;
        }
    }

    alert("O caractere '" + caractere + "' aparece " + contador + " vez(es) na string.");
}
caractereCont();