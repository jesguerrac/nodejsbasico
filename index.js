/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */
const cowsay = require("cowsay");
const add = require("./src/addition");

console.log(cowsay.say({text:"hola",e:"O9",T:"u"}));

add.syncSum(1,3);
add.asyncSum(5,6);