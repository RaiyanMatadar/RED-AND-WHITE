#include <stdio.h>

int main() {
    // Array of pointers to strings
    char *str[] = {"raiyan", "a", "matadar"};

    /*
     * Simple Explanation:
     *
     * 1. char *str[] means "array of strings" (each element is a string).
     * 2. str[0] = "raiyan", str[1] = "a", str[2] = "matadar".
     * 3. Each element stores the address of the string, not the string itself.
     * 4. printf("%s", str[0]) prints the string at index 0 → "raiyan".
     * 5. Each string has its own memory location.
     * 6. You can loop through all strings:
     *      for(int i=0; i<3; i++)
     *          printf("%s\n", str[i]);
     * 7. Note: Don’t try to change these strings directly—they are read-only.
     */

    printf("%s\n", str[0]); // prints "raiyan"

    return 0;
}
