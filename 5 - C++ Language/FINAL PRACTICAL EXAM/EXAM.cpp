#include <iostream>
#include <string.h>
using namespace std;

// Q1
// Create a class representing a `Movie` with attributes like
// `title`, `genre`, and `releasedYear`. Demonstrate the instantiation of objects 
// using array and accessing their attributes.

class Movie{
  private:
  string title;
  string genre;
  int releasedYear;
  
  public:
  void setter(string Mtitle, string Mgenre, int MreleasedYear){
    title = Mtitle;
    genre = Mgenre;
    releasedYear = MreleasedYear;
  }
  
  void getter(){
  cout <<"Movie Title : "<< title << endl;
  cout << "Movie Genre : " <<genre << endl;
  cout << "Movie Released Date : " << releasedYear << endl;
  }
};

int main(){
  Movie object[3];
  object[0].setter("pathan","action",2024);
  object[0].getter();
  
  
  
  return 0;
}


// __________________________________________________________________________________________________________

#include <iostream>
#include <string.h>
using namespace std;

// Q2
// Define a class named `BankAccount` with private attributes `accountNumber`, `balance`, and `ownerName`. 
// Encapsulate these attributes using ppropriate access specifiers. Implement public member functions to credit, 
// debit, and display the balance. Demonstrate encapsulation by interacting with the class through its member functions.

class BankAccount{
  private:
  int accountNumber;
  float balance;
  string ownerName;
  
  public:
  void setter(int BaccountNumber, float Bbalance, string BownerName){
    accountNumber = BaccountNumber;
    balance = Bbalance;
    ownerName = BownerName;
  }
  
  void getter(){
    cout <<"account Number : "<< accountNumber << endl;
    cout << "balance : " << balance << endl;
    cout << "owner Name : " << ownerName << endl;
  }
  
  void credit(int creditEntry){
    balance += creditEntry;
  }
  
  void debit(int debitEntry){
    balance -= debitEntry;
  }
  
  void dislay(){
     cout <<"account Balance : "<< balance << endl;
  }
};

int main(){
  BankAccount account1;     // 1 Object created   
  account1.setter(101,1000,"raiyan");   // added accountNumber, amount & name 
  account1.credit(100); // 100 is credit 
  account1.debit(900);  // 900 debit 
  account1.getter();    // getter for showing all the info about the account1
  account1.dislay();    // display for seeing the account balance after credit & debit  
  
  return 0;
}


// __________________________________________________________________________________________________________

#include <iostream>
#include <string.h>
using namespace std;
// Q3
// Define a base class `Vehicle` with private attributes `model` and `speed`. 
// Implement public member functions for setting and getting these attributes. 
// Derive two classes, `Car` and `Bike`, from the `Vehicle` class. Implement methods to 
// calculate the time taken for a certain distance based on the speed of each vehicle.
// Demonstrate abstraction by calling the time calculation methods for both `Car` and `Bike`.

class Vehicle{
  protected:
  string model;
  double speed;

  public:
  void setter(string Vmodel, double Vspeed){
    model = Vmodel;
    speed = Vspeed;
  }
  
  void getter(){
    cout <<" Vehicle Model: "<< model << endl;
    cout << "Vehicle Speed : " << speed << endl;
  }
  
};

class Car : public Vehicle {
public:
    double calcTime(double distance) {
        return distance / speed;
    }
};

class Bike : public Vehicle {
public:
    double calcTime(double distance) {
        return distance / speed;
    }
};

int main(){
    Car c;
    c.setter("BMW", 120);
    c.getter();
    
    cout << "Car Time takes : " << c.calcTime(240) << " hours" << endl; //here the 240 is km

    Bike b;
    b.setter("hundai", 60);
    b.getter();
    cout << "Bike Time takes : " << b.calcTime(240) << " hours" << endl; //here the 240 is km

    return 0;
}

// __________________________________________________________________________________________________________

#include <iostream>
#include <string.h>
using namespace std;

// Define a base class `Vehicle` with private attributes `model` and `speed`. 
// Implement public member functions for setting and getting these attributes. 
// Derive two classes, `Car` and `Bike`, from the `Vehicle` class. Implement methods to 
// calculate the time taken for a certain distance based on the speed of each vehicle.
// Demonstrate abstraction by calling the time calculation methods for both `Car` and `Bike`.

// Extend the `Vehicle` hierarchy from Question 3 to include a virtual function `displayDetails()`. 
// Implement the `displayDetails()` function in each derived class to print information specific to the vehicle. 
// Create an array of `Vehicle` pointers, pointing to objects of different vehicles. Demonstrate polymorphism by 
// calling the `displayDetails()` function for each object.

class Vehicle{
  protected:
  string model;
  double speed;

  public:
  void setter(string Vmodel, double Vspeed){
    model = Vmodel;
    speed = Vspeed;
  }
  
  void getter(){
    cout <<" Vehicle Model: "<< model << endl;
    cout << "Vehicle Speed : " << speed << endl;
  }
  
  virtual void displayDetails() {
    cout << speed << endl;
  }
  
};

class Car : public Vehicle {
public:
    double calcTime(double distance) {
        return distance / speed;
    }
    
    
  void displayDetails() override {
        cout << "Car Model: " << model << ", Speed: " << speed << " km/h" << endl;
    }
  
  
};

class Bike : public Vehicle {
public:
    double calcTime(double distance) {
        return distance / speed;
    }
    
    void displayDetails() override {
        cout << "Car Model: " << model << ", Speed: " << speed << " km" << endl;
    }
};

int main(){
  // we made 2 object of diffrent classes 
    Car c;
    Bike b;
  
    // here we have set the input for diffrent classes 
    c.setter("BMW", 120);
    b.setter("Hero", 60);
  
    // calling calcTime function for each object
    cout << "Car Time for 240 km: " << c.calcTime(240) << " hours" << endl;
    cout << "Bike Time for 240 km: " << b.calcTime(240) << " hours" << endl;
    
    // made pinter object then we are passing refrence of 2 diffrent classes
    Vehicle* object[2];
    object[0] = &c;
    object[1] = &b;
  
    // for printing displayDetails function of both object 
    for (int i = 0; i < 2; i++) {
        object[i]->displayDetails();
    }


  return 0;
}

// __________________________________________________________________________________________________________

// Q5
// Define an abstract class `Shape` with pure virtual functions `calculateArea()` and `draw()`. Implement concrete/normal classes 
// `Circle` and `Rectangle` that inherit from `Shape`. Demonstrate polymorphism by creating an array of `Shape` pointers pointing to 
// objects of both `Circle` and `Rectangle`. Call the `calculateArea()` and `draw()` functions for each object.

#include <iostream>
using namespace std;

// Q5
// Define an abstract class `Shape` with pure virtual functions `calculateArea()` and `draw()`. 
// Implement concrete/normal classes  `Circle` and `Rectangle` that inherit from `Shape`. Demonstrate 
// polymorphism by creating an array of `Shape` pointers pointing to objects of both `Circle` and 
// `Rectangle`. Call the `calculateArea()` and `draw()` functions for each object.

class Shape {
public:
    virtual float calculateArea() = 0; 
    virtual void draw() = 0; 
};

class Circle : public Shape {
private:
    float radius;

public:
    Circle(float r) {
        radius = r;
    }

    float calculateArea() {
        float pi = 3.14;
        return pi * radius * radius;
    }

    void draw() {
        cout << "Drawing Circle" << endl;
    }
};

class Rectangle : public Shape {
private:
    float length, width;

public:
    Rectangle(float l, float w) {
        length = l;
        width = w;
    }

    float calculateArea() {
        return length * width;
    }

    void draw() {
        cout << "Drawing Rectangle" << endl;
    }
};

int main() {
    Shape* shapes[2];

    Circle c(5);
    Rectangle r(4, 6);

    shapes[0] = &c;
    shapes[1] = &r;

    for(int i = 0; i < 2; i++) {
        cout << "Area: " << shapes[i]->calculateArea() << endl;
        shapes[i]->draw();
        cout << endl;
    }

    return 0;
}
