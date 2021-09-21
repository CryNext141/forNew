import java.util.Scanner;

class BooleanTesting{

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        int a, b;

        a = sc.nextInt();
        b = sc.nextInt();

        boolean bool = false;


        if (a > b) {

            bool = true;
            System.out.println(bool);
        }
        else {
            System.out.println(bool);

        }



    }

}