function triangulo(){
    var base = parseFloat(prompt("Digite o valor da base"));
    var altura = parseFloat(prompt("Digite o valor da altura"));
    var result = (base * altura) / 2;
    console.log("A área do triângulo é: " + result);
}
console.log(triangulo());