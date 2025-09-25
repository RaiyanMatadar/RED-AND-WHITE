#include <stdio.h>

int main() {
    // Q3. Digit addition
    int n;
    int first;
    int last;

    printf("enter number :");
    scanf("%d", &n);

    if (n <= 0) {
        printf("Invalid");
    }
    
    else {    
        last = n % 10;   
        first = n;       

        while (first >= 10) {
            first = first / 10;  
        }

        printf("%d", first + last);
    }

    return 0;
}
