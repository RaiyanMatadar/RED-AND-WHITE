// #include <stdio.h>

// int main (){
//     int arr[100] = {1,2,4,8,5,1,8,12};
//     int lenght = 0;

//     for (int i = 0; str[i] < 100; i++){
//     }

//     return 0;
// }

#include <stdio.h>

int main() {
    // int arr[] = {6,4,2,3,40,5,6,7,8,9,11};
    // int lenght = sizeof(arr)/4;
    
    // printf("%d",lenght);
    
    int b = 20;
    int a = 10;
    
    int *p = &b;
    
    printf("%u",p+1);
    printf("%u",p);
    
    return 0;
}