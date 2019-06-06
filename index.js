/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */
const cowsay = require("cowsay");
const add = require("./src/addition");
const sim = require("./src/intensive");
console.log(cowsay.say({text:"hola",e:"O9",T:"u"}));

add.syncSum(1,3);
add.asyncSum(5,6);

sim.simulateSync();
sim.simulateAsync();