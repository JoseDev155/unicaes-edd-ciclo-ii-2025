// Array
const estudiantes = [
    { nombre: "Ana", notas: [8, 9, 7] },
    { nombre: "Luis", notas: [6, 5, 7] },
    { nombre: "Carlos", notas: [9, 8, 10] },
    { nombre: "Marta", notas: [7, 6, 8] },
    { nombre: "Sofía", notas: [10, 9, 9] }
];

// Muestra el nombre de cada estudiante junto con su nota más alta
for (let estudiante of estudiantes) {
    const notaMaxima = Math.max(...estudiante.notas);
    console.log(`Nombre: ${estudiante.nombre}, Nota mas alta:  ${notaMaxima}`);
}