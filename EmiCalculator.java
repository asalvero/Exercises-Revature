package com.company;

import java.util.Scanner;

public class EmiCalculator {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter principle loan amount: ");
        int p = in.nextInt();
        System.out.print("Enter rate of interest (decimal value): ");
        double i = in.nextDouble();
        System.out.print("Enter number of monthly installments (total months, not years): ");
        int n = in.nextInt();

        System.out.println();

        int numerator = (int) Math.pow((1 + i), n);
        double denominator = (Math.pow((1 + i), n) - 1);
        double result = ((p * i * numerator)/denominator);

        System.out.println("Result: " + Math.round(result));

    }
}
