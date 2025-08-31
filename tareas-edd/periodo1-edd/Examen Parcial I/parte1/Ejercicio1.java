// 1.   JComboBox y JLabel: crear una ventana con un JComboBox que contenga opciones de países ("México", "Argentina", "España", "Colombia") y un JLabel. Cuando el usuario seleccione un país, el JLabel debe mostrar el texto:

// "Ha seleccionado: [país]"

import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;

import java.awt.FlowLayout;

public class Ejercicio1 {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Ejercicio 1: JComboBox y JLabel");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);
        frame.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 20));
        
        String[] paises = {"México", "Argentina", "España", "Colombia"};
        JComboBox<String> comboBox = new JComboBox<>();
        JLabel label = new JLabel("Selecciona un país");
        
        for (String pais : paises) {
            comboBox.addItem(pais);
        }

        comboBox.addActionListener(e -> {
            String paisSeleccionado = (String) comboBox.getSelectedItem();
            label.setText("Ha seleccionado: " + paisSeleccionado);
        });

        frame.add(comboBox);
        frame.add(label);
        frame.setVisible(true);
    }
}