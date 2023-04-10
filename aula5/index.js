function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}

saudacao('Fernando');
saudacao('Maria'); 

function saudacao2(name) {      //com o RETURN, a função irá retornar algum valor e pode ser usado dentro de uma variavel por ex
    return `Bom dia ${name}`;
}

//ARROW FUNCTION

const raiz = n => n ** 0.5;  //a ARROW FUNCTION funciona simplificando a função. seria como abaixo:
console.log(`Arrow function de raiz quadrada de 9 é igual a: ${raiz(9)}`);


const raiz2 = function(n){  //ou seja, a Arrow, retira a necessidade de escrever "function" e os parenteses, sem necessidade
    return n ** 0.5;        //de um RETURN também.
};
console.log(`A mesma function sem arrow com o resultado da raiz de 9: ${raiz2(9)}`);

//duvidas na aula 31 :D