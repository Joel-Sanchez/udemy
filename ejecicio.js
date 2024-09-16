// const array1 = [23, 5, 40, 38, 1,29];

// let cambiado;
// do { 
//     cambiado = false;
//     for (let i = 0; i < array1.length -1; i++) {
//     const element = array1[i];
//     if (element > array1[i + 1]){
//         cambiado= true;
//     [array1[i], array1[i + 1]] = [array1[i + 1], array1[i]];
//     }}
    
// }  while(cambiado)
// console.log(array1);


// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr; // Un array de un solo elemento ya está ordenado
//     }
    
//     const middle = Math.floor(arr.length / 2); // Encuentra el punto medio
//     const left = arr.slice(0, middle); // Divide el array en la mitad izquierda
//     const right = arr.slice(middle); // Divide el array en la mitad derecha
    
//     // Llamada recursiva para ordenar cada mitad
//     return merge(mergeSort(left), mergeSort(right));
// }

// // Función para combinar dos arrays ordenados
// function merge(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
    
//     // Combina ambos arrays hasta que uno de los dos se agote
//     while (leftIndex < left.length && rightIndex < right.length) {
//         console.log(Comparando: ${left[leftIndex]} y ${right[rightIndex]}); // Mostrar comparaciones
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++; // Avanza en el array izquierdo
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++; // Avanza en el array derecho
//         }
//     }
    
//     // Combina los elementos restantes (si quedan) de uno de los arrays
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// const array = [38, 27, 43, 3, 9, 82, 10];
// console.log(mergeSort(array)); // [3, 9, 10, 27, 38, 43, 82]

 