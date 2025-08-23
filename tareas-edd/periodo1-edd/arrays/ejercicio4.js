// Crea un array con los valores: [85, 92, 78, 95, 88]
let valores = [85, 92, 78, 95, 88];

// Ordénalo de menor a mayor usando .sort()
valores.sort((a, b) => a - b);
// Muestra el resultado
console.log("Ordenado de menor a mayor:", valores);
// Luego ordénalo de mayor a menor y muéstralo nuevamente
valores.sort((a, b) => b - a);
console.log("Ordenado de mayor a menor:", valores);