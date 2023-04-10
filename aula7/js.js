/*
Tipos de dados:
Primitivos (valores imutáveis): string, number, boolean, undefined, null, bigint e symbol

Valores primitivos são copiados para outras variáveis quando chamado. Por exemplo:

a = b       O valor de A será copiado para a variável B

Referência (mutáveis): array, object, function

Valores de referência são passados por referência, ou seja, se eu declaro que uma variável B recebe um array,
o mesmo array estará em B, qualquer alteração realizada tanto em A, quanto em B, será afetada nas duas variáveis
*/

//para que um valor de um objeto por exemplo seja independente quando for copiado, basta fazer da seguinte forma:

const a = {
    nome: 'Arthur',
    sobrenome: 'Carvalho'
}

const b ={...a} //os "..." significa spread (espalhar) e torna o valor do objeto B independente do valor do objeto A,
                //dessa forma, consigo utilizar os mesmos dados de A, porém alterando para o objeto B

console.log(a, b);

b.nome = 'Larissa'

console.log(a, b); //aqui é possível verificar que o valor nome foi alterado em B e em A permanece o mesmo