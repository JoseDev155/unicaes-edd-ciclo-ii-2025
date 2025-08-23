const estudiantes = [
    { nombre: "Miguel", edad: 23, promedio: 8.5 },
    { nombre: "Carlos", edad: 20, promedio: 5.2 },
    { nombre: "Julia", edad: 20, promedio: 4.8 },
    { nombre: "Mario", edad: 21, promedio: 9.9 },
    { nombre: "Ana", edad: 22, promedio: 6.7 },
    { nombre: "María", edad: 21, promedio: 7.1 },
    { nombre: "Lucía", edad: 19, promedio: 3.5 },
    { nombre: "Laura", edad: 22, promedio: 8.0 },
    { nombre: "Sofía", edad: 20, promedio: 4.2 },
    { nombre: "Valentina", edad: 23, promedio: 9.5 }
];

estudiantes.sort((a, b) => {
    if (b.promedio !== a.promedio) {
        return b.promedio - a.promedio; // Descendente
    }
    return a.edad - b.edad; // Ascendente
});
console.log("Ordenados por promedio descendente y luego por edad ascendente:", estudiantes);