import java.awt.*; 
import javax.swing.*; 
import javax.swing.table.DefaultTableModel; 

public class EjercicioSwing {
    public static void main(String[] args) {
        // Crear la ventana principal
        JFrame frame = new JFrame("Componentes Swing");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);
        frame.setLayout(new GridLayout(4, 2, 10, 10));

        // ----- JList ----- 
        String[] elementos = {"La tumba de las Luciernagas", "Superma Regresa", "Top Gun", "El Padrino", "Titanic", "Jurassic Park"}; 
        JList<String> lista = new JList<>(elementos); 
        frame.add(new JLabel("Lista de peliculas: ")); 
        frame.add(new JScrollPane(lista));

        frame.setVisible(true);
    }
}