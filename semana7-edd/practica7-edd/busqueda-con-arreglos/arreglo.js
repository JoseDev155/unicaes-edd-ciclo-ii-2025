// Arreglo de objetos
const estudiantes = [
    { id: 1, nombre: "Ana", edad: 20, carrera: "IngenierÃ­a en Sistemas" },
    { id: 2, nombre: "Luis", edad: 22, carrera: "IngenierÃ­a Civil" },
    { id: 3, nombre: "MarÃ­a", edad: 21, carrera: "IngenierÃ­a en Sistemas" },
    { id: 4, nombre: "Carlos", edad: 23, carrera: "Arquitectura" },
    { id: 5, nombre: "Elena", edad: 20, carrera: "IngenierÃ­a en Sistemas" }
];

// 1. Buscar un estudiante por nombre (retorna el primer encontrado)
const estudianteAna = estudiantes.find(est => est.nombre === "Ana");
console.log("Buscar estudiante Ana:", estudianteAna);

// 2. Filtrar estudiantes de IngenierÃ­a en Sistemas
const sistemas = estudiantes.filter(est => est.carrera === "IngenierÃ­a en Sistemas");
console.log("Estudiantes de IngenierÃ­a en Sistemas:", sistemas);

// 3. Verificar si existe un estudiante de Arquitectura
const hayArquitectura = estudiantes.some(est => est.carrera === "Arquitectura");
console.log("Â¿Hay estudiante de Arquitectura?:", hayArquitectura);

// 4. Verificar si todos son mayores de 18 aÃ±os
const todosMayores = estudiantes.every(est => est.edad > 18);
console.log("Â¿Todos mayores de 18?:", todosMayores);

// 5. Obtener solo los nombres de los estudiantes (map transforma el arreglo)
const nombres = estudiantes.map(est => est.nombre);
console.log("Nombres de los estudiantes:", nombres);

// 6. Buscar por ID usando find
const estudianteId3 = estudiantes.find(est => est.id === 3);
console.log("Estudiante con ID = 3:", estudianteId3);

// 7. Filtrar por edad mayor o igual a 22
const mayores22 = estudiantes.filter(est => est.edad >= 22);
console.log("Estudiantes con edad >= 22:", mayores22);