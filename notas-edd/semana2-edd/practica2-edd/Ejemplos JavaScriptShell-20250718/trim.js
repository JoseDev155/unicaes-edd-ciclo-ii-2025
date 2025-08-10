// Definir una cadena de texto con espacios al principio y al final
let texto = "   JavaScript es genial   ";

// Mostrar la cadena original (con espacios)
console.log("Cadena original:", `"${texto}"`);

// Usar String.trim() para eliminar los espacios en blanco al principio y al final
let textoSinEspacios = texto.trim();

// Mostrar el resultado después de usar trim()
console.log("Cadena sin espacios:", `"${textoSinEspacios}"`);
