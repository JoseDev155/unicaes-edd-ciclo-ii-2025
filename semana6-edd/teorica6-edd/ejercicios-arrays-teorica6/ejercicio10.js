// Pide al usuario (con prompt-sync) que ingrese 5 nombres
const prompt = require('prompt-sync')({ sigint: true});

let nombres = prompt("Ingrese 5 nombres separados por comas: ");
// Guarda esos nombres en un array
let arrayNombres = nombres.split(",");
arrayNombres = arrayNombres.map(nombre => nombre.trim());

// Muestra:
// La lista completa
console.log("Lista completa de nombres:", arrayNombres);
// Los nombres en mayúsculas usando .forEach()
arrayNombres.forEach(nombre => {
    console.log(nombre.toUpperCase());
});
// Solo los que tienen más de 5 letras usando .filter()
let nombresLargos = arrayNombres.filter(nombre => nombre.length > 5);
console.log("Nombres con más de 5 letras:", nombresLargos);