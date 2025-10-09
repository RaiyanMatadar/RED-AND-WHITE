#include <stdio.h>

int main() {

    // String Initialization in C

    char Autostring[] = "my name is raiyan";
    char Manualstring[] = {'a','b','c','d','\0'};


    // -------------------------------
    // Autostring
    // -------------------------------
    // When we write a string using double quotes (" "),
    // the compiler automatically adds a null terminator '\0' at the end.
    // Internally, it is stored as:
    // {'m','y',' ','n','a','m','e',' ','i','s',' ',
    //  'r','a','i','y','a','n','\0'}
    //
    // We cannot reassign a new value to Autostring later
    // (for example, Autostring = "new string"; ❌)
    // because arrays cannot be reassigned after declaration.
    //
    // The compiler separates each character and includes '\0' automatically.


    // -------------------------------
    // Manualstring
    // -------------------------------
    // This is the manual method of defining a string.
    // We must explicitly add the null terminator '\0' at the end.
    // Without it, the array is not a string — it's just a character array.
    //
    // Example without '\0':
    // char Manualstring[] = {'a','b','c','d'};   // ❌ Not a string
    //
    // Example with '\0':
    // char Manualstring[] = {'a','b','c','d','\0'};   // ✅ Valid string


    // -------------------------------
    // Difference Between Both
    // -------------------------------
    // Autostring vs Manualstring:
    //
    // 1. Autostring uses " " (string literal)
    //    Manualstring uses {' ', ' ', ..., '\0'} manually
    //
    // 2. Compiler adds '\0' automatically
    //    In manual string, we must add '\0' manually
    //
    // 3. Autostring is easier to write and read
    //    Manualstring gives more control
    //
    // 4. Both are stored in contiguous memory
    //
    // 5. Example:
    //    Autostring: "hello"
    //    Manualstring: {'h','e','l','l','o','\0'}


    // -------------------------------
    // Remember
    // -------------------------------
    // A string in C is simply a character array
    // that ends with '\0' (null terminator).

    return 0;
}
