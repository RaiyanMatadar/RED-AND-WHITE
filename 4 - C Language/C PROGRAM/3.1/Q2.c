#include <stdio.h>

int main() {
    
    // Gross salary calculator

    float baseSalary;
    float hraPercent;
    float daPercent;
    float taPercent;
    
    printf("Enter base salary: ");
    scanf("%f",&baseSalary);

    printf("Enter HRA percent: ");
    scanf("%f",&hraPercent);

    printf("Enter DA percent: ");
    scanf("%f",&daPercent);

    printf("Enter TA percent: ");
    scanf("%f",&taPercent);

    float hra;
    float da;
    float ta;
    float grossSalary;

    hra = (baseSalary*hraPercent) / 100;
    da = (baseSalary*daPercent) / 100;
    ta = (baseSalary*taPercent) / 100;

    grossSalary = baseSalary + hra + da + ta;

    printf("Gross salary is:%f",grossSalary);

    return 0;
}
