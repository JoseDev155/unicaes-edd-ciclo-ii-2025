// Array
let frase = "Programar en JavaScript es divertido";

// 1 - Divide la frase en un array de palabras usando split()
let palabras = frase.split(" ");

// 2 - Divide la frase cada vez que aparezca la letra "a"
let palabrasConA = frase.split("a");

// 3 - Muestra los resultados
console.log("Frase original:", frase);
console.log("Palabras:", palabras);
console.log("Palabras con 'a':", palabrasConA);