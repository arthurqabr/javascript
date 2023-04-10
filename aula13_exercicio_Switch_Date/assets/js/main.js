//Pegar a data atual e apresentar na tela


const textDiv = document.querySelector('.texto-div');


//a partir daqui é onde o filho chora e a mãe não vê

const atualDate = new Date();

function returnDateText(atualDate) {
    let dayWeek = atualDate.getDate();
    const day = atualDate.getDay();
    let month = (atualDate.getMonth() + 1);
    let year = zeroAtLeft(atualDate.getFullYear());
    let hour = zeroAtLeft(atualDate.getHours());
    let min = zeroAtLeft(atualDate.getMinutes());

    switch(dayWeek){
        case 0:
            dayWeek = `Domingo`;
            break;
        case 1:
            dayWeek = `Segunda-feira`;
            break;
        case 2:
            dayWeek = `Terça-feira`;
            break; 
        case 3:
            dayWeek = `Quarta-feira`;
            break; 
        case 4:
            dayWeek = `Quinta-feira`;
            break;
        case 5:
            dayWeek = `Sexta-feira`;
            break;
        case 6:
            dayWeek = `Sábado`;
            break; 
        default:
            dayWeek = `Isto non ecxiste`
            break; 
    }

    return `${dayWeek}, ${day} de ${month}, de ${year}, às ${hour}:${min}.`


}

function zeroAtLeft (num) {
    return num >= 10 ? num : `0${num}`;
}

textDiv.innerHTML = `${returnDateText(atualDate)}`;


/* É POSSÍVEL FAZER TUDO ISSO FEITO ANTERIORMENTE COM POUQUÍSSIMAS LINHAS:
*/

const textFewRows = document.querySelector('.texto-div-linhas');
const dateFewRows = new Date();
const options = {               //criado a variável que irá buscar a data completa e as horas simples, sem segundos
    dateStyle: 'full',
    timeStyle: 'short'
};

textFewRows.innerHTML = dateFewRows.toLocaleDateString('pt-BR', options); //alterado para parâmetros PT-BR
