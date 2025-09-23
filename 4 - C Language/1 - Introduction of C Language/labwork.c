#include <stdio.h>

//Q1 : Write a program to print your name,age,and school

int main (){
	
	char name[] = "raiyan matadar";
	int age = 19;
	char school[] = "sitpon";
	
	printf("%s\n%d\n%s",name,age,school);
	
	
	//Q2 : Write a program to print the given pattern
	
	char pattern[] = "--------";
	char pattern2[] = "|    	|";
	char pattern3[] = "R    	|";
	char pattern4[] = "N    	|";
	char pattern5[] = "W    	|";
	char pattern6[] = "|    	|";
	
	printf("\n\n%s\n%s\n%s\n%s\n%s\n%s\n%s",pattern,pattern2,pattern3,pattern4,pattern5,pattern6,pattern);

	//Q3 : Write a program to print the given pattern
	
	char star = '*';
	char star2[] = "* *";
	char star3[] = "* * *";
	
	printf("\n\n%c\n%s\n%s\n%s\n%c\n",star,star2,star3,star2,star);

}
