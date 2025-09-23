#include <stdio.h>

int main (){
    // Q-3 Triangle angle finder
    
    int angleOne;
    int angleTwo;
    
    printf("first angle value :");
    scanf("%d",&angleOne);
    
    printf("second angle Value :");
    scanf("%d",&angleTwo);
    
    int c = 180-(angleOne+angleTwo);

    printf("%d",c);

}
