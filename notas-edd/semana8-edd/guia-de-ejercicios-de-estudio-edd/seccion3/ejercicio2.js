const prompt = require('prompt-sync')({ sigint: true});

// Array
const estudiantes = [
    { nombre: "Ana", edad: 22, carrera: "Ingeniería" },
    { nombre: "Luis", edad: 20, carrera: "Medicina" },
    { nombre: "Carlos", edad: 22, carrera: "Derecho" },
    { nombre: "Marta", edad: 19, carrera: "Ingeniería" },
    { nombre: "Sofía", edad: 21, carrera: "Arquitectura" }
];

// Permite al usuario ingresar una carrera y muestra cuántos estudiantes pertenecen a ella
const carrera = prompt("Ingrese una carrera para buscar estudiantes: ");
const carreraFiltrada = carrera.trim();

const estudiantesFiltrados = estudiantes.filter(estudiante => {
    return estudiante.carrera.toLowerCase() == carreraFiltrada.toLowerCase();
});

if (estudiantesFiltrados.length > 0) {
    console.log("Estudiantes en la carrera de " + carreraFiltrada + ": " + estudiantesFiltrados.length);
} else {
    console.log("No hay estudiantes de esa carrera");
}