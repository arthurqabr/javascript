let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');

num1 = Number(num1); //poderia ser parseInt ou parseFloat
num2 = Number(num2); //poderia ser parseInt ou parseFloat

const resultado = num1+num2;

alert(`A soma dos números é: ${resultado}`);