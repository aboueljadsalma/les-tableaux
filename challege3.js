const prompt = require('prompt-sync')();
const nombre = parseInt(prompt("Combien d'elements ? "));
const nombres = [];
let somme = 0;
for (let i = 0 ; i < nombre ; i++ ){
    const element = parseInt(prompt("entrez un élèment : "));
    somme = somme + element
}
console.log("la somme totale est :" + somme );