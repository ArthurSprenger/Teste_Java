
console.log('Hello, word');



function verificarPar(numero) {
  if (numero % 2 == 0) {
    console.log("Par");
  } else {
    console.log("Ímpar");
  }
}

verificarPar(10);

function calcular(num1, num2) {
  const soma = num1+num2;
  const subtracao = num1-num2;
  const multiplicacap = num1*num2;
  const divisao = num1/num2;
  return (soma, subtracao, multiplicacap, divisao);
}

calcular(1, 9)


let i = 10;
while (i>1) {
  console.log(i);
  i--;
}

console.log(i);

function reverseString(str){
  let separar = str.split("");
  let reverser = separar.reverse();
  let mudei = reverser.join("");
  console.log(mudei);
}
reverseString('Icaro');

function contaCaracteres(str){
  let str2 = str.length=8;
  console.log(str2);
}
contaCaracteres(prompt("Digite uma palavra: "));


const carro = new Object();
carro.marca = prompt("Digite a marca: ");
carro.ano = prompt("Digite o ano: ");
carro.modelo = prompt("Digite o modelo do seu carro: ");
console.log(carro.marca);
console.log(carro.ano);
console.log(carro.modelo);

