const prompt = require('prompt-sync')();
let S = parseInt(prompt("entrez les numero : "));
let list = [];
let M = 1;

for(let i = 0 ; i < S ; i++){
    let push = parseInt(prompt("push number: "));
    list.push(push);
    M = M * push

}
console.log(list)
  console.log(M);
