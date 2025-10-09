#include <stdio.h>

// all arithmetics functions part 
int addition(int a,int b){
  return a + b;
}

int subtraction(int a,int b){
  return a - b;
}

int multiplication(int a,int b){
  return a * b;
}

int divisionn(int a,int b){
  return a / b;
}

int modulos(int a,int b){
  return a % b;
}

//Menu instruction function
void menu(){
  printf("Press 1 for + \n");
  printf("Press 2 for - \n");
  printf("Press 3 for * \n");
  printf("Press 4 for / \n");
  printf("Press 5 for % \n");
  printf("Press 0 for EXIT \n\n");
}

//main function part 
int main (){
 
 int number;
 while (number != 0){
 menu();

 printf("Enter your choice : ");
 scanf("%d",&number);
 
  switch (number) {

    case 1: {
        int a, b;
        printf("Enter the first number : ");
        scanf("%d", &a);
        printf("Enter the second number : ");
        scanf("%d", &b);

        int results = addition(a, b);
        printf("addition of %d and %d = %d\n\n", a,b,results);
        break;
    }

    case 2: {
        int a, b;
        printf("Enter the first number : ");
        scanf("%d", &a);
        printf("Enter the second number : ");
        scanf("%d", &b);

        int results = subtraction(a, b);
        printf("subtraction of %d and %d = %d\n\n", a,b,results);
        break;
    }

    case 3: {
        int a, b;
        printf("Enter the first number : ");
        scanf("%d", &a);
        printf("Enter the second number : ");
        scanf("%d", &b);

        int results = multiplication(a, b);
        printf("multiplication of %d and %d = %d\n\n", a,b,results);
        break;
    }

    case 4: {
        int a, b;
        printf("Enter the first number : ");
        scanf("%d", &a);
        printf("Enter the second number : ");
        scanf("%d", &b);

        int results = divisionn(a, b);
        printf("divisionn of %d and %d = %d\n\n", a,b,results);
        break;
    }

    case 5: {
        int a, b;
        printf("Enter the first number : ");
        scanf("%d", &a);
        printf("Enter the second number : ");
        scanf("%d", &b);

        int results = modulos(a, b);
        printf("modulos of %d and %d = %d\n\n", a,b,results);
        break;
    }

    default:
        printf("Program Exit\n");
        return 0;
        break;
    }
  }
}