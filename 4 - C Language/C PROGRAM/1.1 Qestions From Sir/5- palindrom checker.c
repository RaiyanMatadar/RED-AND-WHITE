#include <stdio.h>
#include <string.h>
   
int main(){
    
// this string we need to check if its palindrome or not
char str[]="hannah"; 
// this is the lenght of the str variable so here its = 6 
int lnth = strlen(str);     

// this will be iniaziled for finally checking whether its an palindrom or not
int flag = 1;
  
//   i = 0 i < 3(i < 6 / 2 = 3); i++
  for (int i = 0; i < lnth/2;i++){
    
    // if str[h] is not equal to str[6-0-1]= h; 
    // so this condition will always be true cause the input 
    // hannah is palindrom so everytime true will lead the 
    // int flag = 0... 
    // one point to be notes as we are using != exept the == become we need to check
    // all the pait then after that we need to make the flag = 0 so for that reason like 
    // if we use == then if will make the flag = 0; even after the rest of the conditon
    // gets false the reason is obvious that first itration make the flag = 0; 
    if (str[i] != str[lnth-i-1]){  
      flag = 0;
      break;
    }
    
  }
  
//   on the previous loop we given and condition for flag so if the flag
//   is alway 0 then it will output the following 
  if (flag == 0){
    printf("Not palindrome");
  } else {
    printf("palindrome");
  }
  
}
