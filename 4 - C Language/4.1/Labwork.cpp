#include <stdio.h>
#include <math.h>

int main (){
	
	//Write an program to evaluate formula (x + y)2
	int x1 = 5;
	int y1 = 2;
	
	int sum = (x1+y1);
	int power1 =pow(x1,y1);
	
	printf("%d\n",power1);
	
	//Write an program to evaluate formula (x - y)2
	int x2 = 3;
	int y2 = 3;
	
	int sum2 = (x2-y2);
	int power2 = pow(x2,y2);
	
	printf("%d",power2);	
	
	//Write an program to evaluate formula (x - y)3
	int x3 = 4;
	int y3 = 4;
	
	int sum3 = (x3+y3);
	int power3 = pow(x3,y3,3);
	
	printf("%d",power3);
}