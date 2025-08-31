// 2.	JSlider y JTextField: diseñar una interfaz con un JSlider que tenga un rango de 0 a 100 y un JTextField. Cada vez que se mueva el slider, el valor debe aparecer automáticamente en el campo de texto

import javax.swing.JFrame;
import javax.swing.JSlider;
import javax.swing.JTextField;

import java.awt.FlowLayout;

public class Ejercicio2 {
    public static void main(String[] args) {
        // Inicialización del JFrame
        JFrame frame = new JFrame("Ejercicio 2: JSlider y JTextField");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);
        frame.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 20));
        
        // Creación del JSlider y JTextField
        JSlider slider = new JSlider(0, 100, 0);
        slider.setMajorTickSpacing(10);
        slider.setPaintTicks(true);
        slider.setPaintLabels(true);
        JTextField textField = new JTextField(20);
        
        // Actualización del JTextField cuando se mueve el JSlider
        slider.addChangeListener(e -> {
            int value = slider.getValue();
            textField.setText(String.valueOf(value));
        });

        // Agregar componentes al JFrame
        frame.add(slider);
        frame.add(textField);
        frame.setVisible(true);
    }
}
