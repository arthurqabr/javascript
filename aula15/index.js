const person = {
    nam: 'Arthur',
    surName: 'Carvalho',
    age: 27,
    adress: {
        street: 'Augusto Souza Coutinho',
        number: 304
    }
};

// Atribuição via desestruturação

const { nam, surName, age } = person;
console.log(nam, surName, age);