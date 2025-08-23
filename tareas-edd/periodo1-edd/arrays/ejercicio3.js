// Crea un array con los valores: [12, 17, 20, 15, 25, 30, 14]
let edades = [12, 17, 20, 15, 25, 30, 14];

// Usa .filter() para obtener solo las edades mayores o iguales a 18
let mayoresDeEdad = edades.filter(edad => edad >= 18);
// Muestra el array original y el filtrado
console.log("Array original:", edades);
console.log("Edades mayores o iguales a 18:", mayoresDeEdad);