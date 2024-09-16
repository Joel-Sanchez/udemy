const saludar = function (nombre){
    return `hola, ${nombre}`;
}

const saludar2 = (nombre) =>{
    return `hola, ${nombre}`; //todas son la misma funcion pero simplificada con la flecha
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`; //para datos primitivos no se ocupan los parentesis pero igual se pueden poner

console.log(saludar(`Goku`));

console.log(saludar2(`Vegeta`));
console.log(saludar3(`goku`));
console.log(saludar4());

const getUser = () =>({ //para objetos o datos complejos se tiene que poner parentesis para que funcione
    uid: `abc123`,
    username: `macanudo`
});
console.log(getUser());
console.log(user);
