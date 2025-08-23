const prompt = require('prompt-sync')({ sigint: true});

const estudiantes = [
 { id: 1, nombre: "Ana", edad: 20, carrera: "Ingeniería en Sistemas" },
 { id: 2, nombre: "Luis", edad: 22, carrera: "Ingeniería Civil" },
 { id: 3, nombre: "María", edad: 21, carrera: "Ingeniería en Sistemas" },
 { id: 4, nombre: "Carlos", edad: 23, carrera: "Arquitectura" },
 { id: 5, nombre: "Elena", edad: 20, carrera: "Ingeniería en Sistemas" }
];

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