import java.awt.*; 
import javax.swing.*; 
import javax.swing.table.DefaultTableModel; 
 
public class ComponentesSwing { 
    public static void main(String[] args) { 
        // Crear la ventana principal 
        JFrame frame = new JFrame("Componentes Swing"); 
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); 
        frame.setSize(700, 500); 
        frame.setLayout(new GridLayout(4, 2, 10, 10)); 
 
        // ----- JComboBox ----- 
        String[] opciones = {"Opción 1", "Opción 2", "Opción 3"}; 
        JComboBox<String> comboBox = new JComboBox<>(opciones); 
        frame.add(new JLabel("JComboBox:")); 
        frame.add(comboBox); 
 
        // ----- JList ----- 
        String[] elementos = {"Elemento A", "Elemento B", "Elemento C", "Elemento D"}; 
        JList<String> lista = new JList<>(elementos); 
        frame.add(new JLabel("JList:")); 
        frame.add(new JScrollPane(lista)); 
 
        // ----- JRadioButton ----- 
        JPanel radioPanel = new JPanel(); 
        JRadioButton radio1 = new JRadioButton("Masculino"); 
        JRadioButton radio2 = new JRadioButton("Femenino"); 
        ButtonGroup grupo = new ButtonGroup(); 
        grupo.add(radio1); 
        grupo.add(radio2); 
        radioPanel.add(radio1); 
        radioPanel.add(radio2); 
        frame.add(new JLabel("JRadioButton:")); 
        frame.add(radioPanel); 
 
        // ----- JCheckBox ----- 
        JPanel checkPanel = new JPanel(); 
        JCheckBox box1 = new JCheckBox("Leer"); 
        JCheckBox box2 = new JCheckBox("Viajar"); 
        checkPanel.add(box1); 
        checkPanel.add(box2); 
        frame.add(new JLabel("JCheckBox:")); 
        frame.add(checkPanel); 
 
        // ----- JSpinner ----- 
        SpinnerNumberModel spinnerModel = new SpinnerNumberModel(1, 1, 10, 1); 
        JSpinner spinner = new JSpinner(spinnerModel); 
        frame.add(new JLabel("JSpinner:")); 
        frame.add(spinner); 
 
        // ----- JSlider ----- 
        JSlider slider = new JSlider(0, 100, 25); 
        slider.setMajorTickSpacing(25); 
        slider.setPaintTicks(true); 
        slider.setPaintLabels(true); 
        frame.add(new JLabel("JSlider:")); 
        frame.add(slider); 
 
        // ----- JTable ----- 
        String[] columnas = {"ID", "Nombre"}; 
        Object[][] datos = { 
            {1, "Ana"}, 
            {2, "Luis"}, 
            {3, "Carlos"} 
        }; 
        JTable tabla = new JTable(new DefaultTableModel(datos, columnas)); 
        JScrollPane scrollTabla = new JScrollPane(tabla); 
        JFrame tablaFrame = new JFrame("JTable"); 
        tablaFrame.setSize(300, 200); 
        tablaFrame.add(scrollTabla); 
        tablaFrame.setVisible(true); 
 
        // Mostrar ventana principal 
        frame.setVisible(true); 
    } 
}