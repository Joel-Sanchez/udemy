const persona = { 
    nombre: `Tony`,
    apellido: `Stark`,
    edad: 45,
    direccion:{
        ciudad:`New York`,
        zip: 341956,
        lat: 12.21,
        ing: 12.21
    }
};

const persona2 = {...persona}; //copia el objeto en otro mas para poder modificar algo, si lo hicieramos remplazando la variable
persona2.nombre = `peter`;     //lo remplazamos para todos. 

console.log(persona);
console.log(persona2);