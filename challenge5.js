const prompt = require('prompt-sync')();
const nombre = parseInt(prompt("Donnez le nombre des elements : "));
const tableau = [];
for (let i = 0; i < nombre; i++) {
    const element = parseInt(prompt("Entrez un nombre : "));
    tableau.push(element);
}
let min = tableau[0];
for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < min) {
        min = tableau[i];
    }
}
console.log("Le plus petit element est : " + min);