package Exercise10_26;

import java.util.Scanner;

public class Question1 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter double input for length: ");
        double length = in.nextDouble();
        System.out.print("Enter double input for width: ");
        double width = in.nextDouble();

        int result = (int) (length * width);
        System.out.println("The area of the rectangle is: "+ result);
    }
}
