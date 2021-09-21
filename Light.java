import java.util.Scanner;

class Light{

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);


        int LightSpeed = 186000;
        long Days = sc.nextLong();
        long Seconds = Days * 24 * 60 * 60;
        long Distance = LightSpeed * Seconds;
        double distinkm = Distance * 1.6;
        System.out.println("Miles:In " + Days +  " days light will travel about "+Distance+" miles");
        System.out.println("Kilometers:In " + Days +  " days light will travel about "+distinkm+" kilometers");






    }

}