const prompt = require('prompt-sync')();
const nombre = parseInt(prompt("Combien d'elements dans le tableau ? "));
const tableau = [];
for (let i = 0; i < nombre; i++) {
    const element = parseInt(prompt("Entrez un nombre : "));
    tableau.push(element);
}
let max = tableau[0];
for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > max) {
        max = tableau[i];
    }
}
console.log("Le plus grand element c'est : " + max);