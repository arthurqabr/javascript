//função para informar ao usuário qual o dia da semana é o atual

const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = `Domingo`;
} else if (diaSemana === 1) {
    diaSemanaTexto = `Segunda`;
} else if (diaSemana === 2) {
    diaSemanaTexto = `Terça`;
} else if (diaSemana === 3) {
    diaSemanaTexto = `Quarta`;
} else if (diaSemana === 4) {
    diaSemanaTexto = `Quinta`;
} else if (diaSemana === 5) {
    diaSemanaTexto = `Sexta`;
} else if (diaSemana === 6) {
    diaSemanaTexto = `Sábado`;
} else {
    diaSemanaTexto = `Não existe mermão`;
}


console.log(diaSemana, diaSemanaTexto);

/*é possível fazer uma validação mais simples com SWITCH conforme abaixo. 
Ele irá alterar o valor da variável automaticamente quando declarado abaixo do case:
*/

const diaSemana2 = data.getDay();
let diaSemanaTexto2;

switch (diaSemana2) {
    case 0:                         //caso o diaSemana seja 0, irá executar o comando abaixo
        diaSemanaTexto2 = `Domingo`;
        break;                      //sempre é necessário informar o break, caso contrário, continuará validando
    case 1:
        diaSemanaTexto2 = `Segunda`;
        break;
    case 2:
        diaSemanaTexto2 = `Terça`;
        break;
    case 3:
        diaSemanaTexto2 = `Quarta`;
        break;
    case 4:
        diaSemanaTexto2 = `Quinta`;
        break;
    case 5:
        diaSemanaTexto2 = `Sexta`;
        break;
    case 6:
        diaSemanaTexto2 = `Sábado`;
        break;
    default:
        diaSemanaTexto2 = `não existe mermão`;
        break;
}

console.log(diaSemana, `Dia com switch ${diaSemanaTexto2}`);

//Isso também pode ser feito dentro de uma função. Nesse caso, não precisaria do break, basta utilizar return

function getDayWeekText(diaSemana) {
    let weekDayText;
    switch (diaSemana) {
        case 0:                         //caso o diaSemana seja 0, irá executar o comando abaixo
            weekDayText = `Domingo`;
            return weekDayText;                      //Aqui vamos usar o return
        case 1:
            weekDayText = `Segunda`;
            return weekDayText;
        case 2:
            weekDayText = `Terça`;
            return weekDayText;
        case 3:
            weekDayText = `Quarta`;
            return weekDayText;
        case 4:
            weekDayText = `Quinta`;
            return weekDayText;
        case 5:
            weekDayText = `Sexta`;
            return weekDayText;
        case 6:
            weekDayText = `Sábado`;
            return weekDayText;
        default:
            weekDayText = `não existe mermão`;
            return weekDayText;
    }
}

console.log(`Retorno com a função: Hoje é: ${getDayWeekText(diaSemana)}`);