// Crea un array con [100, 5, 25, 1, 50, 10]
let numeros = [100, 5, 25, 1, 50, 10];
// Ordénalo en orden ascendente y muéstralo
let numerosOrdenadosAsc = numeros.sort((a, b) => a - b);
console.log("Orden ascendente:", numerosOrdenadosAsc);
// Ordénalo en orden descendente y muéstralo
let numerosOrdenadosDesc = numeros.sort((a, b) => b - a);
console.log("Orden descendente:", numerosOrdenadosDesc);