import javax.swing.DefaultListModel;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JScrollPane;
import javax.swing.JTextField;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Ejercicio1 {
    public static void main(String[] args) {
        // Crea una interfaz con un JTextField, un JButton y un JList
        JFrame frame = new JFrame("1. JList con JTextField y JButton");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);
        frame.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 20));

        JTextField textField = new JTextField(20);
        JButton button = new JButton("Agregar");

        DefaultListModel<String> listModel = new DefaultListModel<>();
        JList<String> list = new JList<>(listModel);
        JScrollPane scrollPane = new JScrollPane(list);

        // Cuando el usuario escriba un texto y presione el botón, ese texto debe agregarse a la lista
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String newItem = textField.getText().trim();
                // Valida que no se agreguen cadenas vacías
                if (!newItem.isEmpty()) {
                    listModel.addElement(newItem);
                    textField.setText("");
                }
            }
        });

        frame.add(new JLabel("Ingrese un nuevo elemento al JList:"));
        frame.add(textField);
        frame.add(scrollPane);
        frame.add(button);
        frame.setVisible(true);
    }
}