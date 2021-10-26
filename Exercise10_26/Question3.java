package Exercise10_26;

import java.util.Scanner;

class Average{
    int num1;
    int num2;
    int num3;

    public Average(int num1, int num2, int num3) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }

    public void getAverage(Average number){
        int sum = num1 + num2 + num3;
        int average = sum/ 3;
        System.out.println("Average = " + average);
    }
}

public class Question3 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter 3 integers to calculate average");
        int num1 = in.nextInt();
        int num2 = in.nextInt();
        int num3 = in.nextInt();
        Average number = new Average(num1, num2, num3);
        number.getAverage(number);
    }
}
