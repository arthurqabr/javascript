//Calculadora de IMC e situação do paciente


const formulario = document.querySelector('.form-imc');
const retorno = document.querySelector('#resultado')


//a partir daqui é onde o filho chora e a mãe não vê
function recebeDadosPaciente(e){
    e.preventDefault();

    const inputPeso = document.querySelector('#informePeso');
    const inputAltura = document.querySelector('#informeAltura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const imc = calculaImc(peso,altura);

    retorno.innerHTML = `<p>O IMC é ${imc}</p>`;
    retorno.innerHTML += `<p>Você está ${verificaSituacao(imc)}</p>`;

}

function calculaImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function verificaSituacao(imc){
    if (imc < 18.5 ){
        return(`abaixo do peso`);
    } else if (imc >= 18.5 && imc <= 24.9 ) {
        return(`com peso normal`);
    } else if (imc >= 25 && imc <= 29.9) {
        return(`com sobrepeso`);
    } else if (imc >= 30 && imc <= 34.9) {
        return(`com obesidade grau 1`);
    } else if (imc >= 35 && imc >= 39.9) {
        return(`com obesidade grau 2`);
    }


}






formulario.addEventListener('submit', recebeDadosPaciente);
