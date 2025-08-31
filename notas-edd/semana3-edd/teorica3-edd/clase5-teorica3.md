# Teórica 3 (EDD) - 23/7/2025

## Instalar extensión de VS Code

* **Extension Pack for Java** de Microsoft

## **Diapositiva: Java Swing: Componentes**

### ¿Qué es Java Swing?

* Biblioteca gráfica para crear interfaces gráficas en Java

### Arquitectura de Swing

1. Componentes
2. Contenedores
3. Layouts

### Componentes comunes (Parte 1)

* `JLabel`
* `JTextField`
* `JTextArea`
* `JButton`
* `JCheckBox`

### Componentes comunes (Parte 2)

* `JRadioButton`
* `JComboBox`
* `JList`
* `JSpinner`
* `JSlider`

### JTable

* Permite mostrar datos en forma tabular
* Estructura: filas y columnas
* Personalizable: editable, con modelo de datos

### JTextField

Caja de texto para ingresar una línea.

### JTextArea

Área de texto de múltiples líneas.

### JButton

Botón que dispara acciones.

### JChecBox

Caja para seleccionar múltiples opciones.

### JRadioButton

Opciones mutuamente excluyentes, se agrupan con ButtonGroup

### JComboBox

Lista desplegable.

### JList

Lista visible de varios elementos.

### JSpinner

Selector numérico o de otros tipos (fechas, listas).

### JSlider

Control deslizante para seleccionar un valor.

### JTable

Tabla para mostrar datos estructurados.

### Buenas prácticas en Swing

* Usar SwingUtilities.invokeLater() para iniciar GUI
* Usar paneles y layouts para organizar
* Separar lógica de presentación (MVC)
* Validar entradas del usuario

## Ejemplo de código en VS Code

Creamos la carpeta `Ejemplo/` con el archivo `ComponentesSwing.java`.

Pegamos el código de ejemplo que se encuentra en el archivo `Componentes_Swing_Java_Explicacion.docx`.

### Ejecutar Java en VS Code

Nos vamos a **Run** > **Start Debugging**.

## Enlace de descarga JDK 24

* [JDK - Development - Descarga](https://www.oracle.com/java/technologies/downloads/?er=221886#jdk24-windows)

## Ejercicio de Java en VS Code

Crear un listado de 6 películas usandno algún componente de Swing.

Código en el archivo `EjercicioSwing.java`.

### Solución a errores al ejecutar un archivo de Java en VS Code

**Error**: `Program Error: Could not find or load main class x`.

**Solución**:
* Ejecutamos **Ctrl + Shift + P** y escribimos **Java: List all Java source paths**.
* Buscamos el **workspace** del archivo.
* Lo seleccionamos.