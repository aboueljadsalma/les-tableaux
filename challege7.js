const prompt = require('prompt-sync')();

const nombre = parseInt(prompt("Donnez le nombre des elements : "));

const tableau = [];
let x = 0;
for (let i = 0; i < nombre; i++) {
    const element = parseInt(prompt("Donnez un nombre : "));
    tableau.push(element);
}
for (let i = 0; i < tableau.length- 1; i++) {
    for (let j = i + 1; j < tableau.length; j++) {
        if (tableau[i] > tableau[j]) {
            x = tableau [i];
        tableau[i] = tableau[j];
            tableau[j] = x;
        }
    }
}
console.log("Tableau trie : " + tableau);