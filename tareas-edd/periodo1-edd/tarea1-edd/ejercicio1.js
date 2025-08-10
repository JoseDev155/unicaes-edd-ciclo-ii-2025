// Array
let numeros = [5, 10, 15, 20, 25, 30, 35]; 

// 1 - Extrae una porción del array que contenga los elementos desde el segundo hasta el cuarto elemento
let subArray1 = numeros.slice(1, 4);

// 2- Extrae los últimos cuatro elementos del array
let subArray2 = numeros.slice(-4);

// 3 - Muestra por consola el array original y las porciones obtenidas
console.log("Array original:", numeros);
console.log("Subarray (del segundo al cuarto elemento):", subArray1);
console.log("Subarray (últimos cuatro elementos):", subArray2);
