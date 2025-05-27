let numeros = [83, 52, 96, 36, 9, 31, 69, 35];
const pares = numeros.filter(n => n % 2 === 0);
const impares = numeros.filter(n => n % 2 !== 0);

const somaPares = pares.reduce((n1, n2) => n1 + n2);
const produtosDosImpares = impares.reduce((n1, n2) => n1 * n2); 

console.log(pares);
console.log(impares);
console.log("soma dos números pares: ", somaPares);
console.log("Produto dos números ímpares: ", produtosDosImpares);