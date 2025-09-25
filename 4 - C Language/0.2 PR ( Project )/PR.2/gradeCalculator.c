#include <stdio.h>

int main (){

    // Grade system Using Ternary operator 
    int marks;
    printf("Enter your Marks : ");
    scanf("%d",&marks);

    int grade; 
    
    grade = (marks >= 90) ? 'A' : 
            (marks >= 70) ? 'B' :
            (marks >= 50) ? 'C' : 
            (marks >= 30) ? 'D' : 'F';

    // Comments Using switch Statement
    switch (grade){
        case 'A':
        printf("your grade is A. Excelent Work!");
        break;

        case 'B':
        printf("your grade is B. Well Done");
        break;

        case 'C':
        printf("your grade is C. Good job");
        break;

        case 'D':
        printf("your grade is D. you passed");
        break;

        case 'F':
        printf("your grade is F. Sorry,you failed");
        break;
    }

    // Eligibility Using if-else Statement
    if (grade >= 'A' && grade <= 'D'){
        printf(" Your are eligible for the next level.");
    } 

    else {
           printf(" Please try again next time");
    }
   
    return 0;
}