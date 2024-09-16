const persona = {
    nombre: `Tony`,
    edad: `45`,
    clave: `ironman`

};
const { clave } = persona; //esta es la manera de sacar solo el dato que nos intereza sin tener que poner, "persona.clave"
                            
console.log(clave);

const {nombre:nombre2} = persona; //manera de renombrar un atributo del objeto
console.log(nombre2);

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// const retornaPersona = (usuario) => {
//     const {edad,clave,nombre,} = usuario;  //Desestructuracion desde una funcion  
//     console.log(edad, clave, nombre)
// }
// retornaPersona(persona);


// const retornaPersona = ({nombre}) => { //se puede desestructurar desde el arugmento de la funcion
//     console.log(nombre);
// }
// retornaPersona(persona);


// const retornaPersona = ({nombre, edad, rango = `capitan`}) => { 
//     console.log(nombre, edad, rango);         //agregamos "rango" al objeto
// }                                             //no funcionaria si capitan ya estubiera definido en el objeto, no se cambiaria    
// retornaPersona(persona);

// const useContext = ({ clave, nombre, edad, rango = `capitan`}) => { 
//  return{
//     nombreClave: clave,
//     anios: edad
//  }}
//  const avenger = useContext (persona); //const {nombreClave, anios} = useContext (persona;)
// const {nombreClave, anios} = avenger;  //lo mismo pero sin la variable avenger
// console.log(nombreClave, anios); 


const useContext = ({ clave, nombre, edad, rango = `capitan`}) => { 
    return{
       nombreClave: clave,
       anios: edad,
       latIng:{ //objeto anidado
            lat: 14.1213,
            ing: -12.3232
       }
    }}

    const {nombreClave, anios, latIng:{lat, ing}} = useContext(persona);
    console.log(lat, ing);       //desestructuracion de opbjeto anidado
                                // const {lat, ing} = lating; funciona igual pero con un paso extra 