/*
    Actividad 1: Agregar elementos a un JComboBox
    Objetivo: Permitir que el usuario escriba un texto en un JTextField y, al hacer clic en un JButton, ese texto se agregue a un JComboBox.
    1.	Requisitos de implementación:
    •	Crear una ventana JFrame con un JTextField, un JButton y un JComboBox.
    •	Cuando se haga clic en el botón, se debe agregar el texto del JTextField al JComboBox.
    •	Validar que el campo no esté vacío antes de agregar el texto.
    •	Limpiar el campo de texto después de agregar el elemento.
*/

import javax.swing.JButton;
import javax.swing.JTextField;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Actividad1 {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Actividad 1: Agregar elementos a un JComboBox");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);
        frame.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 20));
        
        JTextField textField = new JTextField(20);
        JButton button = new JButton("Agregar");
        JComboBox<String> comboBox = new JComboBox<>();

        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String text = textField.getText().trim();
                if (!text.isEmpty()) {
                    comboBox.addItem(text);
                    textField.setText("");
                }
            }
        });

        frame.add(new JLabel("Ingrese un elemento:"));
        frame.add(textField);
        frame.add(comboBox);
        frame.add(button);
        frame.setVisible(true);
    }
}
