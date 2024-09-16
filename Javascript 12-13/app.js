let input = 'A';  // You can replace 'A' with other test values.
let ascii = input.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log("The input is a number.");
} else if (ascii >= 65 && ascii <= 90) {
    console.log("The input is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
    console.log("The input is a lowercase letter.");
} else {
    console.log("The input is neither a number nor a letter.");
}


// 2

var num1 = (prompt("Enter the first number:"));
var num2 = (prompt("Enter the second number:"));

if (num1 > num2) {
    console.log(num1 + " is larger.");
} else if (num2 > num1) {
    console.log(num2 + " is larger.");
} else {
    console.log("Both numbers are equal.");
}

// 3//

var number = (prompt("Enter a number:"));

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// 4//

var char = prompt("Enter a character:").toLowerCase();
var vowels = ['a', 'e', 'i', 'o', 'u'];

if (vowels.includes(char)) {
    console.log(true);  // It's a vowel
} else {
    console.log(false); // Not a vowel
}

// 5//

var correctPassword = "myPassword123";  // Store the correct password
var userPassword = prompt("Enter your password:");

if (userPassword === "") {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}

//6//


var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);  // This will output "Good day" since hour is 13


//7//

let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));

if (time >= 0 && time < 1200) {
    console.log("Good Morning! The time is " + (time === 0 ? 12 : time / 100) + " AM.");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon! The time is " + ((time - 1200) / 100 || 12) + " PM.");
} else if (time >= 1700 && time <= 2359) {
    console.log("Good Evening! The time is " + ((time - 1200) / 100 || 12) + " PM.");
} else {
    console.log("Invalid time input.");
}
