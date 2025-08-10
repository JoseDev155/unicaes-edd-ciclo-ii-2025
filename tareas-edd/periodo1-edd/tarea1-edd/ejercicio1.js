// Array
let numeros = [5, 10, 15, 20, 25, 30, 35]; 

// 1 - Extraer los elementos desde el segundo hasta el cuarto
let subArray1 = numeros.slice(1, 4);

// 2- Extraer los ultimos cuatro elementos
let subArray2 = numeros.slice(-4);

// 3 - Mostrar el array original y los subarrays
console.log("Array original:", numeros);
console.log("Subarray (del segundo al cuarto elemento):", subArray1);
console.log("Subarray (últimos cuatro elementos):", subArray2);