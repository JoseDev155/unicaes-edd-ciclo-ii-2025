# Teórica 10 (EDD) - 10/9/2025

## **Diapositiva: Controles visuales, listas de objetos y metodologías de ordenamiento de datos en Java**

### ¿Qué es un control visual?

* Un **control visual** es un componente gráfico de la interfaz de usuario que permite mostrar y manipular.

### Patrón Modelo-Vista-Controlador (MVC) en Swing

* Swing sigue el patrón **MVC**:
  * Modelo (Model)
  * Vista (View)
  * Controlador (Controller)

### Probar controles visuales con listas de objetos - JList

```java
DefaultListModel<Alumno> modelo = new DefaultListModel<>();
```

```java
modelo.addElement(new Alumno("Ana", 20, 8.5));
```

```java
modelo.addElement(new Alumno("Luis", 22, 9.0));
```

```java
JList<Alumno> lista = new JList<>(modelo);
```

### Probar controles visuales con listas de objetos - JComboBox

```java
DefaultComboBoxModel<Alumno> comboModelo = new DefaultComboBoxModel<>();
```

```java
comboModelo.addElement(new Alumno("Ana", 20, 8.5));
```

```java
JComboBox<Alumno> combo = new JComboBox<>(comboModelo);
```

### Probar controles visuales con listas de objetos - JTable

```java
List<Alumno> alumnos = List.of(
    new Alumno("Ana", 20, 8.5),
    new Alumno("Luis", 22, 9.0)
);
```

```java
AlumnoTableModel modeloTabla = new AlumnoTableModel(alumnos);
```

```java
JTable tabla = new JTable(modeloTabla);
```

### Renderers: ¿Cómo mostrar objetos en listas y combos?

```java
public class AlumnoRenderer extends DefaultListCellRenderer {
    @Override
    public Component getListCellRendererComponent(
        JList<?> list, Object value, int index, boolean isSelected, boolean cellHasFocus) {
        super.getListCellRendererComponent(list, value, index, isSelected, cellHasFocus);
        if (value instanceof Alumno a) {
            setText(a.getNombre() + " (" + a.getEdad() + " años) - Nota " + a.getNota());
        }
        return this;
    }
}
```

### ¿Qué es un renderer?

En Swing, un **renderer** (o "renderizador") es un **objeto que define cómo se pinta un elemento en pantalla** dentro de un control visual como
JList, JTable o JComboBox.

**Regla general**:

* **JList y JComboBox** → usan un ListCellRenderer.
* **JTable** → usa un TableCellRenderer.

### ¿Cómo funciona un renderer?

Un renderer es una clase que implementa cómo se ve cada celda o ítem:

* En JList y JComboBox: cada **fila** (ítem de la lista).
* En JTable: cada **celda** de la tabla.

### Uso en JList / JComboBox

Ejemplo sin renderer (usa toString()):

```java
DefaultListModel<Alumno> modelo = new DefaultListModel<>();
```

```java
modelo.addElement(new Alumno("Ana", 20, 8.5));
```

```java
modelo.addElement(new Alumno("Luis", 22, 9.0));
```

```java
JList<Alumno> lista = new JList<>(modelo);
```

Resultado:
Se vería algo como Alumno@7f31245a

**Ejemplo con renderer personalizado**:

```java
public class AlumnoRenderer extends DefaultListCellRenderer {
    @Override
    public Component getListCellRendererComponent(
        JList<?> list, Object value, int index, boolean isSelected, boolean cellHasFocus) {
        super.getListCellRendererComponent(list, value, index, isSelected, cellHasFocus);
        if (value instanceof Alumno a) {
            setText(a.getNombre() + " (" + a.getEdad() + " años) - Nota: " + a.getNota());
        }
        return this;
    }
}
// Uso en JList
lista.setCellRenderer(new AlumnoRenderer());
```

### Uso en JTable

```java
tabla.getColumnModel().getColumn(2).setCellRenderer(new DefaultTableCellRenderer() {
    @Override
    public Component getTableCellRendererComponent(
        JTable table, Object value, boolean isSelected, boolean hasFocus, int row, int column) {
        
        Component c = super.getTableCellRendererComponent(table, value, isSelected, hasFocus, row, column);
        if (value instanceof Double nota && nota < 6.0) {
            c.setForeground(Color.RED);
        } else {
            c.setForeground(Color.BLACK);
        }
        return c;
    }
});
```

### ¿Cuándo usar un renderer?

* Cuando el toString() no es suficiente para mostrar el objeto.

* Cuando quieres estilos visuales (colores, íconos, negritas).

* En JTable cuando se desea:
  * Colorear filas según un valor.
  * Mostrar íconos en celdas.
  * Formatear números/fechas.

### Ordenamiento de datos

```java
class Alumno implements Comparable<Alumno> {
    public int compareTo(Alumno otro) {
        return this.nombre.compareTo(otro.nombre);
    }
}
```

```java
Comparator<Alumno> porEdad = Comparator.comparingInt(Alumno::getEdad);
```

```java
Comparator<Alumno> porNota = Comparator.comparingDouble(Alumno::getNota).reversed();
```

### Filtrado de datos

Ejemplo: Filtrar alumnos con nota ≥ 8:

```java
sorter.setRowFilter(new RowFilter<TableModel, Integer>() {
    public boolean include(Entry<? extends TableModel, ? extends Integer> e) {
        Double nota = (Double) e.getValue(2);
        return nota >= 8.0;
    }
});
```