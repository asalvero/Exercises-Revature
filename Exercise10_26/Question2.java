package Exercise10_26;

import java.util.Scanner;

public class Question2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Please enter name, id, and field of interest: ");
        String name = in.nextLine();
        int id = in.nextInt();
        in.nextLine();
        String fieldOfInterest = in.nextLine();

        System.out.println("Hey, my name is "+name+" and my roll number is "+id+". My field of interest are "+fieldOfInterest+".");
    }
}
