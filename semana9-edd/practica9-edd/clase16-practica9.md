# Práctica 9 (EDD) - 5/9/2025

## **Diapositiva: OPERACIONES MATEMÁTICAS CON ATRIBUTOS CONTENIDOS EN ARREGLOS DE OBJETOS**

### JAVA

Patrón:

* Clases
* Atributos
* Método main
* Lógica con bucles o streams

### CLASES

```java
class Producto {
    String nombre;
    double precio;
    int cantidad;

    public Producto(String nombre, double precio, int cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
```

### EL MÉTODO MAIN

```java
public class Main {
    public static void main(String[] args) {
        // Aquí empieza la ejecución del programa
        Producto[] productos = {
            new Producto("Mouse", 15, 4),
            new Producto("Teclado", 25, 2)
        };

        double total = 0;
        for (Producto p : productos) {
            total += p.precio * p.cantidad;
        }

        System.out.println("Total inventario: $" + total);
    }
}
```

### EL ARREGLO DE OBJETOS

```java
Estudiante[] estudiantes = {
    new Estudiante("Ana", 8.5),
    new Estudiante("Luis", 6.3),
    new Estudiante("Karla", 9.0)
};
```

```java
for (Estudiante e : estudiantes) {
    System.out.println(e.nombre + " - " + e.nota);
}
```

### OPERACIONES MATEMÁTICAS

* Suma de valores
* Promedio de notas
* Máximo y mínimo
* Filtro y suma parcial
* Promedio ponderado

## TAREA 1

En el archivo `EJERCICIOS EN JAVA.pdf`, se encuentra una guía con los ejercicios a entregar en la **TAREA 1**.

## ACTIVIDAD EVALUADA I - PORTAFOLIO DE TAREAS 20%

Aquí se subirán todas las tareas realizadas durante el **2° PERÍODO**.

## Documentos complementarios

* `Operaciones matemáticas con atributos contenidos en arreglos de objetos..pdf`