// 3.	JTable simple: crear una ventana con una tabla (JTable) que muestre productos con sus precios
// Ejemplo de datos iniciales:
// "Laptop", 1200
// "Mouse", 25
// "Teclado", 45

import java.awt.FlowLayout;

import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTable;

public class Ejercicio3 {
    public static void main(String[] args) {
        // Inicialización del JFrame
        JFrame frame = new JFrame("Ejercicio 3: JTable simple");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);
        frame.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 20));
        
        // Datos iniciales para la tabla
        String[][] data = {
            {"Laptop", "1200"},
            {"Mouse", "25"},
            {"Teclado", "45"},
            {"Monitor", "300"},
            {"Impresora", "150"}
        };
        String[] columnNames = {"Producto", "Precio"};
        
        // Creación del JTable
        JTable table = new JTable(data, columnNames);
        
        // Agregar la tabla al JFrame dentro de un JScrollPane
        frame.add(new JScrollPane(table));
        frame.setVisible(true);
    }
}
