//Para buscar dados sem ser document.getElementById, ClassName, etc.. Podemos usar 
//"document.querySelector()". Com isso, passamos os parâmetros igual no CSS.

//Por exemplo: document.querySelector('.form')
//Dessa forma, estou buscando no HTML, os itens que possuem a classe FORM.
// Classe é selecionada por "." e ID é selecionado por "#"

function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];         //array criado para passar os dados da função recebeEventoForm

    function recebeEventoForm(evento){ //estou passando o parâmetro "evento" para retirar o envio do form com "preventDefault()"
        evento.preventDefault();       //irá executar quando, fora da função, eu chamo "form.addEventListener"

        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.sobrenome');
        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>O nome da pessoa é: ${nome.value}</p>`;
        resultado.innerHTML += `<p>O sobrenome da pessoa é: ${sobrenome.value}</p>`;
        resultado.innerHTML += `<p>O peso da pessoa é: ${peso.value}</p>`;
        resultado.innerHTML += `<p>A altura da pessoa é: ${altura.value}</p>`;
    }


    form.addEventListener('submit', recebeEventoForm)  //Aqui ele recebe o comando declarado na função recebeEventoForm


}
meuEscopo();