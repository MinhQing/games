
// Welcome to javaScrip


// let name = "my name kou meng hoeung";
// let names = "nice to see u";
// console.log(name + "im from KT" + names);
// // let num1 =10;
// // let num2 = 4;
// // console.log(num1 + num2 "of the number that i want to show u");
// let n =33;
// let ne=33
// console.log(n+ne+" the the number of lucky");
// const result = 10 + 3 * 4;
// console.log(result);
// let number = 33;
// number +=38;
// console.log(number);
// var array= ["kou meng", "ming tang", 12, null];
// array[2] = "meng";
// array[3] = "on type";
// console.log(array[0]);
// const p1 = " meng";
// const p2 = " ou";
// const p3 = " lkhoie";
// console.log( p1);

// function sum(){
//     return 10+40;
// }
// console.log(sum());

// const sum1 = () => {
//     //logic
//     return 18+38;
// }
// console.log(sum1());

// const sum2 =() => 84+94;
// console.log(sum2());

// function sum() {
//     console.log("this is my name.")
//     return 10  + 10;
// }
// console.log(sum());

// function calculate() {
//     // Get the input value
//     var inputElement = document.getElementById("inputNumber");
//     var inputValue = parseFloat(inputElement.value);

//     // Check if the input is a valid number
//     if (isNaN(inputValue)) {
//         document.getElementById("result").textContent = "Please enter a valid number.";
//     } else {
//         // Perform your calculation here
//         var result = inputValue * 2; // Example: doubling the input

//         // Display the result
//         document.getElementById("result").textContent = "Result: " + result;
//     }
// }

        //  const l = [100, 0, 70, 20];
let p = 4;
let o = 0.8;
 
function calculate() {
    // Get values from the input fields
    let input1 = parseFloat(document.getElementById("input1").value) || 0;
    let input2 = parseFloat(document.getElementById("input2").value) || 0;
    let input3 = parseFloat(document.getElementById("input3").value) || 0;
    let input4 = parseFloat(document.getElementById("input4").value) || 0;
 
    // Calculate the result based on the inputs and your formula
    const result = ((input1 + input2 + input3 + input4) / p) * o;
    // Display the result
    document.getElementById("result").textContent = "Result: " + result;
}

     



// const l = [100, 0, 70, 20];
// let p=4;
// let o=0.8;
// function cal(){
//     return ((l[0]+l[1]+l[2]+l[3])/p)*o;
// }
// for(let i=0; i<l.length; i++){
//     document.write();
// }
// document.write("Resule: " + cal() + "<br>");
// // console.log([sum()/p]*o);
// document.write("Winner: ");


// make a obj
// const person = {
//     name: "meng hoeung",
//     age: 21,
//     single: true,
//     // make a function in obj
//     walking: function () {
//         return "i walking at night.";
//     },
//     //make a array in obj
//     array: [18, 83, "meng"],
// };
// console.log(person.walking()


// the best function
// function sum(num1, num2){
//     return num1 * num2;
// }
// const n1 = 20 ;
// const n2 = 20 ;
// console.log(sum(n1,n2));

//=this is the best fu----------------------------

// const myArray = [2002];

// function gussYear(cy,by){
//     return cy - by + " years old";
// }

// const currentYear = 2023;
// const birthYear = 2002;

// console.log(gussYear(currentYear,birthYear));

// const array = [2000];
// function calulateYear(i1, i2){
//     return i1 - i2 + " years old";
// }
// const put1 = 2023;
// const put2 = array[0];

// console.log(calulateYear(put1, put2));

// make a obj
// const person = {
//     name: "meng hoeung",
//     age: 21,
//     single: true,
//     // make a function in obj
//     walking: function () {
//         return "i walking at night.";
//     },
//     //make a array in obj
//     array: [18, 83, "meng"],
// };
// console.log(person.walking()

//this is we make obj in array
// const array = [
//     { id:1, name:"menglksjd;oigjaosidj", age:21 },
//     { id:2, name:"meng", age:21 },
//     { id:3, name:"meng", age:21 }
// ];
// console.log(array[0].name);
//this is a obj make by different way or keyword
// const obj = new Object();
// obj.name="meng";
// obj.age=21;
// obj.single=true;
// obj.teaching = function teaching(){
//     return "l dont know";
// }
// console.log(obj.single);

// conditional statment
// >, <, >=, <=, ==, ===, !, !==
// if, eles if , else

// if (false){
//     console.log("Hello my love");
// }
// else if(false){
//     console.log("my meng is meng");
// }
// else {
//     console.log("this is true");
// }

// const number1= 10;
// const number2= 1;
// const result = number2!==number1;
// if (result){
//     console.log("this is true");
// }
// else{
//     console.log("this is fales");
// }
// let me = 12;
// var us = 13;
// const we = 14;
// if(true){
//     console.log(me);
//     console.log(us);
//     console.log(we);
// }

// const students = 1;

// switch(students){
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//        console.log("three");
//        break;
// }

//while loop
// let num =3;
// while (num > 0){
//     console.log("hello");
//     num--;
// }



//do while loop
// let my = 10;
// do {
//     console.log("hello");
//     my--;
// }while (my > 0);

//for loop

// for (let i=0; i < 10; i++){
//     console.log("hello");
// }

// const array= ["a", "b", "c", "d"];
// for (let i = 0; i<array.length; i++ ){
//     console.log(array.length);
// }


//string properties and methods
// const text =  "Hello Menghoueng";

// console.log(text.length);
// console.log(text.toUpperCase())
// console.log(text.charAt(text.length -1));

// Array + Function + loop

// const num1 = [12, 8, 38];
// const num2 = [29, 48, 32];

// function cal(array){
//     for (let i=0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// cal(num1);

// const person1 = [19, 22, 33, 1];

// function (){
    
// }


// const l = [100, 0, 70, 20];
//         let p = 4;
//         let o = 0.8;

//         function calculateAndFindNearest() {
//             // Get values from the input fields
//             let input1 = parseFloat(document.getElementById("input1").value) || 0;
//             let input2 = parseFloat(document.getElementById("input2").value) || 0;
//             let input3 = parseFloat(document.getElementById("input3").value) || 0;
//             let input4 = parseFloat(document.getElementById("input4").value) || 0;

//             // Calculate the sum of the input values
//             const inputSum = input1 + input2 + input3 + input4;

//             // Find the nearest value in the array
//             let nearestValue = l[0];
//             let minDifference = Math.abs(inputSum - nearestValue);

//             for (let i = 1; i < l.length; i++) {
//                 const difference = Math.abs(inputSum - l[i]);
//                 if (difference < minDifference) {
//                     nearestValue = l[i];
//                     minDifference = difference;
//                 }
//             }

//             // Calculate the result based on the nearest value
//             const result = (nearestValue / p) * o;

//             // Display the nearest value and the calculated result
//             document.getElementById("result").textContent = "Result: " + result;
//             document.getElementById("nearestValue").textContent = "Nearest Value: " + nearestValue;
//         }