function circulo(){
    var raio = parseFloat(prompt("Digite o raio do seu círculo"));
    var area = (3,14) * (raio ** 2) ;
    var perim = 2 * 3.14 * raio;

    console.log("A área do círculo é: " + area);
    console.log("O perímetro do círculo é: " + perim);
}
console.log(circulo());