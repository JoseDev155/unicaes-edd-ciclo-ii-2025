// Array
let mensaje = "Bienvenido a la Universidad";

// 1 - Extrae la palabra "Bienvenido" usando slice
let palabra1 = mensaje.slice(0, 10);

// 2 - Extrae la palabra "Universidad" usando índices negativos
let palabra2 = mensaje.slice(-12);

// 3 - Muestra el mensaje original y las partes extraídas
console.log("Mensaje original:", mensaje);
console.log("Palabra extraída con slice:", palabra1);
console.log("Palabra extraída con índices negativos:", palabra2);