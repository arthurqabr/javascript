for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`)
}

//para fazer um for de 10 em 10 por exemplo basta usar i += 10 ao invés de i++

for (let i = 0; i <= 500; i += 10) {
    console.log(`De 10 em 10: ${i}`)
}

//para verificar se um número é par ou ímpar

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0;
    console.log(i, par)
}

