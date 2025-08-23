let estudiantes = [
    { nombre: "Ana", edad: 22, promedio: 8.5 },
    { nombre: "Luis", edad: 20, promedio: 9.2 },
    { nombre: "MarÃ­a", edad: 23, promedio: 7.8 },
    { nombre: "Mario", edad: 21, promedio: 8.9 }
];
// De menor a mayor
estudiantes.sort((a, b) => a.edad - b.edad);

console.log("Ordenados por edad:");
console.log(estudiantes);
// De mayor a menor
estudiantes.sort((a, b) => b.promedio - a.promedio);

console.log("Ordenados por promedio descendente:");
console.log(estudiantes);
// Orden alfabÃ©tico
estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre));

console.log("Ordenados por nombre:");
console.log(estudiantes);
estudiantes.sort((a, b) => {
    if (b.promedio !== a.promedio) {
        return b.promedio - a.promedio; // Descendente
    }
    return a.nombre.localeCompare(b.nombre); // Ascendente
});

console.log("Ordenados por promedio y luego nombre:");
console.log(estudiantes);