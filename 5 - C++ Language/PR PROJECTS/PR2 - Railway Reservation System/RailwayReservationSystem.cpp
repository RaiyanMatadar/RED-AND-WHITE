#include <iostream>
#include <cstring>
using namespace std;

class Train{
    private:
    int trainNumber;
    char trainName[50];
    char source[50];
    char destination[50];
    char trainTime[10];

    public:
    static int trainCount;

    // default constructor
    Train(){
      trainNumber = 0000;
      strcpy(trainName, "Unknown");
      strcpy(source, "Unknown");
      strcpy(destination, "Unknown");
      strcpy(trainTime, "Unknown");
    }

    // parameterised construnctor
    Train(int tNum, char tName[50], char src[50], char des[50], char tTime[10]){
        trainNumber = tNum;
        strcpy(trainName, tName);
        strcpy(source, src);    
        strcpy(destination, des); 
        strcpy(trainTime, tTime);  
    }

    // desctructor 
    ~Train(){}

    // setter 
    void setter(){
        int tNum;
        cout << "Enter Train Number : ";
        cin >> tNum;
        trainNumber = tNum;
        cin.ignore();
        
        char tName[50];
        cout << "Enter Train Name : ";
        cin.getline(tName, 50);
        strcpy(trainName, tName);
        
        char src[50];
        cout << "Enter Train Source : ";
        cin.getline(src, 50);
        strcpy(source, src);     
        
        char des[50];
        cout << "Enter Train Destination : ";
        cin.getline(des, 50);
        strcpy(destination, des);
        
        char tTime[10];
        cout << "Enter Train Time : ";
        cin.getline(tTime, 10);
        strcpy(trainTime, tTime); 
    }
    
    // getter
    void getter(){
        cout << "Train Number : "<< trainNumber << endl;
        cout << "Train Name : "<< trainName << endl;
        cout << "Source : " <<  source << endl;
        cout << "Destination : " << destination << endl;
        cout << "Train Time : " << trainTime << endl;
    }
    
    // this function is made for getting the private trainNumber variable outside the current class 
    // i have used in the searchTrainByNumber function in RailwaySystem class.
    int getTrainNumber(){
      return trainNumber;
    }
};

  int Train::trainCount = 0;

class RailwaySystem{
    private:
    Train trains[100];
    int totalTrains = 0;
    
    public:
    // this function for adding the traind details
    void addTrain(){
        trains[totalTrains].setter();
        totalTrains++;
        Train::trainCount++;
    }

    // this function is for displaying the train details.
    void displayAllTrain(){
        for (int i = 0; i < totalTrains; i++){
        cout << "Train " << i + 1 << " Deatils" << endl;
            trains[i].getter();
            cout << endl;
        }
            cout << "Total Trains : " << Train::trainCount << endl;
    }
    
    // searching the train by its number 
    void searchTrainByNumber(int number){
        bool found = false;
        for (int i = 0; i < totalTrains; i++){
          if (trains[i].getTrainNumber() == number){
              cout << "Train with number "<< trains[i].getTrainNumber() << " Exist" << endl;
              found = true;
              break;
          } 
        }
          
        if(found == false){
            cout << "Train with number " << number << " Not found!" << endl;
        }
    }
    
};

int main(){

    int choice;
    
    RailwaySystem obj;
    
    do {
    
    cout << endl;
    cout << "==============================" << endl;
    cout << "   VEHICLE REGISTRY SYSTEM    " << endl;
    cout << "==============================" << endl;
    cout << "1. Add Vehicle" << endl;
    cout << "2. View All Vehicles" << endl;
    cout << "3. Search Vehicle by ID" << endl;
    cout << "4 - Exit" << endl;
    cout << "Enter your choice : ";
    cin >> choice;
    
    cout << endl;
    
    switch (choice){
    case 1:
        obj.addTrain();
        break;
    
    case 2:
        obj.displayAllTrain();
        break;
    
    case 3:
        int num;
        cout << "Enter Train Number to search : ";
        cin >> num;
        obj.searchTrainByNumber(num);
        break;
        
    case 4:
    cout << "Exit succesfull" << endl;
    return 0;
        break;
    }
    
    } while ( choice > 0 && choice < 5);
    
    cout << "Invalid input" << endl;
    return 0;
}