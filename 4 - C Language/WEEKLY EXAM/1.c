#include <stdio.h>

int main (){
    // Q1
    // -----------------------------------
    int arr[5] = {14, 7, 8, 2, 4};
    int sum = 0;
    
    for (int i = 0; i < 5; i++){
        sum += arr[i];
    }
    
    int smallest_element = 1000000001;
    int result_index = -1;
    
    for (int i = 0; i < 5; i++){
        int remaining_sum = sum - arr[i];
        if (remaining_sum % 7 == 0){
            if (arr[i] < smallest_element){
                smallest_element = arr[i];
                result_index = i;
            }
        }
    }
    
    printf("%d", result_index);

    // Q2
    // -----------------------------------  
  int arr1[3] = {3,5,7};
  int arr2[3] = {9,2,5};
  int results = 0; 

  for (int i = 0; i < 3; i++){
    for (int j = 0; j < 3; j++){
      if (arr1[i] == arr2[j]){
        results = arr1[i];
      }
    }
  }

  printf("%d",results);

    // Q3
    // -----------------------------------  
  for (int i = 0; i < variable; i++){
    if (i % 2 == 0){
      printf("-\n");
    } else {        
      for (int j = 0; j < variable; j++){
        printf("*");
      }
      printf("\n");
    }
  }

  
    // Q4
    // -----------------------------------  

    int arr[5]={4,5,2,25};
    int results=0;
  
    for (int i = 0; i < 5; i++){
        if (arr[i] > arr[i+1]){
        results = arr[i];
        printf("%d ",results);
        }
    }
    // here this code is half but i think the logic is correct
    // Q last
    // -----------------------------------  
  
}