// Definir un array de colores
let colores = ["Rojo", "Verde", "Azul", "Amarillo"];

// Mostrar el array original
console.log("Array original:", colores);

// Usar Array.pop() para eliminar el último elemento del array
let colorEliminado = colores.pop();

// Mostrar el color que fue eliminado
console.log("Color eliminado:", colorEliminado);

// Mostrar el array después de usar pop()
console.log("Array después de eliminar el último color:", colores);

// Usar Array.pop() de nuevo para eliminar otro elemento
colorEliminado = colores.pop();
console.log("Otro color eliminado:", colorEliminado);

// Mostrar el array actualizado
console.log("Array actualizado:", colores);