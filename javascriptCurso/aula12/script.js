const varA = 'A'; // B
const varB = 'B'; // C
const varC = 'C'; // A

varA = varB;
varB = varC;
varC = varA;


console.log(varA, varB, varC);