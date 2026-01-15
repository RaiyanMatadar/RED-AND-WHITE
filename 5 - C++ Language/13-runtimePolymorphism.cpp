#include <iostream>
using namespace std;

// Run time polymorphism
// we use virtual + function ovveriding for using run time polymorphism

class Base {
  public:
  virtual void display(){       // we declare virtual in the base class              
    std::cout << "Base Class" << std::endl;
  }
};

class Derived : public Base {
  public:
  void display() override{      // for overidding we write function of base class with the same name and then add override keyword for bettter understanding 
    std::cout << "Derived Class" << std::endl;
  }
};

int main(){
  
  Base* obj;              // here we have to make an object of the base class with the poiner. 
  Derived dobj;
  
  obj = &dobj;          // after making the poiner object from the base class we will assign the refrencee of the other object.
  
  obj->display();       //here obj has the refrence of the dobj and -> this poiner will point to the display which is now the dobj display function
  
  return 0;
}
// ___________________________________________________________________________________________________________________________

// 8. Can destructors be virtual? Why?

// Answer:
// Yes, and they SHOULD be.
// If you delete a derived object using a base pointer, having a virtual destructor ensures proper cleanup.

// ❌ Without virtual destructor (WRONG behavior)
#include <iostream>
using namespace std;

class Base {
public:
    ~Base() {
        cout << "Base Destructor\n";
    }
};

class Derived : public Base {
public:
    ~Derived() {
        cout << "Derived Destructor\n";
    }
};

int main() {
    Base *ptr = new Derived();
    delete ptr;   // WRONG: Derived destructor will NOT be called
    return 0;
}

// ✅ With virtual destructor (Correct behavior)
#include <iostream>
using namespace std;

class Base {
public:
    virtual ~Base() {
        cout << "Base Destructor\n";
    }
};

class Derived : public Base {
public:
    ~Derived() {
        cout << "Derived Destructor\n";
    }
};

int main() {
    Base *ptr = new Derived();
    delete ptr;   // Correct: Both destructors will run
    return 0;
}
