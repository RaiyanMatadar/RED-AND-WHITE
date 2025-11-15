// access specifiers & how inheritance affects them.

// Base class layout
class Base {
public:
    int pub = 1;       // public → anyone can access
private:
    int pri = 1;       // private → only Base can access
protected:
    int pro = 1;       // protected → Base and derived classes can access
};

// Now you have 3 ways to inherit:
class derived : public Base { ... }
class derived : protected Base { ... }
class derived : private Base { ... }
// Each one changes how the Base members are treated inside the derived class and outside (via object).

// Lets break all three down clearly.

// 🟢 1. Public inheritance → “IS-A” relationship
class derived : public Base { ... };

// ✅ Meaning:
// public and protected members of Base keep their access levels inside derived.

// Member in Base	Access inside derived	Access from object (main)
// public	public	✅ accessible (obj.pub)
// protected	protected	❌ not accessible
// private	not accessible	❌ not accessible

// So in your example:

void get() {
  cout << pub << endl;  // ✅ ok
  cout << pri << endl;  // ❌ error — private not accessible
  cout << pro << endl;  // ✅ ok
}


and from main():

obj.pub;  // ✅ ok
obj.pro;  // ❌ protected
obj.pri;  // ❌ private

// 🟡 2. Protected inheritance
class derived : protected Base { ... };


// 👉 Meaning:
// public and protected members of Base become protected in derived.
// private still stays inaccessible.

// Member in Base	Access inside derived	Access from object (main)
// public	protected	❌ not accessible
// protected	protected	❌ not accessible
// private	not accessible	❌ not accessible

// So:

void get() {
  cout << pub << endl;  // ✅ ok (now protected)
  cout << pri << endl;  // ❌ error
  cout << pro << endl;  // ✅ ok (protected)
}


but from main():

obj.pub;  // ❌ no longer public
obj.pro;  // ❌ not accessible

// 🔴 3. Private inheritance
class derived : private Base { ... };


// 👉 Meaning:
// public and protected members of Base become private in derived.
// private stays inaccessible.

// Member in Base	Access inside derived	Access from object (main)
// public	private	❌ not accessible
// protected	private	❌ not accessible
// private	not accessible	❌ not accessible

// So:

void get() {
  cout << pub << endl;  // ✅ ok (now private)
  cout << pri << endl;  // ❌ error
  cout << pro << endl;  // ✅ ok (now private)
}


and from main():

obj.pub;  // ❌ inaccessible
obj.pro;  // ❌ inaccessible

// ✅ Quick comparison summary
// Inheritance Type	Base public becomes	Base protected becomes	Accessible in derived?	Accessible by object?
// public	public	protected	✅ Yes (both)	✅ only public
// protected	protected	protected	✅ Yes (both)	❌ No
// private	private	private	✅ Yes (both)	❌ No

// 💡 Key takeaway:
// public inheritance → “is-a” (Derived is a Base)
// protected/private inheritance → used for internal reuse, not an “is-a” relationship.
