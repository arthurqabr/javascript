//Operação ternária

const { performTouchAction } = require("wd/lib/commands");

const nivelPontuacao = 1999;

if (nivelPontuacao >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}

/*
Para minimizar o código, podemos utilizar "?" e ":"
A ? é utilizada em condições TRUE e : em condições FALSE. Por exemplo:
*/

//utilizando a mesma variável nivelPontuação

const nivelUsuario = nivelPontuacao >=1000 ? "Usuário VIP" : "Usuário normal";
console.log(nivelUsuario);

/*
A operação ternária também pode ser utilizada para definir um padrão de valor. 
Por exemplo: eu quero definir que o valor padrão de cor é Preto
*/

const corUsuario = null;
const corPadrão = corUsuario || 'Preto';

console.log(corPadrão);

//Neste caso, como o usuário não informou a cor, ficou selecionada a cor padrão. Ou seja, cor usuário OU cor padrão

