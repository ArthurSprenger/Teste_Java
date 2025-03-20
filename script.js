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
while (i < 1) {
  console.log(i);
  i--;
}
