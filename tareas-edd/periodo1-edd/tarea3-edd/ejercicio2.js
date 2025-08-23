const estudiantes = [
    { nombre: "Ana", edad: 17, promedio: 8.5 },
    { nombre: "Luis", edad: 21, promedio: 9.2 },
    { nombre: "María", edad: 18, promedio: 7.8}
];

const menoresDe21 = estudiantes.filter(estudiante => estudiante.edad < 21);
console.log("Estudiantes menores de 21 años:", menoresDe21);