// Crea un array con los números [5, 20, 8, 15, 2, 30]
let numeros = [5, 20, 8, 15, 2, 30];

// Filtra solo los mayores a 10
let mayoresA10 = numeros.filter(numero => numero > 10);
// Ordénalos en forma ascendente
let ordenadosAscendentes = mayoresA10.sort((a, b) => a - b);
// Recorre el resultado con forEach() y muestra cada número
ordenadosAscendentes.forEach(numero => {
    console.log("Número mayor a 10:", numero);
});