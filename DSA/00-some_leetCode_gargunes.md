array nums sorted in non-decreasing order (non-decreasing order)

basically array nums sorted in non-decreasing order means it can have the duplicates in an arrays so when you hear this word then undetstand that it has the duplicates in an array

and the arrays element will always be in greater order in this scenario too if its nums sorted in non-increasing then it would be vise versa

examples
[1, 2, 3, 4, 5] (each number grows larger)
[-4, -1, 0, 3, 10] (includes negative numbers and zero)
[2, 2, 3, 5, 5] (duplicates are allowed)
[7] (single-element arrays are always sorted)

- remove the duplicates in-place (in-place)

so in the array problem if it appear that means itsa saying we dont need to create the new array we need to change it in place

e.g

[0,0,1,1,1,2,2,3,3,4]

we need to change the array in-place without creating the new array

[0,1,2,3,4]

you might be thinking that if we dont create the new array then what would happen to the other 5 places as we cant delete length so we will just leave the rest as it is

so the final would be like

[0,1,2,3,4,2,2,3,3,4]

### Relative Order

> **Keep elements in the same sequence as they originally appeared.**
> It does **NOT** mean sorting ascending/descending.

**Example:**
`[5, 5, 8, 8, 2, 2] → [5, 8, 2]` ✅
`[5, 8, 2] → [2, 5, 8]` ❌

**In this problem:** The array is already sorted, so the unique elements remain sorted naturally.
