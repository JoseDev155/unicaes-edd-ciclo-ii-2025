# Práctica 12 (EDD) - 26/9/2025

## **Diapositiva: Pilas y Colas de Objetos en Java**

### ¿Qué son las pilas y colas?

En programación, las **pilas** y las **colas** son estructuras de datos dinámicas que permiten almacenar y manipular información de manera
ordenada. Cuando hablamos de **objetos**, nos referimos a que estas estructuras no solo almacenan datos primitivos (como int, char, double),
sino **instancias de clases** creadas por el programador.

### Pilas (Stack)

Una pila es una colección ordenada de elementos que sigue el principio LIFO (Last In, First Out) → el último elemento en entrar es el primero en
salir.Ejemplo cotidiano: Una pila de platos. El último plato colocado encima será el primero en retirarse.

### Operaciones principales

* **Push** → Inserta un elemento en la cima de la pila.
* **Pop** → Elimina y retorna el elemento en la cima.
* **Peek / Top** → Permite ver el elemento en la cima sin retirarlo.
* **isEmpty** → Verifica si la pila está vacía.
* **En Java**
* Se implementa comúnmente con la clase **Stack<T>** de la librería
estándar, donde T puede ser cualquier tipo de objeto.

### Colas (Queue)

Una cola es una colección ordenada de elementos que sigue el principio FIFO (First In, First Out) → el primer elemento en entrar es el primero
en salir.Ejemplo cotidiano: Una fila de personas en un banco o supermercado.

### Operaciones principales

* **Offer / Add** → Inserta un elemento al final de la cola.
* **Poll / Remove** → Elimina y retorna el primer elemento de la cola.
* **Peek / Element** → Permite ver el primer elemento sin retirarlo.
* **isEmpty** → Verifica si la cola está vacía.
* **En Java**
* Se utiliza la interfaz **Queue<T>** y su implementación más común es **LinkedList<T>**, ya que esta estructura facilita la inserción y eliminación de elementos en los extremos.

### Diferencias entre Pila y Cola

| Característica         | Pila (Stack)        | Cola (Queue)           |
| ---------------------- | ------------------- | ---------------------- |
| Principio de operación | LIFO                | FIFO                   |
| Ejemplo cotidiano      | Pila de platos      | Fila en un banco       |
| Inserción              | push() en la cima   | offer() al final       |
| Eliminación            | pop() desde la cima | poll() desde el frente |

### Uso con Objetos

```java
class Cliente {
    String nombre;

    Cliente(string nombre) { this.nombre = nombre; }

    public String toString() { return nombre; }
}
```

```java
Queue<Cliente> cola = new LinkedList<>();
```

```java
cola.offer(new Cliente("Ana"));
cola.offer(new Cliente("Luis"));
cola.offer(new Cliente("María"));
```

```java
System.out.println("Cola: " + cola);
```

```java
System.out.println("peek(): " + cola.peek());
```

```java
System.out.println("poll(): " + cola.poll());
```

```java
System.out.println("Cola final: " + cola);
```

### Conceptos clave

* FIFO: primero en entrar, primero en salir (como la fila de un banco).
* Queue vs LinkedList: Queue es la interfaz (contrato de operaciones); LinkedList es una implementación concreta que permite O(1) para offer, peek, poll en los extremos.
* offer/peek/poll vs add/element/remove:
  * offer / peek / poll → devuelven false o null si falla/está vacía (no lanzan excepción).
  * add / element / remove → lanzan excepción si no pueden insertar o si la cola está vacía.

```java
class Libro {
    String titulo;

    Libro(String titulo) {
        this.titulo = titulo;
    }

    public String toString() {
        return titulo;
    }
}
```

```java
Stack<Libro> pila = new Stack<>();
```

```java
pila.push(new Libro("Harry Potter"));
pila.push(new Libro("El señor de los anillos"));
pila.push(new Libro("Juegos de trono"));
```

```java
System.out.println("Pila: " + pila);
```

```java
System.out.println("peek(): " + pila.peek());
```

```java
System.out.println("pop(): " + pila.pop());
```

```java
System.out.println("Pila final: " + pila);
```

### Conceptos clave

* LIFO: último en entrar, primero en salir.
* Ejemplo: una pila de platos, el último que pones arriba es el primero que quitas.
* Operaciones principales en Stack:
  * push(e): apilar (añadir arriba).
  * peek(): ver el de arriba sin quitarlo.
pop(): desapilar (quitar el de arriba).
* Comparación con la cola (Queue):
  * Cola → FIFO (primero en entrar, primero en salir).
  * Pila → LIFO (último en entrar, primero en salir).

## TAREA 2

En el archivo `TAREA 2.pdf`, se encuentra una guía con los ejercicios a entregar en la **TAREA 2**.

## Documentos complementarios

* `Ejemplos 1.pdf`
* `Ejemplo 2.pdf`