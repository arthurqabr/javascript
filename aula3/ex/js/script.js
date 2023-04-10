const numero = Number(prompt('Digite um número')); //cria o campo de texto do navegador para digitar o número
const numeroTitulo = document.getElementById('numero-titulo'); //busca e define na variável o valor do elemento no HTML com esse ID
const texto = document.getElementById('texto'); //busca e define na variável o valor do elemento no HTML com esse ID

numeroTitulo.innerHTML = numero; //altera o valor da variável para receber o numero preenchido pelo usuário

//innerHTML irá alterar o que está na tag com o ID para o que quiser escrever ou realizar contas, etc...

texto.innerHTML = `<p>A raíz quadrada é: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É Not a Number (NaN): ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
texto.innerHTML += `<p>Seu número - 2 é: ${numero - 2}</p>`;


// += serve para adicionar outra coisa ao invés de substituír. Caso não estivesse com o "+", seria substituído pelo último 
//item