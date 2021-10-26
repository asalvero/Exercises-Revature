package Exercise10_26;

abstract class Marks{
    public double grade1;
    public double grade2;
    public double grade3;
    public double grade4;

    public abstract void getPercentage();
}

class A extends Marks{

    public A(double grade1, double grade2, double grade3) {
        this.grade1 = grade1;
        this.grade2 = grade2;
        this.grade3 = grade3;
    }

    @Override
    public void getPercentage() {
        double percentage = (grade1 + grade2 +grade3)/300;
        System.out.println("Your overall percentage is: "+ (percentage*100) );
    }
}

class B extends Marks{

    public B(double grade1, double grade2, double grade3, double grade4) {
        this.grade1 = grade1;
        this.grade2 = grade2;
        this.grade3 = grade3;
        this.grade4 = grade4;
    }

    @Override
    public void getPercentage() {
        double percentage = (grade1+grade2+grade3+grade4)/400;
        System.out.println("Your overall percentage is: "+ (percentage * 100));
    }
}

public class Question4 {
    public static void main(String[] args) {
        A student1 = new A(96,82,76);
        student1.getPercentage();

        B student2 = new B(90,97,90,99);
        student2.getPercentage();
    }
}
