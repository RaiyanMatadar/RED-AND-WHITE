#include <stdio.h>

int main() {

    int arr[3][3]={{1,2,3},
                   {9,7,8}};

    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            printf("At the index (%d,%d) the some of indexes : %d\n",i,j,i+j);
        }
    }
}