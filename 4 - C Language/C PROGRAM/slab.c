#include <stdio.h>
int main()
{

  int number = 19;
  int remaining = number / 10;    //1
  int last = number % 10;         //9
  
//   for (int i = number; i != 1; i++){
//     int results = remaining * remaining + last * last;
//     number = results; 
// }

int i = number;
while (i != 1){
    int results = remaining * remaining + last * last;
    if (i == 1){
    printf("%d",results);
    }
}

  if (number == 1){
    printf("Yes");
  } else {
    printf("No");
  }
}