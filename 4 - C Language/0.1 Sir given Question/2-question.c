#include <stdio.h>

int main (){
    
    int num = 1;
    int x = num % 10;

    if (x == 0){
        printf("Zero");
    } else if (x == 1){
        printf("one");
    }

    return 0;
}