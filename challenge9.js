const prompt = require("prompt-sync")();
let Val = parseInt(prompt("entrez le nombre de l'éléments : "));

const Tab = [];

for (let i = 0 ; i < Val ; i ++) {
    let Valu = parseInt(prompt("entrez la valure: "))
    Tab.push(Valu);
}

const Tab2 = [];

for (let i = Tab.length-1; i >= 0 ; i--) {
    Tab2.push(Tab[i]);
}

console.log(Tab2);