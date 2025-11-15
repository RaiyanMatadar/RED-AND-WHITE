#include <iostream>
using namespace std;

// 🧠 10 Intermediate-Level C++ Questions
// 1. Dynamic Memory & Arrays

// Dynamically allocates an array of n integers.
// Takes input from the user.
// Finds the maximum and minimum element without using built-in functions.

// Frees the memory after use.
// 👉 Bonus: Explain what happens if you forget to delete[].

// arr = 5,4,13,2,1

int main(){
  
  int input;
  
  cout << "Enter the array size : ";
  cin >> input;
  
  int* arr = new int[input];
  
  for (int i = 0; i < input; i++){
    cout << "Enter the array elements : ";
    cin >> arr[i];
  }
  
  int max = arr[0];
  for (int i = 0; i < input; i++){
    if (arr[i] > max){
        max = arr[i];
    }
  }
  
  int min = arr[0];
  for (int i = 0; i < input; i++){
    if (arr[i] < min){
        min = arr[i];
    }
  }
  
  int total=0;
  int avrage;
  for (int i = 0; i < input; i++){
    total += arr[i];
    int getAvg = total / input;
    avrage = getAvg;
  }
  
  cout << " Maximum : " << max;
  cout << " Minimum : " << min;
  cout << " Avrage : " << avrage;
  
  delete[] arr;
  return 0;
}