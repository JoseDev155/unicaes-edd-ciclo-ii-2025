// 4.	JList con JTextField y JButton: crear una interfaz con un JTextField, un JButton y un JList. Cuando el usuario escriba un texto y presione el botón, ese texto debe agregarse a la lista

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.DefaultListModel;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JScrollPane;
import javax.swing.JTextField;

public class Ejercicio4 {
    public static void main(String[] args) {
        // Inicialización del JFrame
        JFrame frame = new JFrame("Ejercicio 4: JList con JTextField y JButton");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);
        frame.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 20));
        
        // Componentes
        DefaultListModel<String> listModel = new DefaultListModel<>();
        JList<String> list = new JList<>(listModel);
        JScrollPane scrollPane = new JScrollPane(list);
        JTextField textField = new JTextField(20);
        JButton button = new JButton("Agregar");

        // Agregar elemento a la lista al presionar el botón
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String newItem = textField.getText().trim();
                if (!newItem.isEmpty()) {
                    listModel.addElement(newItem);
                    textField.setText("");
                }
            }
        });

        // Agregar componentes al JFrame
        frame.add(new JLabel("Ingrese un nuevo elemento al JList:"));
        frame.add(textField);
        frame.add(scrollPane);
        frame.add(button);
        frame.setVisible(true);
    }
}
