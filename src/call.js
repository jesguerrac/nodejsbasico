module.exports = {
    sync: function(nombre) {
       return `Hola ${nombre}! Bienvenido a Node.js`;
        //return 'Hola'+nombre+'! Bienvenido a Node.js';
    },
    withCallback: function(nombre, cb) {
        setTimeout(()=>{
            console.log(cb(nombre));
        }, 5000);
    },
    withPromises: function(nombre) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(nombre);
            }, 5000); 
        })
    },
    great : function(nombreCompleto){
        console.log(`Hola ${nombreCompleto}! Bienvenido a Node.js`);
    },
    withPromise : function(nombre, apellido){
        console.log('llamado');
        return new Promise((resolve, reject) =>{
            console.log('Ejecutando espera..');
            setTimeout(()=>{
                console.log('Resolviendo, espera');
                resolve(`${nombre} ${apellido}`);
            },5000);
        })
    }
}