// DAY 1 — JS Fundamentals Reset


// Write a program that stores your name, age and city in variables and prints them.

// let name = "Waqas Ali";
// let age = 24;
// let city = "Faisalabad";

// console.log("Name",name);
// console.log("Age",age);
// console.log("City",city);


// Write a program that stores age as a string and converts it into a number.

// let age = "24";
// let newAge = Number(age);

// console.log("New Age is", newAge + 2)


// Write a program that uses a template literal to print:

// "My name is ___ and I live in ___"


// let name = "Waqas Ali";
// let city = "Faisalabad";

// console.log(`My name is ${name}  and I live in ${city}`);


// DAY 2 — Control Flow Mastery


// Write a program that checks whether a person's age is eligible for voting or not.

// let age = 18;

// if (age >= 18){
//     console.log("You are eligible for vote")
// }
// else {
//     console.log("You are not eligible for vote")
// }


// Write a program using switch statement that prints the month name for values 1 to 12.

// let month = 6;

// switch (month) {
//     case 1:
//         console.log("Jan")
//         break;
//     case 2:
//         console.log("Feb")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("April")
//         break;
//     case 5:
//         console.log("May")
//         break;
//     case 6:
//         console.log("June")
//         break;
//     case 7:
//         console.log("July")
//         break;
//     case 8:
//         console.log("Aug")
//         break;
//     case 9:
//         console.log("Sep")
//         break;
//     case 10:
//         console.log("Oct")
//         break;
//     case 11:
//         console.log("Nov")
//         break;
//     case 12:
//         console.log("Dec")
//         break;

//     default:
//         console.log("Invalid Month")
//         break;
// }



// Write a program using a for loop to print numbers from 1 to 20.

// for(i=1; i<=20; i++){
//     console.log(i)
// }


// Write a program using a while loop to print numbers from 10 down to 1.

// let i =10;

// while (i>=1) {
//     console.log(i)
//     i--;
// }


// Write a program that prints numbers from 1 to 20 but skips number 10 .

// for (let i = 0; i <=20; i++) {
    
//     if(i==10){
//         continue;
//     }
//     console.log(i);
// }



// DAY 3 — Functions Core

// Write a function declaration that prints your name.

// function greet(){
//     console.log("Waqas ali")
// }

// greet();


// Write a function expression that prints "JavaScript Learning".

// const Learning = function(){
//     console.log("Javascript Learning")
// }

// Learning();


// Write an arrow function that takes a number and returns its square.

// function Square(number) {
//     console.log(number * number)
// }

// Square(5);


// Create a global variable called country and print it inside a function.

// let country = "Pakistan";

// function greet(){
//     console.log(country)
// }

// greet();



// Create a block scope variable inside an if statement and print it inside the block.

// let age = 10;

// if (age === 10){
//     let discount = 23;
//     console.log(age + discount)
// }
// console.log(age)


// Create an arrow function that takes age as a parameter and returns:

// const Year = (age) => {
//     if(age >= 18){
//         console.log("Adult")
//     }
//     else{
//         console.log("Young")
//     }
// }
// Year(18);


// DAY 4 — Arrays Basics

// Write a program that creates an array of 5 favorite fruits and prints the second fruit.

// let fruits = ["Apple", "Banana", "Mango"]
// console.log(fruits[1])


// Write a program that adds a new Fruit name at the end of an array.

// let fruits = ["Apple", "Banana", "Mango"]
// fruits.push("Stawbery");
// console.log(fruits)


// Write a program that creates a new array containing only the first 3 items of an existing array

// let cities = ["Faisalabad", "Multan", "Lahore", "Islamabad", "Rawalpindi"]
// let newcities = cities.slice(0,3)
// console.log(newcities)

// Write a program that removes one city from the middle of an array

// let cities = ["Faisalabad", "Multan", "Lahore", "Islamabad", "Rawalpindi"]
// let newcities = cities.splice(2,1)
// console.log(newcities)

// Write a program that prints all cities names from an array.

// let cities = ["Faisalabad", "Multan", "Lahore", "Islamabad", "Rawalpindi"]

// for( i=0; i<= cities.length; i++){
    //     console.log(cities[i])
    // }
    
    
    // Write a program that prints all city names from an array using a for...of loop.
    
    // let cities = ["Faisalabad", "Multan", "Lahore", "Islamabad", "Rawalpindi"]

    // for (const name of cities) {
    //     console.log(name)
    // }



// DAY 5 — Advanced Arrays

// Write a program that doubles all numbers in an array using map().

// let arr = [23,34,44,6,87]

// let result = arr.map((double) => double * 2)

// console.log(result)


// Write a program that returns only odd numbers from an array using filter().

// let arr = [23,34,44,6,87]
// let oddNum = arr.filter((odd) => odd % 2 ==! 0 )
// console.log(oddNum)



// Write a program that prints all employee names using forEach().

// let employe = ["Waqas", "Ali", "Umer", "Usman"]

// let result = employe.forEach((value) => {

//     console.log(value)
// })


// Write a program that filters numbers greater than 50 and then doubles them using method chaining.


// let arr = [20 , 34 , 56, 78, 90]
// let result = arr.filter((value) => value>50).map((value) => value *2)
// console.log(result)


// Write a program that reverses an array manually without using reverse().

let arr = [20 , 34 , 56, 78, 90]

let reverseArr = [];

for (let i = arr.length-1; i >=0 ; i--){
    reverseArr.push(arr[i]);
}
console.log(reverseArr)