#include <iostream>
#include <string>
using namespace std;

// The 'this' pointer:
// The 'this' pointer is used to refer to the calling object itself.
// It is helpful when member variables have the same name as function parameters.
// Example: this->name refers to the member variable, while 'name' refers to the parameter.

class Teacher {
    private:
        float salary; // Private member variable

    public:
        string name;       // Public member variable
        string department; // Public member variable

        // Parameterized constructor
        Teacher(string name, string department, float salary) {
            this->name = name;             // Assign parameter 'name' to member variable 'name'
            this->department = department; // Assign parameter 'department' to member variable 'department'
            this->salary = salary;         // Assign parameter 'salary' to member variable 'salary'
        }

        // Function to display teacher details
        void displayDetails() {
            cout << "Name: " << name << endl;
            cout << "Salary: " << salary << endl;
            cout << "Department: " << department << endl;
        }
};