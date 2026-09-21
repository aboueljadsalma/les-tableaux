const prompt = require('prompt-sync')();
const nombre = parseInt(prompt("Donnez le nombre des elements : "));
const tableau = [];
for (let i = 0; i < nombre; i++) {
    const element = parseInt(prompt("Donnez un nombre : "));
    tableau.push(element);
}
const facteur = parseInt(prompt("Donnez le facteur de multiplication : "));
for (let i = 0; i < tableau.length; i++) {
    tableau[i] = tableau[i] * facteur;
}
console.log("Le tableau resultant est : " + tableau );