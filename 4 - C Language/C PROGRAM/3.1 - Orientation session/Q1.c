#include <stdio.h>

int main (){
 
    // Q-1 Temprature convertor
    // develop a program that convert temprature from degree celsius
    // to farenheit using the  formula = F=(9/5*C)+32
    
    float celsius; 

    printf("Calsius Value : ");
    scanf("%f",&celsius);

    float fahrenheit = (9.0/5.0*celsius)+32;
    printf("%f",fahrenheit);
    
}