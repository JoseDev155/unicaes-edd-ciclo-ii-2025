const estudiantes = [
    { nombre: "Ana", edad: 22, promedio: 8.5 },
    { nombre: "Luis", edad: 20, promedio: 9.2 },
    { nombre: "María", edad: 23, promedio: 4.8}
];

const buscarMayorPromedio = (lista) => {
    let mayor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i].promedio > mayor.promedio) {
            mayor = lista[i];
        }
    }
    return mayor;
};

const mayorPromedio = buscarMayorPromedio(estudiantes);
console.log("Estudiante con mayor promedio:", mayorPromedio);