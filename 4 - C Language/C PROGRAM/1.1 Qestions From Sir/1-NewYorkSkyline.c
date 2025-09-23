#include <stdio.h>

int main() {
    
    int arr[10] = {2,4,7,1,9,2,6,1,9,2};
    
    int user;
    printf("how many building : ");
    scanf("%d",&user);

    for (int i = 0; i < user; i++){
        if (arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            printf("2 ");

        } else if (arr[i] > arr[i-1] || arr[i] > arr[i+1]){
            printf("1 ");
        }

        else {
            printf("0 ");
        }
    }
    
}