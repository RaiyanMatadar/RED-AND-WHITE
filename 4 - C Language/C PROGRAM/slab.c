#include <stdio.h>
#include <string.h>
  
// 1. String Input Print

// Write a program in C to input a string and print it.

// Test Data :
// Input the string : Welcome, w3resource

// Expected Output :

// The string you entered is : Welcome, w3resource 

int main(){
  
  char str[100];
  
  printf("Input the string : ");
  scanf("%s",&str);
  
  printf("The string you entered is : %s",str);
}
