# Práctica 18 (EDD) - 7/11/2025

## **Diapositiva: PRINCIPALES OPERACIONES QUE SE REALIZAN CON GRAFOS.**

### CONCEPTOS

* Grafo
* Dirigido vs. no dirigido
* Ponderado vs. no ponderado
* Simple
* Cíclico / Acíclico
* Conexo (no dirigido) / Fuertemente conexo (dirigido)
* Grado de un vértice
* Representaciones
* Operaciones comunes

### MAP

Map es una estructura de datos que guarda pares clave–valor, parecida a un objeto ({}), pero con algunas ventajas:

| Característica                | Objeto `{}`                          | `Map`                                                  |
|-------------------------------|--------------------------------------|--------------------------------------------------------|
| Las claves pueden ser         | Solo cadenas o símbolos              | Cualquier tipo (números, objetos, funciones, etc.)     |
| Mantiene el orden de inserción| No garantizado                       | Sí                                                     |
| Tamaño                        | No hay método directo                | `.size` indica el total                                |
| Métodos útiles                | Ninguno especial                     | `.set()`, `.get()`, `.has()`, `.delete()`, `.clear()`  |

```javascript
const mapa = new Map();

// Agregar elementos
mapa.set("A", ["B", "C"]);
mapa.set("B", ["A", "D"]);

// Acceder
console.log(mapa.get("A")); // ['B', 'C']

// Verificar si existe
console.log(mapa.has("C")); // false

// Tamaño
console.log(mapa.size); // 2

// Recorrer
for (const [clave, valor] of mapa) {
    console.log(clave, ":", valor);
}
```

1) CREACIÓN DEL MAP

```javascript
const mapa = new Map();
```

2) INSERTAR PARES CLAVE-VALOR CON .SET()

```javascript
// Agregar elementos
mapa.set("A", ["B", "C"]);
mapa.set("B", ["A", "D"]);
```

3) ACCEDER CON .GET(CLAVE)

```javascript
console.log(mapa.get("A")); // ['B', 'C']
```

4) VERIFICAR EXISTENCIA DE **CLAVE** CON .HAS(CLAVE)

```javascript
// Verificar si existe
console.log(mapa.has("C")); // false
```

5) TAMAÑO CON .SIZE

```javascript
// Tamaño
console.log(mapa.size); // 2
```

6) RECORRER CON FOR...OF (ENTRADAS POR DEFECTO)

```javascript
// Recorrer
for (const [clave, valor] of mapa) {
    console.log(clave, ":", valor);
}
```

7) QUÉ ESTÁ PASANDO "POR DENTRO"

```javascript
{
    "A" -> ["B","C"],
    "B" -> ["A","D"]
}
```

### BFS (BREADTH-FIRST SEARCH)

```javascript
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift(); // saca el primero
    if (!visited.has(node)) {
      console.log("Visitando:", node);
      visited.add(node);
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor); // agrega los vecinos
        }
      }
    }
  }
}

bfs(graph, "A");
```

### DFS (DEPTH-FIRST SEARCH)

```javascript
function dfs(graph, start, visited = new Set()) {
  console.log("Visitando:", start);
  visited.add(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited); // recursión
    }
  }
}

dfs(graph, "A");
```

## Documentos complementarios

* `ejercicios grafos.pdf`
* `Ejemplos con MAP.pdf`