// Definir un array de números
let numeros = [10, 20, 30, 40, 50, 60];

// Usar Array.slice() para extraer una porción del array
let porcion1 = numeros.slice(1, 4);  // Extraer desde el índice 1 hasta el 4 (sin incluir el índice 4)
console.log("Porción 1 (índice 1 a 4):", porcion1);

let porcion2 = numeros.slice(3);  // Extraer desde el índice 3 hasta el final del array
console.log("Porción 2 (índice 3 hasta el final):", porcion2);

let porcion3 = numeros.slice(-3);  // Extraer los últimos 3 elementos del array
console.log("Porción 3 (últimos 3 elementos):", porcion3);

// Mostrar el array original (que no se modifica)
console.log("Array original:", numeros);
