package Exercise10_26;

abstract class Bank{
    public int balance;

    public abstract void getBalance();
}

class BankA extends Bank{
    public BankA(int balance) {
        this.balance = balance;
    }

    @Override
    public void getBalance() {
        System.out.println("BankA balance is: " + balance);
    }
}

class BankB extends Bank{
    public BankB(int balance) {
        this.balance = balance;
    }

    @Override
    public void getBalance() {
        System.out.println("BankB balance is: " + balance);
    }
}

class BankC extends Bank{
    public BankC(int balance) {
        this.balance = balance;
    }

    @Override
    public void getBalance() {
        System.out.println("BankC balance is: " + balance);
    }
}

public class Question5 {
    public static void main(String[] args) {
        BankA a = new BankA(100);
        BankB b = new BankB(150);
        BankC c = new BankC(200);
        a.getBalance();
        b.getBalance();
        c.getBalance();
    }
}
