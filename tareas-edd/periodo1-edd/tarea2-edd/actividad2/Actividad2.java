/*
    Actividad 2: Controlar la posición de un JSlider con JTextField
    Objetivo: Ingresar un número en un JTextField y usar un JButton para establecer ese
    número como el valor de un JSlider.
    2.	Requisitos de implementación:
    •	Crear una ventana JFrame con un JTextField, un JButton y un JSlider.
    •	El JSlider debe tener un rango de 0 a 100.
    •	Cuando se haga clic en el botón, el valor del JTextField se debe usar para mover el slider.
    •	Validar que el número esté dentro del rango antes de actualizar el slider.
    •	Mostrar un mensaje de error si el valor no es numérico o está fuera del rango.
*/

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JSlider;
import javax.swing.JTextField;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Actividad2 {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Actividad 1: Agregar elementos a un JComboBox");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);
        frame.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 20));
        
        JTextField textField = new JTextField(20);
        JButton button = new JButton("Agregar");
        JSlider slider = new JSlider(0, 100, 1);
        slider.setMajorTickSpacing(10);
        slider.setPaintTicks(true);
        slider.setPaintLabels(true);
        
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                try {
                    int number = Integer.parseInt(textField.getText().trim());
                    if (number >= 0 && number <= 100) {
                        slider.setValue(number);
                        textField.setText("");
                    } else {
                        JOptionPane.showMessageDialog(frame, "El número debe estar entre 0 y 100.", "Error", JOptionPane.ERROR_MESSAGE);
                    }
                } catch (NumberFormatException ex) {
                    JOptionPane.showMessageDialog(frame, "Por favor ingrese un número válido.", "Error", JOptionPane.ERROR_MESSAGE);
                }
            }
        });

        frame.add(new JLabel("Ingrese un número:"));
        frame.add(textField);
        frame.add(new JLabel("Control del JSlider:"));
        frame.add(slider);
        frame.add(button);
        frame.setVisible(true);
    }
}
