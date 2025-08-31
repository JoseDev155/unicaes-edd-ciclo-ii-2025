// Array
const estudiantes = [
    { nombre: "Ana", notas: [8, 9, 7] },
    { nombre: "Luis", notas: [6, 5, 7] },
    { nombre: "Carlos", notas: [9, 8, 10] },
    { nombre: "Marta", notas: [7, 6, 8] },
    { nombre: "Sofía", notas: [10, 9, 9] }
];

// Calcula y muestra el promedio general de todos los estudiantes en el arreglo
let sumaTotal = 0;
let cantidadNotas = 0;

for (let estudiante of estudiantes) {
    const sumaNotas = estudiante.notas.reduce((a, b) => a + b, 0);
    sumaTotal += sumaNotas;
    cantidadNotas += estudiante.notas.length;
}

const promedioGeneral = sumaTotal / cantidadNotas;
console.log(`Promedio general de todos los estudiantes: ${promedioGeneral.toFixed(2)}`);