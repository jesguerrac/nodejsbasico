/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */
const call = require("./src/call");

console.log(call.sync("pedro"));

    //call.withCallback("carlo",call.sync);

    console.log(call.withPromises("ellooo"));

    call.withPromises("ellooo")
    .then (name => {console.log(name)})
    console.log("hoy voy a morir");

    call.great("carlos");
    
    call.withPromise('Alberto', 'Jaramillo')
            .then(n => console.log(n));
    
    async function callwithpromise(){
        const fullname = await call.withPromise('Alberto', 'Jaramillo')
            console.log(fullname);

    }

    callwithpromise();