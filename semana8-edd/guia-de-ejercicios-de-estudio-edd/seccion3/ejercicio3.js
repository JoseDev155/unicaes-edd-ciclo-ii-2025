// Array
const estudiantes = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 20 },
  { nombre: "Carlos", edad: 22 },
  { nombre: "Beatriz", edad: 21 },
  { nombre: "Diana", edad: 20 },
];

// Ordena un arreglo de estudiantes:
// ▪ Primero por edad en orden ascendente
estudiantes.sort((a, b) => a.edad - b.edad);
console.log(estudiantes);
// ▪ Si dos estudiantes tienen la misma edad, ordenarlos por nombre en orden alfabético
estudiantes.sort((a, b) => {
  if (a.edad === b.edad) {
    return a.nombre.localeCompare(b.nombre);
  }
});
console.log(estudiantes);