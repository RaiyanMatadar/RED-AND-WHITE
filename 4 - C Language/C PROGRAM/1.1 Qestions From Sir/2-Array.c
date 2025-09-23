#include <stdio.h>

int main() {
    
    int arr[5] = {5,10,2,9,1};

    int max = arr[0];
    
    for (int i = 0; i < 5; i++){
        if (arr[i] > max){
            max = arr[i];
            printf("%d ",max);
        } else {
            printf("-1 ");
        }
    }
}

