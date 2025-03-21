/*
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


function constatarSinal(numero){
  let x = Math.sign(numero);
  console.log(x);
}

let numero = prompt("Digite o numero que voce quer saber");

constatarSinal(numero);
0


function converterTemperatura (temperatura){
  temperatura = temperatura * 1.8 + 32;
  console.log(temperatura);
  }

  temperatura = prompt("Digite a temperatura que voce deseja converter")

  converterTemperatura(temperatura)


let o = 0;
let i = 1
while (i<=100) {
  console.log(i+": "+o);
  o = o + i;
  i = i + 1;
}



let texto = prompt("Digite um texto:");

function subistituirPalavra(text){
  console.log(text.replace(/azul/g, "vermelho"));
}

let texto = prompt("Digite o texto")
subistituirPalavra(texto);

/*/

function verificarTamanho(){


}

/* 20 */

function contarVogais(palavra){

  const vogais = "aeiouAEIOU";
  let contador = 0;

  for (let lettra of palavra){
    if(vogais.incluides(letra)){
      contador++;
    }
  }
  console.log(contador)
}
contarVogais(palavra)