// Array
const estudiantes = [
    { nombre: "Miguel", edad: 23 },
    { nombre: "Carlos", edad: 20 },
    { nombre: "Julia", edad: 20 },
    { nombre: "Mario", edad: 21 },
    { nombre: "Ana", edad: 22 },
    { nombre: "María", edad: 21 },
    { nombre: "Lucía", edad: 19 },
    { nombre: "Laura", edad: 22 },
    { nombre: "Sofía", edad: 20 },
    { nombre: "Valentina", edad: 23 }
];

// Ordenar un arreglo de estudiantes:
// Primero por edad en orden ascendente
// Si dos estudiantes tienen la misma edad, ordenarlos por nombre en orden alfabético
estudiantes.sort((a, b) => {
    if (a.edad !== b.edad) {
        return a.edad - b.edad; // Ascendente por edad
    }
    return a.nombre.localeCompare(b.nombre); // Alfabético por nombre
});

console.log("Estudiantes ordenados por edad y luego por nombre:", estudiantes);