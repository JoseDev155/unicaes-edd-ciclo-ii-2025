// Definir un array de números
let numeros = [1, 2, 3, 4, 5];

// Usar Array.map() para crear un nuevo array donde cada número se multiplica por 2
let numerosMultiplicados = numeros.map(function(numero) {
    return numero * 2;
});

// Mostrar el array original
console.log("Array original:", numeros);

// Mostrar el nuevo array con los números multiplicados por 2
console.log("Array multiplicado:", numerosMultiplicados);

// Otro ejemplo: convertir un array de cadenas a mayúsculas
let palabras = ["hola", "mundo", "java"];
let palabrasEnMayusculas = palabras.map(function(palabra) {
    return palabra.toUpperCase();
});

console.log("Palabras originales:", palabras);
console.log("Palabras en mayúsculas:", palabrasEnMayusculas);