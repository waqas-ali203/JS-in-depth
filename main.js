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

// let arr = [20 , 34 , 56, 78, 90]

// let reverseArr = [];

// for (let i = arr.length-1; i >=0 ; i--){
//     reverseArr.push(arr[i]);
// }
// console.log(reverseArr)

// DAY 6 — Objects Core

// let car = {
//     name: "Sonata",
//     start: function () {
//         console.log("Car start");
//     }
// };

// car.start();

// Create an object person with: name age Use this keyword inside a method to print the person's name.

// let person = {
//     name: "Waqas",
//     age: 24,
//     showName: function () {
//         console.log(this.name);
//     }
// };

// person.showName();

// Create an object and print all its keys & values & entries

// let person = {
//     name: "Waqas",
//     age: 24,
//     city: "Faisalabad"
// };

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// Create an object representing a product and use for...in to print: key : value for every property.

// let person = {
//     name: "Waqas",
//     age: 24,
//     city: "Faisalabad"
// };

// for (const key in person) {
// console.log(key + " : " + person[key]);}

// DAY 7 — ES6 Deep Concepts + Advanced Objects

// Create an array of 4 fruits and use array destructuring to store first and second fruit in variables.

// let fruits = ["Apple" , "Banana" , "Mango" , "Melon"]
// let [first , second] = fruits;
// console.log(first)
// console.log(second)

// Create two arrays and merge them using spread operator.

// let arr1 = [1,2,3,4]
// let arr2 = [5,6,7,8]
// let merge = [...arr1, ...arr2]
// console.log(merge)

// Write a function that accepts unlimited numbers using rest operator and returns their sum.

// function sum(...number){
//     let total = 0;

//     for (const value of number) {
//         total += value
//     }
//     return total;
// }

// console.log(sum(10,20,30,40));

// Create a nested object and safely print city using optional chaining.

// let user = {
//     name : "Waqas Ali",
//     age : 23,
//     adress : {}
// }
// console.log(user?.adress?.city);

// If user name is null, print "Anonymous User" using nullish coalescing.

// let username = null;

// console.log(username ?? "Anonymous User")

// DAY 8 — Array of Objects (Most Important for Real Projects)

// Create an array of 3 student  Print all student names using map().

// let students = [
//   { Name: "Waqas", Age: 23 },
//   { Name: "Ali", Age: 24 },
//   { Name: "ammar", Age: 18 },
// ];

// let names = students.map((std) => std.Name);
// console.log(names);

// Create an array of users and return only active users.

// let users = [

//  {
//   id:1,
//   name:"Ali",
//   active:true
//  },

//  {
//   id:2,
//   name:"Waqas",
//   active:false
//  },

//  {
//   id:3,
//   name:"Ammar",
//   active:true
//  }

// ];

// let activeUsers = users.filter((user) => user.active)
// console.log(activeUsers)

// Use chaining to: Filter employees with salary > 50000 Then return only their names

// let users = [

//  {
//   id:1,
//   name:"Ali",
//   active:true,
//   salary : 30000
//  },

//  {
//   id:2,
//   name:"Waqas",
//   active:false,
//   salary : 70000
//  },

//  {
//   id:3,
//   name:"Ammar",
//   active:true,
//   salary : 80000
//  }
// ]

// let usernames = users.filter((user) => user.salary >= 50000).map((value) => value.name)
// console.log(usernames)

// Create an array of courses and return course names in uppercase using map().

// let courses = ["html", "css", "javascript"];

// let upperCourses = courses.map(course => course.toUpperCase());

// console.log(upperCourses);

// DAY 9 — DOM INTRODUCTION (FULL FOUNDATION)

// Create a heading and change its text using innerText.

// let name = document.getElementById("heading");
// name.innerText = "I am Ali";
// console.log(name)

// Select a div and change its background color using JS.

// let colors = document.getElementById("main");
// colors.style.backgroundColor = 'red'

// Create a button dynamically using createElement().

// let button1 = document.createElement('button');
// button1.innerText = 'Click Me!';
// document.body.appendChild(button1)

// let list = document.createElement("ul")
// let item1 = document.createElement("li")
// item1.innerText = "Apple"
// let item2 = document.createElement("li")
// item2.innerText = "Mango"
// let item3 = document.createElement("li")
// item3.innerText = "Banana"

// list.appendChild(item1)
// list.appendChild(item2)
// list.appendChild(item3)

// document.body.appendChild(list)

// list.removeChild(item2)

// Build a mini “Add item to list” logic.

// function Addtask(){
//  let user = document.getElementById("userValue");
//  let list = document.getElementById("tasklist");
//  let li = document.createElement("li");
//  li.innerText = user.value;

//  list.appendChild(li)
//   }

// DAY 10 — DOM EVENTS (REAL INTERACTION SYSTEM)

// Create a button and print: Button Clicked when clicked.

// let btn = document.getElementById("button1");
// btn.addEventListener("click", function(){
//     console.log("Button clicked")
// })

// Create an input field and print typed value using input event.

// let input = document.getElementById("userValue");
// input.addEventListener("input", function(){
//     console.log(input.value)
// })

// Create a button that changes heading text when clicked & changes background color

// let btn = document.getElementById("button1");
// btn.addEventListener("click", function(){
//     btn.innerText = "Clicked button";
//     document.body.style.backgroundColor = 'red'
// })

// Create a mini counter: Increment button  Decrement button Display count on screen using DOM events.

// let miniCounter = document.getElementById("count");
// let btn1 = document.getElementById("button-increment");
// let btn2 = document.getElementById("button-decrement");

// btn1.addEventListener("click", function(){
//     miniCounter.innerText = Number(miniCounter.innerText) + 1;
// })
// btn2.addEventListener("click", function(){
//     miniCounter.innerText = Number(miniCounter.innerText) - 1;
// })

// DAY 11 — LOCAL STORAGE + JSON (REAL WORLD DATA SAVE SYSTEM)

// Store your name in localStorage and retrieve it.

// let user = {
//   name: "Waqas",
//   age: 23,
// };

// localStorage.setItem("user", JSON.stringify(user));
// let storeItem = JSON.parse(localStorage.getItem("user"));
// console.log(storeItem);
// console.log(storeItem.name)

// Store an array of 3 hobbies in localStorage.

// let hobbies = ["cricket", "play", "football"]

// localStorage.setItem("hobbies", JSON.stringify(hobbies));
// let filterHobby = JSON.parse(localStorage.getItem("hobbies"));
// console.log(filterHobby);
// console.log(filterHobby[1])

// Delete a specific key from localStorage.

// let user = {
//   name: "Waqas",
//   age: 23,
//   class: "BS Software Engineering"
// };

// localStorage.setItem("user", JSON.stringify(user));
// localStorage.clear()

// // localStorage.removeItem("user");

// DAY 12 — FORM HANDLING + VALIDATION (REAL WORLD WEB CORE)

// let form =
// document.getElementById("form");

// form.addEventListener(
//   "submit",
//   function(e){

//     e.preventDefault();

//     let name =
//     document.getElementById("name").value;

//     let email =
//     document.getElementById("email").value;

//     let msg =
//     document.getElementById("msg");

//     if(name === "" || email === ""){

//       msg.innerText =
//       "All fields required";

//       msg.style.color = "red";

//     }

//     else if(!email.includes("@")){

//       msg.innerText =
//       "Invalid email";

//       msg.style.color = "red";

//     }

//     else{

//       msg.innerText =
//       "Form submitted successfully";

//       msg.style.color = "green";

//     }

//   }
// );

// DAY 13 — PROMISES DEEP DIVE (ASYNC FOUNDATION)

// Print "Hello" after 2 seconds.

// setTimeout(() =>{
//     console.log("Hello")
// },2000)

// Print numbers 1–5 using setTimeout.
// for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }

// Create interval that prints "Hi" every second and stop after 5 second.

// let timer = setInterval(() =>{
//     console.log('HI')
// },1000)

// clearInterval(timer)

// setTimeout(() =>{
//     clearInterval(timer)
// },5000)

// Build mini timer (start → stop using interval).

// let count = 0;
// let interval = null;

// let timer = document.getElementById("timer");
// let startBtn = document.getElementById("timer-start");
// let stopBtn = document.getElementById("timer-stop");

// startBtn.addEventListener("click", () => {
//     if (interval) return;

//     interval = setInterval(() => {
//         timer.innerText = count;
//         count++;
//     }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//     clearInterval(interval);
//     interval = null;
// });

// DAY 14 — PROMISES (REAL MODERN JAVASCRIPT CORE)

// Create a promise that resolves "Hello".

// let promise = new Promise((resolve, reject) => {
//     console.log("Hello");
//     resolve("Done")
// })

// promise.then((result) =>{
//     console.log(result)
// })

// Chain 3 promises step by step.

// function step1(){
//     return Promise.resolve("Done step1")
// }
// function step2(){
//     return Promise.resolve("Done step2")
// }
// function step3(){
//     return Promise.resolve("Done step3")
// }

// step1().then((result)=>{
//     console.log(result);
//     return step2()
// }).then((result)=>{
//     console.log(result);
//     return step3()
// })
// .then((result)=>{
//     console.log(result);
// })

// Convert callback example into promise.

// function getFood(){
//     return new Promise((resolve, reject) => {
//         resolve("Food delivered");
//     })
// }

// getFood().then((result) =>{
//     console.log(result)
// }).catch((error) =>{
//     console.log(error)
// })

// Simulate API call using Promise + setTimeout.

// function fakeApiCall() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve("User data received");
//         }, 2000);

//     });
// }
// fakeApiCall()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Build mini system: login promise , fetch user data promise ,display result

// function userLogin() {
//   return new Promise((resolve, reject) => {
//     resolve("User login");
//   });
// }

// function fetchApi() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("User data Fetch");
//     }, 2000);
//   });
// }

// userLogin()
//   .then((data) => {
//     console.log(data);
//     return fetchApi();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// DAY 15 — async/await (MODERN JS STANDARD)

// Create async function returning "Hello" with 2-second delay function.

// function delay() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("2 seconds done");
//         }, 2000);
//     });
// }

// async function run() {
//     console.log("Start");

//     let result = await delay();
//     console.log(result);
//     setTimeout(()=>{
//         console.log("End");
//     },1000)
// }

// run();

// Implement retry system (3 attempts).

// function api() {
//   return new Promise((resolve, reject) => {
//     let success = Math.random() > 0.7;
//     setTimeout(() => {
//       if (success) {
//         resolve("Success");
//       } else {
//         reject("Fail");
//       }
//     }, 1000);
//   });
// }

// async function retryApi(retries = 3) {
//   for (let i = 1; i <= retries; i++) {
//     try {
//       let result = await api();
//       console.log(result);
//       return;
//     } catch (error) {
//         console.log(`Failed ${i} Attempet`)
//     }
//   }
//   console.log("All Fetch Try failed")
// }

// retryApi();


// DAY 16 — FETCH API (REAL WORLD DATA FETCHING)

Fetch a single post from API.