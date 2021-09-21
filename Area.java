import java.util.Scanner;

class Area{

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);

        double pi,r,a;
        r = sc.nextDouble();
        pi = 3.1416;
        a = pi * r * r;

    System.out.println("Area circle is " + a);


    }

}