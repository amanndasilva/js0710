function temperatura(temp){
    var temp = parseFloat(prompt("Digite um valor de temperatura"));
    var conv = (temp - 32) * (5 / 9);
    console.log("A temperatura de °F para C° é: " + conv);
}
console.log(temperatura());