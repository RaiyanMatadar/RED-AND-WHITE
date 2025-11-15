#include <iostream>
using namespace std;

// Design an Employee Management System in C++ demonstrating inheritance, pointers,
// array of pointer objects, and dynamic memory allocation using new and delete.

// Requirements:
// Base Class: Employee
// Attributes: employee_id, name, age, salary
// Methods: getters and setters, display()
// Derived Classes: FullTimeEmployee and PartTimeEmployee

// FullTimeEmployee:
// Additional attribute: bonus, override display()

// PartTimeEmployee:
// Additional attribute: hours_worked, override display()

// Employee Management System:
// An array of pointer objects to manage employees

// Menu options:
// - Add Employee: Add FullTimeEmployee or PartTimeEmployee using new
// - Display All Employees: Iterate and display all employees
// - Delete Employee: Remove employee and free memory using delete
// - Exit: Free all dynamically allocated memory

class Employee{
    public:
    int employeeId;
    string name;
    int age;
    float salary;

    // default constructor
    Employee(){      
        employeeId = 0;
        name = "unknown";
        age = 0;
        salary = 0;
    }

    // setter
    void setter(int eI,string n,int a,float s){
        cout << "Set Employee ID : ";
        cin >> eI;
        employeeId = eI;

        cout << "Set Employee Name : ";
        cin >> n;
        name = n;

        cout << "Set Employee Age : ";
        cin >> a;
        age = a;

        cout << "Set Employee Salary : ";
        cin >> s;
        salary = s;
    }

    // getter
    void getter(){
        cout << employeeId << endl;
        cout << name << endl;
        cout << age << endl;
        cout << salary << endl;     
    }
    // display
};

// FullTimeEmployee:
// Additional attribute: bonus, override display()

// PartTimeEmployee:
// Additional attribute: hours_worked, override display()


class FullTimeEmployee{
    public:
    int bonus;

    void display(){

    }


};

class PartTimeEmployee{
    public:
    int hours_worked;

};

class EmployeeManagmentSystem{
    
};

int main(){
  
  // student *arr[3];
  // arr[0] = new int (6);
  int choice;

  switch (choice){
  default:

    break;
  }
  
  
  return 0;
}