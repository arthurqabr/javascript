const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
const [firstNumber, secondNumber, thirdNumber, ...rest] = numeros; //os "..." serve para pegar o resto dos itens do array

console.log(firstNumber, secondNumber);
console.log(rest); //serão exibidos todos os outros valores do array "numeros"

//é possível buscar dados de um array, dentro de um array:

//                        0          1          2
//                    0  1  2    0  1  2    0  1  2
const arrInsdeArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(arrInsdeArr[2][0]); //será encontrado o valor no Index 2 do array principal e o valor no Index 0 do array selecionado

