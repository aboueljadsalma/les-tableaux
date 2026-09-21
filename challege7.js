const prompt = require('prompt-sync')();

const nombre = parseInt(prompt("Donnez le nombre des elements : "));

const tableau = [];

for (let i = 0; i < nombre; i++) {
    const element = parseInt(prompt("Donnez un nombre : "));
    tableau.push(element);
}
for (let i = 0; i < tableau.length; i++) {
    for (let j = i + 1; j < tableau.length; j++) {
        if (tableau[i] > tableau[j]) {
            const temp = tableau[i];
            tableau[i] = tableau[j];
            tableau[j] = temp;
        }
    }
}
console.log("Tableau trie : " + tableau);