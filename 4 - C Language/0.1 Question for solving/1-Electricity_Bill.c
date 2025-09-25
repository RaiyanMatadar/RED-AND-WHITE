#include <stdio.h>

int main (){
    
    int n;

    
    // condition that n cant be less than 0 and greater than 10000

    printf("Input Your Units :");
    scanf("%d",&n);
    
    if (n < 0 || n > 100000){
        printf("The input is not valid");
    }
     
    else if (n > 0 && n <= 50){
        int bill = n * 3 + 80;
        printf("%d",bill);
    }
    
    else if (n < 150){
        int bill = 50*3 + (n-50)*5 + 80;
        printf("%d",bill); 
    }

    else if (n > 150){
        int bill = 50*3 + 100*5 + (n-150)*10 + 80;
        printf("%d",bill);
    }

}