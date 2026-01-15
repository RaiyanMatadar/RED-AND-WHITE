#include <iostream>
using namespace std;

int main(){
  int a = 10;
  int &ref = a;
  
  cout << a << endl;
  cout << ref << endl;
  
//   modifying refrence variable affect the original variable aswell
  ref = 20;
  
  cout << a << endl;
  cout << ref << endl;
  
  
  return 0;
}