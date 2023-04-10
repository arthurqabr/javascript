//OBJETOS

// Para criar um objeto, é o mesmo processo de uma variável, porém ele é construído entre chaves e as características
//são separadas por "," ao invés de ";". Além disso, as variáveis recebem valor através de ":"

const pessoa1 = {
    nome: 'Arthur',
    sobrenome: 'Carvalho',
    idade: 26
};

console.log(pessoa1.nome);
console.log(pessoa1.idade);

//para evitar preencher toda vez esses valores, criamos uma função para minimizar a quantidade de código

function criaPessoa(name, surname, age) {
    return {
        name: name,
        surname: surname,
        age: age
    };
}

const pessoa2 = criaPessoa('Arthur', 'Oliveira Carvalho', '27');
const pessoa3 = criaPessoa('Larissa', 'Lopes', '26');
const pessoa4 = criaPessoa('Fernando', 'Mendes', '55');

console.log(pessoa2.name, pessoa3.name, pessoa4.name);

//A mesma função quando irá receber os mesmos valores dos parâmetros, pode ser simplificada sem precisar colocar ":"

function criaPessoa2(name, surname, age) {
    return {
        name, surname, age
    };
}

const pessoa5 = criaPessoa2('Arthur', 'Oliveira Carvalho', '27');
console.log(pessoa5.name);

//Dentro de um objeto é possível criar MÉTODOS (method), da seguinte forma

const pessoa6 = {
    nombre: 'Larissa',
    sobrenombre: 'Lopes',
    idadre: 25,

    fala() {    //este é o MÉTODO, estamos criando o método FALA para exibir no console
        console.log(`${this.nombre} ${this.sobrenombre} está dando oi...`); //THIS significa tudo que está no objeto, não sendo necessário chamar o objeto pelo nome dele.
    }
}

pessoa6.fala(); //irá chamar o método que está dentro do objeto para executar. Será exibido no console a mensagem

//também é possível criar vários metodos dentro do objeto para retornar valores diferentes:

const pessoa7 = {
    nombre: 'Larissa',
    sobrenombre: 'Lopes',
    idadre: 25,

    fala() {    
        console.log(`${this.nombre} ${this.sobrenombre} está dando oi...`);
    },

    incrementaIdade() {
        this.idadre++; //this é o objeto, idadre é a idade que está dentro do objeto
    } //esse método irá incrementar +1 na idade cada vez que ele for chamado.
}

pessoa7.incrementaIdade(); //o método foi chamado 1 vez, somando +1 no valor da idade, resultando em 26
pessoa7.incrementaIdade(); //o método foi chamado 2 vezes, somando +2 no valor da idade, resultando em 27
pessoa7.incrementaIdade(); //o método foi chamado 3 vezes, somando +3 no valor da idade, resultando em 28
pessoa7.incrementaIdade(); //o método foi chamado 4 vezes, somando +4 no valor da idade, resultando em 29

console.log(pessoa7.idadre);