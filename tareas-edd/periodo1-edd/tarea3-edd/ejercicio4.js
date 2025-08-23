const estudiantes = [
    { nombre: "Miguel", edad: 23, promedio: 8.5 },
    { nombre: "Carlos", edad: 20, promedio: 5.2 },
    { nombre: "Julia", edad: 20, promedio: 4.8 },
    { nombre: "Mario", edad: 21, promedio: 9.9 }
];

estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Ordenados alfabéticamente ascendente por nombre:");
console.log(estudiantes);