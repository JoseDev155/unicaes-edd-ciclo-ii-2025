// Pide al usuario 5 nombres usando prompt-sync
const prompt = require('prompt-sync')({ sigint: true});

let nombres = prompt("Ingrese 5 nombres separados por comas: ");
// Guarda los nombres en un array
let arrayNombres = nombres.split(",");
arrayNombres = arrayNombres.map(nombre => nombre.trim());

// Muestra:
// 1. La lista completa
console.log("Lista completa de nombres:", arrayNombres);
// 2. Los nombres en mayúsculas con .forEach()
arrayNombres.forEach(nombre => {
    console.log(nombre.toUpperCase());
});
// 3. Los nombres que tengan más de 5 letras usando .filter()
let nombresLargos = arrayNombres.filter(nombre => nombre.length > 5);
console.log("Nombres con más de 5 letras:", nombresLargos);