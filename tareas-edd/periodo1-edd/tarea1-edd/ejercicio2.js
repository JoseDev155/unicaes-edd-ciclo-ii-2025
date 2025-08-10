// Array
let temperaturasCelsius = [22, 28, 16, 25, 30];

// 1 - Convertir a Fahrenheit (usa la fórmula: F = C * 9/5 + 32)
let temperaturasFahrenheit = temperaturasCelsius.map(
    celsius => (celsius * (9/5) + 32)
);

// 2 Mostrar ambos arrays por consola
console.log("Temperaturas en Celsius:", temperaturasCelsius);
console.log("Temperaturas en Fahrenheit:", temperaturasFahrenheit);