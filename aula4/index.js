// indexado   0123456789......
const nome = 'Arthur Carvalho'
console.log(nome[0]); //será exibido a primeira letra por estar no índice 0.


//Os arrays não são indexados por caracteres, mas por itens:

//indices           0          1          2
const alunos = ['Arthur', 'Larissa', 'Gislaine'];
console.log(alunos[2]); //será exibido o valor total que está no índice 2 por se tratar de um array.

// para alterar um único valor do array basta editar definindo qual array
alunos[2] = 'Ramon';
console.log(alunos); //irá exibir todos os alunos e o valor alterado acima.

console.log('O tamanho do array é: ' + alunos.length); //apresenta o tamanho do array

alunos[alunos.length] = 'Maria';    //como o tamanho não considera o 0, ou seja, sempre será +1 na quantidade de itens que
alunos[alunos.length] = 'João';     //existe, irá acrescentar os nomes em um index novo.

console.log(alunos); //resultado da inserção de Maria e João

//Para evitar de criar esse código inteiro, é possível usar a função PUSH para acrescentar um novo aluno:

alunos.push(`Otávio`);
console.log(alunos); // com a função push, foi exibido corretamente o novo integrante

alunos.unshift(`Luiza`); // Função UNSHIFT adiciona um item no começo do array ao invés de ser no final.
console.log(alunos);

alunos.pop(); // Função POP exclui o último item do array
console.log('Função POP: '+ alunos);

const removido = alunos.pop(); //o valor do índice excluído fica salvo em uma variável e ela pode ser utilizada outro lugar
console.log(removido +` foi removido(a) do array`); //mostra o aluno removido do array
console.log(alunos); //mostra o array sem o último aluno

const removePrimeiro = alunos.shift(); // Função SHIFT remove o primeiro item, ao contrário do POP que remove o último
console.log(alunos);

delete alunos[1]; //deleta o valor do índice sem excluir o índice. Deleta apenas o valor
console.log(alunos); //o índice permanece mas fica vazio

console.log(alunos.slice(0, 3)); //a função SLICE corta o restante e exibe apenas os 3 primeiros nomes