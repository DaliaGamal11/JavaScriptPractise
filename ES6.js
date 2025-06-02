//swap
let x = 5;
let y = 10;

[x, y] = [y, x];//[a,b]=[2,4] , a , b 
console.log("x:", x); // 10
console.log("y:", y); // 5
/*-------------------------------------------------------------------------------------*/
// Using rest parameter and spread operator return max value from any array  
const getMinMax = (...nums) => {
  return {
    min: Math.min(...nums),
    max: Math.max(...nums)
  };
};

const result = getMinMax(3, 7, 1, 9, 5);
console.log("Min:", result.min); // 1
console.log("Max:", result.max); // 9
/*------------------------------------------------------------------------------------*/
// api methods
const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

//a-test that (every)element in the given array is a string 
const allStrings = fruits.every(fruit => typeof fruit === "string");
console.log("All are strings:", allStrings);
//b. test that (some) of array elements starts with "a" 
const someStartsWithA = fruits.some(fruit => fruit.startsWith("a"));
console.log("Some start with 'a':", someStartsWithA); // true

//c. generate new array (filtered )from the given array with only elements that starts with "b" or "s" 
const filteredFruits = fruits.filter(fruit =>
  fruit.startsWith("b") || fruit.startsWith("s")
);
console.log("Filtered (b or s):", filteredFruits); // ["strawberry", "banana"]

//d. generate new array, each element of the new array contains a string declaring that you like the give fruit element
const likedFruits = fruits.map(fruit => `I like ${fruit}`);
console.log("Liked fruits:", likedFruits);

//e. use forEach to display all elements of the new array from previouse point 
likedFruits.forEach(msg => console.log(msg));


/*------------------------------------------------------------------------*/
/* function that accepts an object with multiple parameters to generate course information and display it. 
assume course information must contains courseName, 
courseDuation, courseOwner only and fire exception when user 
pass properties other that those mentioned above.*/
let createCourseInfo = function(course) {
    let allowedKeys = ["courseName", "courseDuration", "courseOwner"];
    let keys = Object.keys(course); 

    for (let i = 0; i < keys.length; i++) {
        if (!allowedKeys.includes(keys[i])) {
            console.log("Error: Invalid property - " + keys[i]);
            return; // end
        }
    }

    console.log("Course:", course.courseName);
    console.log("Duration:", course.courseDuration);
    console.log("Owner:", course.courseOwner);
};

// PASS
createCourseInfo({
    courseName: "JavaScript",
    courseDuration: "3 hours",
    courseOwner: "eng.arwa"
});

// fail
createCourseInfo({
    courseName: "uml",
    courseDuration: "4 hours",
    courseOwner: "dalia",
    level: "Beginner" //there is no level 
});

