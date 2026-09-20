const prompt = require('prompt-sync')();
let elements = parseInt(prompt('combien d éléments dans le tableau ? :'));
const tableau =  [];
    for (let i = 0; i < elements ; i++) {
        const elements =parseInt( prompt('entrez les elements : '));
       tableau.push(elements);
    }
   console.log("voici votre tableau :")
    console.log(tableau);