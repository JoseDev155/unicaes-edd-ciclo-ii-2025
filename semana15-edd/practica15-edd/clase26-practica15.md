# Práctica 15 (EDD) - 17/10/2025

## **Diapositiva: JTree**

### ¿Qué es?

JTree es una clase de la librería Swing que te permite mostrar y manipular información en **forma de árbol jerárquico** (raíz → nodos → hojas).

### ¿Para qué sirve?

Se usa para presentar datos **multinivel o anidados**.

### ¿Cómo funciona?

* Internamente no es un algoritmo nuevo, sino que trabaja con un **modelo de datos (TreeModel)** y nodos (TreeNode o DefaultMutableTreeNode) para manejar la jerarquía.

* Uno defino la estructura (quién es padre, quién es hijo) y el JTree la muestra en pantalla.

### Árbol como **estructura de datos**

#### Elementos clave

Raíz (root): el nodo principal, del que parten todos los demás.

Hijos (children): nodos que dependen de un nodo padre.

Hojas (leaves): nodos sin hijos.

Nivel/profundidad: indica la “altura” de un nodo dentro del árbol.

```plaintext
Universidad
 ├── Facultad Ingeniería
 │    ├── Ciclo 1 - 2025
 │    └── Ciclo 2 - 2025
 └── Facultad Ciencias
      ├── Ciclo 1 - 2025
      └── Ciclo 2 - 2025
```

#### JTree como componente gráfico

* Qué hace: JTree toma esa misma idea del árbol abstracto y la dibuja en pantalla dentro de una interfaz gráfica Swing.

* Internamente:
  * Usa un modelo llamado TreeModel.
  * Cada nodo se representa con un objeto que implementa TreeNode (por ejemplo, DefaultMutableTreeNode).

* Paralelo con teoría:
  * Nodo raíz (estructura) → Nodo raíz (DefaultMutableTreeNode en JTree).
  * Hijos → add(childNode) dentro de un nodo.
  * Hojas → nodos sin hijos.

```java
DefaultMutableTreeNode root = new DefaultMutableTreeNode("Universidad");
DefaultMutableTreeNode ing = new DefaultMutableTreeNode("Facultad Ingeniería");
DefaultMutableTreeNode cs = new DefaultMutableTreeNode("Facultad Ciencias");

root.add(ing);
root.add(cs);

ing.add(new DefaultMutableTreeNode("Curso IS-101"));
ing.add(new DefaultMutableTreeNode("Curso IS-202"));

cs.add(new DefaultMutableTreeNode("Curso MA-100"));
cs.add(new DefaultMutableTreeNode("Curso FI-110"));

JTree tree = new JTree(root);
```

Crear nodos (cada DefaultMutableTreeNode es un **nodo** del árbol)

```java
DefaultMutableTreeNode root = new DefaultMutableTreeNode("Universidad");
DefaultMutableTreeNode ing = new DefaultMutableTreeNode("Facultad Ingeniería");
DefaultMutableTreeNode cs = new DefaultMutableTreeNode("Facultad Ciencias");
```

Armar la jerarquía (definir **padre** → **hijo**)

```java
root.add(ing);
root.add(cs);
```

Agregar hojas (nodos sin hijos)

```java
ing.add(new DefaultMutableTreeNode("Ciclo 1-2025"));
ing.add(new DefaultMutableTreeNode("Ciclo 2-2025"));

cs.add(new DefaultMutableTreeNode("Ciclo 1-2025"));
cs.add(new DefaultMutableTreeNode("Ciclo 2-2025"));
```

Crear el JTree con esa estructura

```java
JTree tree = new JTree(eoot);
```

## Documentos complementarios

* `EJEMPLO Jtree.pdf`
* `Ejercicios Jtree.pdf`