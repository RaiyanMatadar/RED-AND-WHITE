#include <stdio.h>
#include <stdbool.h>

//int main (){
//
//  int a = 5;
//  int b = 2;
//  int c;
//  
//  c = a + b * 3 / a - b; 
//  printf("%f\n", (float)c);
//}

//	Note takeaway
//  c = 4.2; 
//  the answer isnt coming 4.2 becuadebecuase at the top of the variable we have defined it as int 
//  so when the c = a + b * 3 / a - b; is getting perform the calculation is performing as int not float
//  so when have just converted the int into float at the end so thats why its showing as 4.0000 
  
//int main (){
//	
//	int x = 10;
//	int y = 5;
//	int z = 65;
//	printf("%d\n", (x > y) && (y > z) || (x < y));
//}

//	printf("%d\n", (True) && False) || (x < y));
//	printf("%d\n", (False) || (False));
//	printf("%d\n", False);
	
	
//Note takeaway: 
//In C the result of boolian value shows only 
//in int as 0 or 1 not in true or false 

//int main (){
//	int a = 5, b = 10, c;
//	c = a = b + 2; 
//
//	printf("%d %d %d\n", a, b, c);
//}

//Note takeaway:
//here there are 3 variables then 2 of them are int and one of 
//them is empty so in empty c its saying C = a = b + 2; so this means 
//that C = a (5) then its saying the a (5) = b (10) then + 2 so its 12 
//so the value of C is 12 ok so then the value of a after this all process 
//beomes 12 cause a = 5 then its become a = b which means 10 then + 2 which means 
//12 so a becomes 12 then b remain 10 because we have said in c variable that 
//a = b + 2 means a is b (10) then + 2 which is 12 but we didnt say that b + 2 specifically 
//so thats why its remain 10 then c is 12 and you knows why right.

int main (){
	
	int a = 4, b = 8;
	int max = (a > b) ? a + b : b - a;
	printf("%d\n", max);
}

//Note takeaway:
