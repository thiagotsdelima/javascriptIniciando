alert("Hello World!")

alert("Vamos somar dois numeros,ok")
let numberOne = prompt("Digite seu primeiro numero")
let numberTwo = prompt("Digite seu segundo numero")
let result = Number(numberOne) + Number(numberTwo)
alert("Resultado final " + result)

alert("Vamos saber se é uma string ou um número");
let userInput = prompt("Digite algo:");

if (!isNaN(userInput)) {
  alert("É um número");
} else {
  alert("Não é um número");
}

alert("Vamos saber se é uma string ou um número");
let inputString = prompt("Digite algo:");

if (isNaN(inputString)) {
  alert("É uma string");
} else {
  alert("Não é uma string");
}

let isBoolean = true;


if (typeof isBoolean === 'boolean') {
  alert("É um booleano");
} else {
  alert("Não é um booleano");
}

let firstNumber = prompt("Digite meu primeiro numero")
let secondNumber = prompt("Digite o segundo numero")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)


let numero = prompt("Digite um número:");

if (!isNaN(numero)) {
  numero = Number(numero); 
  if (numero % 2 === 0) {
    alert("É um número par");
  } else {
    alert("É um número ímpar");
  }
} else {
  alert("Não é um número válido");
}
