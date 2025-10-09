// Q-1 Write a C program that prompts the user to enter an integer. 
// Using a loop, calculate and display the factorial of that number.
  
// #include <stdio.h>
// int main()
// {
//   int n = 4;
//   int results = 1;
  
//   for (int i = 1; i <= n; i++){
//     results = results * i;
//   }
  
//   printf("%d",results);
// }

//Q-2 Develop a C program that reads a sentence from the user. Create a function
// to count the occurrences of each vowel in the sentence and display the counts.

// #include <stdio.h>

// void occurrences(char str[]) {
    
//     int length = 0;

//     for (int i = 0; str[i] != '\0'; i++) {
//         length++;
//     }
    
//     for (int i = 0; i < length; i++) {
        
//         int count = 1;
//         for (int j = i; j < length; j++) {
//             if (str[i] == str[j+1]) {
//                 count++;
//             }
//         }

//         int already = 0;
//         for (int k = 0; k < i; k++) {
//             if (str[i] == str[k]) {
//                 already = 1;
//                 break;
//             }
//         }

//         if (already == 1)
//             continue;
            
//         printf("%c => %d\n", str[i], count);
//     }
// }

// int main() {
//     char str[] = "programming";
//     occurrences(str);
//     return 0;
// }


//Q-3 Create a C program that defines a function to 
// check if a given number is a leap year or not.

// #include <stdio.h>

// void LeapYear(int year) {
    
//     if (year % 4 == 0 && year % 100 != 0){
//       printf("%d is a leap year.\n", year);
//     }
//     else if( year % 400 == 0){
//       printf("%d is a leap year.\n", year);
//     } 
//     else {
//     printf("%d is a Not leap year.\n", year);
//     }
// }

// int main() {
  
//     int year = 2024;
//     LeapYear(year);
    
//     return 0;
// }

// Write a C program that uses pointers to swap the values of two
// integers. Implement a function for the swapping operation.

// #include <stdio.h>
// void swap(int *a,int *b){
//   int temp = *a;
//   *a = *b;
//   *b = temp;
  
//   printf("%d %d",*a,temp);
  
// }

// int main() {
//   int x = 10;
//   int y = 20;
  
//   swap(&x,&y);
  
// }

// Q-5 Implement a C program to print the following pattern 
// using nested for loop:

// #include <stdio.h>
// int main() {
  
//   for (int i = 0; i <= 5; i++){
//     for (int j = i; j <= 5; j++){
//       printf(" ");
//     }
    
//     for (int k = i; k > 0;k--){
//       printf("*");
//     }
    
//     printf("\n");
//   }
  
// }

