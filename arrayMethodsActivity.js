// Task 1: Use concat() to join two arrays
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArray = arr1.concat(arr2);
console.log("Combined array using concat():", combinedArray);
// Task 2: Use push() to add an element "Kiwi" to the array fruits
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Array after push('Kiwi'):", fruits);
// Task 3: Use unshift() to add two numbers 4 and 5 to the beginning of the array1
let array1 = [1,2,3];
array1.unshift(4,5);
console.log("Array1 (unshift 4 and 5):", array1);
//Task 4: Use pop() to remove the last element from the fruits array
fruits.pop();
console.log("Fruits Array (after pop):", fruits );
//Task 5: Use shift() to remove the last element from the fruits array
let array2 = [1,2, 3];
array2.shift();
console.log("Array2 (after shift):", array2);
//Task 6: Use sort() to sort the fruits array alphabetically 
fruits.sort()