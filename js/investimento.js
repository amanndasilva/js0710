/**Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário. */

function investir() {
    var inicial = parseFloat(prompt("Digite o valor do capital inicial"));
    var juros = parseFloat(prompt("Digite a taxa de juros mensal")) / 100;
    var tempo = parseInt(prompt("Digite o tempo do investimento em meses"));

    //fórmula -> M = C * (1 + i)^t
    var montante = inicial * Math.pow((1 + juros), tempo);

    //resultado com duas casas decimais
    alert("O investimento é de R$ " + montante.toFixed(2));
}
investir();