// 1. Favorite foods array
let foods = ["Pizza", "Burger", "Pasta", "Ice Cream", "Sushi"];

// Add one to beginning and end
foods.unshift("Sandwich"); // beginning
foods.push("Steak"); // end

// Remove the second item
foods.splice(1, 1);

console.log("Foods:", foods);


// 2. Numbers operations
let nums = [1, 2, 3, 4, 5];

// Square all numbers
let squared = nums.map(num => num * num);

// Filter numbers > 10
let filtered = squared.filter(num => num > 10);

// Sum using reduce
let sum = filtered.reduce((acc, num) => acc + num, 0);

console.log("Squared:", squared);
console.log("Filtered (>10):", filtered);
console.log("Sum:", sum);


// 3. Sort and reverse names
let names = ["Ali", "Zara", "John", "Emma", "David"];

// Sort alphabetically
names.sort();

// Reverse
names.reverse();

console.log("Sorted & Reversed Names:", names);


// 4. Students array
let students = [
  { name: "Ali", score: 75 },
  { name: "Sara", score: 85 },
  { name: "John", score: 90 },
  { name: "Mina", score: 60 }
];

// Find first student with score > 80
let topStudent = students.find(student => student.score > 80);

// Check if all scores > 50
let allPassed = students.every(student => student.score > 50);

console.log("First student >80:", topStudent);
console.log("All passed (>50):", allPassed);


// 5. Combine arrays and destructure
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Combine using spread
let combined = [...arr1, ...arr2];

// Destructure first two elements
let [first, second, ...rest] = combined;

console.log("Combined:", combined);
console.log("First:", first);
console.log("Second:", second);


// 6. Bonus: Average function using reduce
function getAverage(numbers) {
  if (numbers.length === 0) return 0;

  let total = numbers.reduce((acc, num) => acc + num, 0);
  return total / numbers.length;
}

console.log("Average:", getAverage([10, 20, 30, 40]));