#include <stdio.h>
#include <stdbool.h>

// 1 -  This is an proper bubble sort using function
// void sorting(int *p,int n){
  
//   for (int i = 0; i < n;i++){
    
//     bool swapped=true;
    
//     for (int j = 0; j < n - i; j++){
//       if (p[j] > p[j+1]){
//         int temp = p[j+1];
//         p[j+1]=p[j];
//         p[j]=temp;
//         swapped = false;
//       }
//     }
    
//      if (swapped){
//         break;
//       }
//   }
// }

// int main(){
  
//   int arr[] = {12,54,87,12,98,12,65};
//   int length = sizeof(arr)/sizeof(arr[0]);
  
//   sorting(arr,length);
  
//   for (int i = 0; i < length; i++){
//     printf("%d\n",arr[i]);
//   }
  
//   return 0;
// }


// 2 - this sorting based on remainders
// int main (){
  
//   int arr[] = {46,17,65,18,12}; 
//   int length = sizeof(arr)/sizeof(arr[0]);
//   int k = 6;
  
//   for (int i = 0; i < length-1; i++){
//     for (int j = 0; j < length-i-1; j++){
//       if (arr[j] % k > arr[j+1] % k){
//         int temp = arr[j+1];
//         arr[j+1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
  
//   for (int i = 0; i < length; i++){
//     printf("%d\n",arr[i]);
//   }
  
//   return 0;

  
// }