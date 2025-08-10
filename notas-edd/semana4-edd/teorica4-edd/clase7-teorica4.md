# Teórica 4 (EDD) - 30/7/2025

## **Diapositiva: Arrays**

### Arrays

* Cada valor se alamcena en una **posición** llamada **índice**, que empieza en 0.
* Su **tamaño es fijo** una vez creado.

```java
int[] numeros = new int[5]; // Array de 5 enteros
```

### Características de los Arrays

* Tipo homogéneo
* Indexados
* Tamaño fijo
* Almacenamiento contiguo
* Acceso directo

### Diclaración y Creación de Arrays

Declaración

```java
int[] numeros; // Recomendado 
int numeros[]; // Válido pero menos usado
```
Creación

```java
numeros = new int[5]; // Crea array de 5 enteros (inicializados en 0)
```

Declaración y Creación en una línea

```java
int[] numeros = new int[5];
```

| Acción                     | Ejemplo código                | Explicación                                                    |
| -------------------------- | ----------------------------- | -------------------------------------------------------------- |
| **Declaración**            | `int[] numeros;`              | Solo indica que numeros es un array, **no tiene memoria** aún. |
| **Creación**               | `numeros = new int[5];`       | Reserva memoria para 5 enteros inicializados en 0.             |
| **Declaración + Creación** | `int[] numeros = new int[5];` | Se hace todo en una sola línea.                                |

### Inicialización de Arrays

Inicialización manual

```java
int[] numeros = new int[3];
numeros[0] = 10;
numeros[1] = 20;
numeros[2] = 30;
```

Inicialización directa

```java
int[] numeros = {10, 20, 30};
```

Inicialización de arrays de objetos

```java
String[] nombres = {"Ana", "Luis", "Pedro"};
```

| Tipo de incialización | Sintaxis                                     | Cuándo usar                                                     |
| --------------------- | -------------------------------------------- | --------------------------------------------------------------- |
| **Manual**            | `array[i] =v alor;`                          | Cuando **los datos se calculan o leen dinámicamente**           |
| **Directa**           | `{val1, val2, ...}`                          | Cuando **conoces los valores desde el inicio**                  |
| **Arrays de Objetos** | `new Tipo[]{obj1, obj2, ...} o {obj1, obj2}` | Cuando **trabajas con clases u objetos en lugar de primitivos** |

### Recorrido de Arrays

Usando for tradicional

```java
int[] numeros = {1, 2, 3, 4, 5};
for (int i = 0; i < numeros.length; i++) {
    System.out.println("Elemento en posición " + i + ": " + numeros[i]);
}
```

Usando for-each

```java
for (int n : numeros) {
    System.out.println(n);
}
```

### Arrays Multidimensionales (Matrices)

Ejemplo de matriz 2D

```java
int[][] matriz = new int[2][3]; // 2 filas, 3 columnas

matriz[0][0] = 10;
matriz[0][1] = 20;
matriz[0][2] = 30;
matriz[1][0] = 40;
matriz[1][1] = 50;
matriz[1][2] = 60;
```

Inicialización directa

```java
int[][] matriz = {
    {10, 20, 30},
    {40, 50, 60}
};
```

| Método                       | Cuándo usarlo                              |
| ---------------------------- | ------------------------------------------ |
| **Declaración + Asignación** | Cuando no conoces los valores de antemano. |
| **Inicialización directa**   | Cuando ya conoces todos los valores.       |

Arrays de Objetos

* Un array puede almacenar **objetos en lugar de tipos primitivos**.

```java
class Persona {
    String nombre;
    int edad;
    
    Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

public class Main {
    public static void main(String[] args) {
        Persona[] personas = new Persona[2];
        personas[0] = new Persona("Ana", 20);
        personas[1] = new Persona("Luis", 25);

        for (Persona p : personas) {
            System.out.println(p.nombre + " - " + p.edad + " años");
        }
    }
}
```

### Ventajas y Desventajas

#### Ventajas

* Acceso rápido por índice.
* Fácil de usar para colecciones de tamaño fijo.
* Eficientes en memoria.

#### ❌ Desventajas

* Tamaño fijo, no se puede cambiar.
* No tiene métodos avanzados (como add o remove de las listas).
* Insertar o eliminar requiere mover elementos manualmente.