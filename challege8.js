const prompt = require("prompt-sync")();

let u = parseInt(prompt("entrez le nombre de l'éléments: "))


const origin = [];
for (let i = 0 ; i < u ; i++){
    let v = parseInt(prompt("entrez le nombre de l'élément :"));
    origin.push(v);
}


const copié = [];
for (let i = 0 ; i < origin.length ; i++) {
    copié.push(origin[i])
}
console.log(`origin: ${origin}`);
console.log(`copié: ${copié}`);