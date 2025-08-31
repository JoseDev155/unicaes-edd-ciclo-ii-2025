import javax.swing.JCheckBox;
import javax.swing.JFrame;
import javax.swing.JLabel;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Ejercicio2 {
    public static void main(String[] args) {
        // Diseña una ventana con 3 JCheckBox (por ejemplo: "Pizza", "Hamburguesa", "Tacos") y un JLabel
        JFrame frame = new JFrame("2. JCheckBox y JLabel");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);
        frame.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 20));

        JCheckBox checkBox1 = new JCheckBox("Pizza");
        JCheckBox checkBox2 = new JCheckBox("Hamburguesa");
        JCheckBox checkBox3 = new JCheckBox("Tacos");
        String text = "Alimentos seleccionados: ";
        String status = "Ninguno";
        JLabel label = new JLabel(text + status);

        // Cuando el usuario marque o desmarque las opciones, el JLabel debe mostrar dinámicamente los alimentos seleccionados
        StringBuilder selectedItems = new StringBuilder();
        selectedItems.append(text);
        
        checkBox1.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                if (checkBox1.isSelected()) {
                    selectedItems.append("Pizza ");
                }
                else {
                    for (int i = 0; i < selectedItems.length(); i++) {
                        if (selectedItems.substring(i).startsWith("Pizza ")) {
                            selectedItems.delete(i, i + "Pizza ".length());
                            break;
                        }
                    }
                }
                label.setText(selectedItems.toString().trim());
            }
        });

        checkBox2.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                if (checkBox2.isSelected()) {
                    selectedItems.append("Hamburguesa ");
                }
                else {
                    for (int i = 0; i < selectedItems.length(); i++) {
                        if (selectedItems.substring(i).startsWith("Hamburguesa ")) {
                            selectedItems.delete(i, i + "Hamburguesa ".length());
                            break;
                        }
                    }
                }
                label.setText(selectedItems.toString().trim());
            }
        });

        checkBox3.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                if (checkBox3.isSelected()) {
                    selectedItems.append("Tacos ");
                }
                else {
                    for (int i = 0; i < selectedItems.length(); i++) {
                        if (selectedItems.substring(i).startsWith("Tacos ")) {
                            selectedItems.delete(i, i + "Tacos ".length());
                            break;
                        }
                    }
                }
                label.setText(selectedItems.toString().trim());
            }
        });
        
        frame.add(new JLabel("Selecciona un alimento:"));
        frame.add(checkBox1);
        frame.add(checkBox2);
        frame.add(checkBox3);
        frame.add(label);
        frame.setVisible(true);
    }
}