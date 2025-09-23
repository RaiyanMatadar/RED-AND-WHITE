#include <stdio.h>

int main (){

    // Q1. Alphabet skipper     
    char ch = 'a';
    
    do {    

        printf("%c ",ch);
        ch+=4;

    } while (ch <= 'z');

    
    return 0;
}