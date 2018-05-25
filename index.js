// importando as redes treinadas para AND, OR e XOR
let and = require('./and.js');
let or = require('./or.js');
let xor = require('./xor.js');

// ler arquivo txt
let readModule = require ('./readTxt');
let read = readModule.readFile('./entradas.txt');
let entradas = read.split(';');

console.log("testando a rede neural para AND");
entradas.forEach(element => {
    let ent = element.split(',');
    let x1 = parseInt(ent[0]);
    let x2 = parseInt(ent[1]);
    console.log(`AND - Entrada [${x1},${x2}] - Saída ${and.resultado([x1, x2])}`);
});

console.log("\ntestando a rede neural para OR");
entradas.forEach(element => {
    let ent = element.split(',');
    let x1 = parseInt(ent[0]);
    let x2 = parseInt(ent[1]);
    console.log(`OR - Entrada [${x1},${x2}] - Saída ${or.resultado([x1, x2])}`);
});


console.log("\ntestando a rede neural para XOR");
entradas.forEach(element => {
    let ent = element.split(',');
    let x1 = parseInt(ent[0]);
    let x2 = parseInt(ent[1]);
    console.log(`XOR - Entrada [${x1},${x2}] - Saída ${xor.resultado([x1, x2])}`);
});