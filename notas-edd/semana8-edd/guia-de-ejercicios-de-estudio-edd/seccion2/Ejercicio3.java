import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JRadioButton;
import javax.swing.JTextField;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Ejercicio3 {
    public static void main(String[] args) {
        // Crea un grupo de JRadioButton para elegir entre tres colores ("Rojo", "Verde", "Azul")
        JFrame frame = new JFrame("3. JRadioButton y JTextField");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);
        frame.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 20));

        JRadioButton radioButton1 = new JRadioButton("Rojo");
        JRadioButton radioButton2 = new JRadioButton("Verde");
        JRadioButton radioButton3 = new JRadioButton("Azul");
        String text = "Ninguno color seleccionado";
        JTextField textField = new JTextField(text, 20);
        textField.setEditable(false);

        // Cuando se seleccione un color, debe mostrarse en un JTextField
        radioButton1.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                if (radioButton1.isSelected()) {
                    textField.setText("Rojo");
                    radioButton2.setSelected(false);
                    radioButton3.setSelected(false);
                }
                else {
                    textField.setText(text);
                }
            }
        });

        radioButton2.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                if (radioButton2.isSelected()) {
                    textField.setText("Verde");
                    radioButton1.setSelected(false);
                    radioButton3.setSelected(false);
                }
                else {
                    textField.setText(text);
                }
            }
        });

        radioButton3.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                if (radioButton3.isSelected()) {
                    textField.setText("Azul");
                    radioButton1.setSelected(false);
                    radioButton2.setSelected(false);
                }
                else {
                    textField.setText(text);
                }
            }
        });
        
        frame.add(new JLabel("Selecciona un color:"));
        frame.add(radioButton1);
        frame.add(radioButton2);
        frame.add(radioButton3);
        frame.add(textField);
        frame.setVisible(true);
    }
}
