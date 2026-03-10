import java.util.Scanner;
public class VowelChecker{
    public static void main (String args []){
        Scanner var = new Scanner(System.in);
        System.out.println("Enter Your Name: ");
        String name = var.nextLine();
        int count = 0;
        name = name.toLowerCase();
        for( int i = 0;i<name.length();i++){
            char ch = name.charAt(i);
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
                count++;
            }
        }
        System.out.println("Number of Vowels Present in the Name: " + count);
    }
}