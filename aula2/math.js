let num = '10.5'

let num1 = Math.floor(num)                                  // arredondar para baixo
let num2 = Math.ceil(num)                                   // arredondar para cima
let num3 = Math.round(num)                                  // arredondar de forma automática
console.log(Math.max(1,2,3,8,-22,2000));                    // pegar o maior número 
console.log(Math.min(1,2,3,8,-22,2000));                    // pegar o menor número 
const aleatorio = Math.round(Math.random() * (10 - 5) + 5)  // gera um número aleatório entre 5 e 10


console.log(num1, num2, num3, aleatorio);