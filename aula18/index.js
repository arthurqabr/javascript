const frutas = ['Pera', 'Maça', 'Uva'];


//é possível realizar um for mais simples que faz a mesma coisa

// for (let i = 0; i < frutas.length; i++) {
// console.log(frutas[i]);
// }

for (let i in frutas) {
    console.log(i);
}

//o "i", neste caso, irá verificar os índices dentro do array "frutas" e irá exibir apenas o índice

//outros exemplos:

const pessoa = {
    nome: 'Arthur',
    sobrenome: 'Carvalho',
    idade: 27
};

for (let i in pessoa) {
    console.log(i,':', pessoa[i]);
};