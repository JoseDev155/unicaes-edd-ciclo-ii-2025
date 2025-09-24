// Array
const estudiantes = [
    { nombre: "Ana", edad: 22, carrera: "Ingeniería" },
    { nombre: "Luis", edad: 20, carrera: "Medicina" },
    { nombre: "Carlos", edad: 22, carrera: "Derecho" },
    { nombre: "Marta", edad: 19, carrera: "Ingeniería" },
    { nombre: "Sofía", edad: 21, carrera: "Arquitectura" }
];

// A partir de un arreglo de estudiantes (nombre, edad, carrera), muestra al estudiante con la menor edad
const buscarMenorDeEdad = (lista) => {
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i].edad < menor.edad) menor = lista[i];
    }

    return menor;
};

const menorDeEdad = buscarMenorDeEdad(estudiantes);
console.log("Estudiante con menor edad:", menorDeEdad);