const personajes = [`Goku`,`Vegueta`, `Trunks`];
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return[`ABC`, 123];
}


const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) =>{ //se pueden poner funciones dentro de un arreglo (llamen a dios)
    return [valor, ()=>{console.log(`Hola Mundo`)}];
}

const [nombre, setNombre] = useState (`goku`);

console.log(nombre, setNombre);