#include <stdio.h>

// Write a program to check whether a given number is even or odd using if-else.
// Take an integer input from the user and print whether it is positive, negative, or zero.
// Input the age of a person. If age ≥ 18 print "Eligible to vote" else print "Not eligible".
// Input two numbers from the user and print the greater number.
// Input three numbers and print the smallest number.

int main() {

    int num1;
    int num2;
    int num3;

    printf("Enter num1 value :");
    scanf("%d",&num1);

    
    printf("Enter num2 value :");
    scanf("%d",&num2);

    
    printf("Enter num3 value :");
    scanf("%d",&num3);

    if (num1 > num2 && num1 > num3){
        printf("num1 is greater");
    } else if (num2 > num1 && num2 > num3){
        printf("num2 is greater");
    } else if (num3 > num2 && num3 > num1){
        printf("num3 is greater");
    }

    // this program work exelent but the problem is i also wanna declare that 
    // if thevalue is exept int then it should printf "Enter Number"
    
    return 0;
}
