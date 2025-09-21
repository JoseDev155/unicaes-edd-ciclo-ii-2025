# Teórica 2 (EDD) - 16/7/2025

## **Diapositiva: Clases Java, Tipos Primitivos y Captura/Muestra de Datos con Swing**

### ¿Qué es una clase en Java?

Plantilla para crear objetos. Define atributo y métodos.

### Estructura y Uso de Clases

Ejemplo básico:

```java
public class Persona {
    private String nombre;
    private int edad;
    private boolean activo;
    // Constructor y métodos...
}
```
Instanciar:

```java
Persona p = new Persona("Ana", 20, true);
```

### Tipos Primitivos en Java

* Tipos básicos: `ìnt`, `double`, `char`, `boolean`, `byte`, `short`, `long`, `float`.
* No son objetos, sólo valores simples.
* Útiles como atributos en las clases para eficiencia y simplicidad.

| Tipo    | Descripción                            | Ejemplo de valor       | Tamaño en memoria       |
|---------|----------------------------------------|------------------------|-------------------------|
| int     | Número entero                          | 42                     | 4 bytes (32 bits)       |
| double  | Número decimal de doble precisión      | 3.1416                 | 8 bytes (64 bits)       |
| char    | Carácter Unicode                       | 'A', '1', '$'          | 2 bytes (16 bits)       |
| boolean | Valor lógico: verdadero o falso        | true, false            | 1 bit*                  |
| byte    | Entero pequeño (-128 a 127)            | 100                    | 1 byte (8 bits)         |
| short   | Entero corto (-32,768 a 32,767)        | 12345                  | 2 bytes (16 bits)       |
| long    | Entero largo                           | 10000000000L           | 8 bytes (64 bits)       |
| float   | Número decimal de precisión simple     | 2.5f                   | 4 bytes (32 bits)       |

### Uso en Clases

* Las clases pueden tener atributos de tipo primitivo.
* Métodos pueden recibir y retornar tipos primitivos.
* Ejemplo: `private int edad;`

### Wrapper Classes

* Son clases que 'envuelven' a los tipos primitivos.
* Permiten manipularlos como objetos: `Integer`, `Double`, `Boolean`, etc.
* Útiles en colecciones (`ArrayList`, etc).

### ¿Qué es Java Swing?

* Biblioteca gráfica para crear interfaces de usuario (GUIs).
* Permite usar ventanas, botones, tablas, listas y más.
* Cada elemento visual es un componente.

### Principales Controles Swing

* JTable: muestra datos en tablas.
* JSpinner: selecciona valores numéricos.
* JSlider: selecciona valores deslizando una barra.
* JComboBox: lista desplegable de opciones.
* JList: lista de selección simple o múltiple.
* JRadioButton: opción única dentro de un grupo.
* JCheckBox: selección múltiple.

### Captura y Muestra de Información

Capturar datos:
* `spinner.getValue()`, `slider.getValue()`, `comoboBox.getSelectedItem()`
* `lista.getSelectedValuesList()`, `isSelected()` para radio/checkbox

Mostrar datos:
* JTable: agregar filas con `DefaultTableModel`
* Actualizar elementos con `setValue()`, `setSelectedItem()`, etc.

### Relación Práctica

* Una clase representa una entidad (ej: Persona).
* Sus atributos pueden ser de tipo primitivo o String.
* Los controles Swing capturan datos y se usan para crear objetos.
* Los objetos pueden mostrarse en JTable u otros componentes.

### Ejemplo ilustrativo

```java
String nombre = txtNombre.getText();
int edad = (Integer) spinnerEdad.getValue();
boolean activo = chkActivo.isSelected();
Persona persona = new Persona(nombre, edad, activo);
DefaultTableModel model = (DefaultTableModel) tabla.getModel();
model.addRow(new Object[]{persona.getNombre(), persona.getEdad(), persona.isActivo()});
```
### Resumen y Consejos

* Usa clases para organizar datos y comportamientos.
* Usa tipos primitivos en atributos para eficiencia.
* Swing permite crear GUIs conectadas con tus clases.
* Practica creando formularios y capturando datos para crear objetos.