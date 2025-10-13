#include <iostream>
using namespace std;

class timeConvertor{

  public:
  // this function will calculate the input from seconds to HH-MM-ss
  void secondsToTime(){
    int seconds;
    cout << "Enter seconds : ";
    cin >> seconds;
    
    int hours = seconds / 3600;
    int minutes = (seconds % 3600) / 60;
    int secs = seconds % 60;
    
    cout << "Hours: " << hours << ", Minutes: " << minutes << ", Seconds: " << secs << endl;
  }
  
  // this function will calculate the input from HH-MM-SS to seconds 
  void timeToSeconds(){
    int hours;
    cout << "Enter hours : ";
    cin >> hours;
    
    int minutes;
    cout << "Enter minutes : ";
    cin >> minutes;
    
    int  seconds;
    cout << "Enter seconds : ";
    cin >> seconds;
    
    int totalSeconds = hours * 3600 + minutes * 60 + seconds;
    cout << "Total seconds : " << totalSeconds << endl;
  }
  
};

// Use Programiz C++ onlinee campiler for better uderstanding
int main(){
    
    int choice;
    cout << "1. Convert Seconds to HH:MM:SS" << endl;
    cout << "2. Convert HH:MM:SS to Seconds" << endl;
    cout << "Enter your choice: ";
    cin >> choice;
    
    if (choice == 1){
        timeConvertor t1;
        t1.secondsToTime();
    } 
    else if (choice == 2){
        timeConvertor t1;
        t1.timeToSeconds();
    } 
    else {
        cout << "Invalid input";
    }
    
    return 0;
}



