// Definir una cadena de texto
let texto = "JavaScript es increíble";

// Usar String.slice() para extraer una parte de la cadena
let parte1 = texto.slice(0, 10);  // Extraer desde el índice 0 hasta el índice 10
console.log("Parte 1 (índice 0 a 10):", parte1);

let parte2 = texto.slice(11);  // Extraer desde el índice 11 hasta el final
console.log("Parte 2 (desde el índice 11 hasta el final):", parte2);

let parte3 = texto.slice(-10);  // Extraer los últimos 10 caracteres
console.log("Parte 3 (últimos 10 caracteres):", parte3);

let parte4 = texto.slice(4, 14);  // Extraer desde el índice 4 hasta el 14
console.log("Parte 4 (índice 4 a 14):", parte4);
