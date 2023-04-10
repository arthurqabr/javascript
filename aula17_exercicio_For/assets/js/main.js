const elements = [
    {tag: 'p', texto: 'Frase 1'},           //indice 0
    {tag: 'div', texto: 'Frase 2'},         //indice 1
    {tag: 'footer', texto: 'Frase 3'},      //indice 2
    {tag: 'section', texto: 'Frase 4'},     //indice 3
];

const container = document.querySelector('.container');
const div = document.createElement('div');


for (let i = 0; i < elements.length; i++) {
    let { tag, texto } = elements[i];
    let tagCreated = document.createElement(tag);
    tagCreated.innerHTML = texto;
    div.appendChild(tagCreated);
}

container.appendChild(div);

/* 
appenChild significa que irá criar um filho dentro do elemento que criei anteriormente.
nesse caso, a variável tagCreated, cria um elemento "tag" que, dependendo do índice será um <p>, <div>, <footer> ou <section>

Entretanto, só será exibido na tela quando eu informar onde será criado, ou seja, qual tag será o pai desse novo elemento.

Por isso foi criado a variável "div", que irá criar uma nova div.

Para isso usamos a várial div, para criar um filho nela que irá receber o valor do índice. ficando da seguinte forma:

div.appendChild(tagCreated)

Nesse caso, estou informando que, dentro da variável "div", quero criar um filho que irá receber a tag e o valor, que será "tagCreated".

*/