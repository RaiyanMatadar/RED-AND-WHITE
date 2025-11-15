#include <iostream>
#include <string>
using namespace std;

class Vehicle{
  private:
  int vehicleID;
  string manufacturer;
  string model;
  int year;
  
  public:
  
  static int totalvehicle;
  
  // default constructor
  Vehicle (){
    vehicleID = 0;
    manufacturer = "unknown";
    model = "unknown";
    year = 0;
  }
  
  // setter
  void virtual setter(){
      cout << "Enter vehicle ID : ";
      cin >> vehicleID;
      
      cout << "Enter vehicle Manufacturer : ";
      cin >> manufacturer;

      cout << "Enter vehicle Model : ";
      cin >> model;
      
      cout << "Enter vehicle year : ";
      cin >> year;
      
  }

  
  // getter
  void virtual getter(){
    cout << "vehicle ID : " <<vehicleID<< endl;
    cout << "vehicle Manufacturer : " << manufacturer << endl;
    cout << "vehicle model : " << model << endl;
    cout << "vehicle Year : " << year << endl;
  }
  
  int getvehicleID(){
      return vehicleID;
    }
};

int Vehicle::totalvehicle = 0;

// here this virtual exist casue car & Vehicle has inherited  from the same base class so when i dont 
// use this virtual function the compiler gets confuse which one to use so for that there is an virtual keyword exist
class Car : public virtual Vehicle{
  private:
  string fuelType;
  
  public:
  // Car (){}
  
  // setter of car
  void setter() override{
    Vehicle::setter();
    cout << "Enter Fuel Type : ";
    cin >> fuelType;
  }
  
   // getter of car
  void getter() override{
    Vehicle::getter();
    cout << "vehicle fuel Type : " << fuelType << endl;
    cout << " ";
  }
  
};

class ElectricCar : public Car{
  private:
    string batteryCapacity;
    
  public: 
  // setter of electricity
  void setter() override{
    Vehicle::setter();
    cout << "Enter battery Capacity : ";
    cin >> batteryCapacity;
  }
  
   // getter of electricity
  void getter() override{
    Vehicle::getter();
    cout << "Vehicle Battery Capacity Type : " << batteryCapacity << endl;
    cout << " ";
  }
};


// here again we used virtual cause we have inherited vehicle
// into aircraft class s ofor that compiler can comfused again s othats why we have used virtual keyword
class Aircraft : public virtual Vehicle {
  private:
  int flightRange;
  
  public:
  // setter of aircraft
  void setter() override{
    Vehicle::setter();
    cout << "Enter flight Range : ";
    cin >> flightRange;
  }
  
   // getter of aircraft
  void getter() override{
    Vehicle::getter();
    cout << "vehicle flight Range : " << flightRange << endl;
    cout << " ";
  }
};

class FlyingCar : public Car, virtual Aircraft{

  void setter() override {
    Car::setter();
    Aircraft::setter();
  }

  void getter() override {
    Car::getter();
    Aircraft::getter();
  } 
};

class SportsCar : public ElectricCar {
  private:
  int topSpeed;
  
  public:
  // setter of aircraft
  void setter() override{
    Vehicle::setter();
    cout << "Enter Top Speed : ";
    cin >> topSpeed;
  }
  
   // getter of aircraft
  void getter() override{
    Vehicle::getter();
    cout << "vehicle Top Speed : " << topSpeed << endl;
    cout << " ";
  }

};

class Sedan : public Car{};

class SUV : public Car{};

class VehicleRegistry{
  public:
  Vehicle* obj[100];
  int totalobject = 0;
  
  void add(){
    
    Vehicle::totalvehicle++;
    cout << "Select Vehicle Type:" << endl;
    cout << "1. Car" << endl;
    cout << "2. Electric Car" << endl;
    cout << "3. Sports Car" << endl;
    cout << "4. Sedan" << endl;
    cout << "5. SUV" << endl;
    cout << "6. Aircraft" << endl;
    cout << "7. Flying Car" << endl;
    
    int choice;
    cout << "Enter Vehicle Type : ";
    cin >> choice;
    
    if (choice == 1){
        // obj[totalobject].setter();
        obj[totalobject] =  new Car();
    } else if (choice == 2){
        // obj[totalobject].setter();
        obj[totalobject] = new ElectricCar();
    } else if (choice == 3){
        // obj[totalobject].setter();
        obj[totalobject] = new SportsCar();
    }  else if (choice == 4){
        // obj[totalobject].setter();
         obj[totalobject] = new Sedan();
     } else if (choice == 5){
        // obj[totalobject].setter();
        obj[totalobject] = new SUV();
    }  else if (choice == 6){
        // obj[totalobject].setter();
        obj[totalobject] = new Aircraft();
    }  else if (choice == 7){
        // obj[totalobject].setter();
        obj[totalobject] = new FlyingCar();
    }
    
    obj[totalobject]->setter();
    totalobject++;
  }
  
  void display(){
    for (int i = 0; i < totalobject; i++){
      obj[i]->getter();
      cout << endl;
    }
    
    cout << "Total vehicle : " << Vehicle::totalvehicle  << endl;
    //  Vehicle::totalvehicle 
  }
  
  void searching(int number){
    bool found = false;
    for (int i = 0; i < totalobject; i++){
        if (obj[i]->getvehicleID() == number){
          cout << "vehicle with ID number "<< obj[i]->getvehicleID() << " Exist" << endl;
          found = true;
          break;
        }
    }      
    
    if (found == false){
        cout << "vehicle ID : " << number << "Not found!" << endl;
    }
  }
  
};

int main(){
  
  VehicleRegistry registry;
  int choice;
  
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
        registry.add();
      break;
      case 2:
        registry.display();
      break;
      case 3:
        int num;
        cout << "Enter Vehicle Number to search : ";
        cin >> num;
        registry.searching(num);
      break;
    }
    
  } while (choice > 0 && choice < 5);
  
    cout << "Invalid input" << endl;
  return 0;
}
