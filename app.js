// Chapter 31 to 34          //  Date & Time

// // q 01
// var dObj = new Date();

// console.log(dObj);


// // q 02
// var dObj = new Date();

// var dStr = dObj.toString();

// console.log(dStr);


// // q 03
// var d = new Date().getDay();

// console.log(d);


// // q 04
// var daysArr = ["sunday","monday","tuesday","wednesday","thursday","friday"];

// var day = new Date();

// console.log(daysArr[day.getDay()]);


// // q 05
// var date = new Date();

// var year = date.getFullYear();

// var month = date.getMonth() + 1;

// var hours = date.getHours();

// var minute = date.getMinutes();

// var second = date.getSeconds();

// var milliSeecond = date.getMilliseconds();

// var day = date.getDay();


// // q 06
// var lastDay = new Date('2020 Dec 31');

// console.log(lastDay);


// // q 07
// var lastDay = new Date('1992 Feb 02');

// console.log(lastDay);


// // q 08
// // var milli = new Date().getTime();
// var before = new Date('1980 01 01');

// console.log(before.getTime());


// // q 09
// var changeYear = new Date();

// changeYear.setFullYear(2025,9,14)

// // changeYear = new Date("2025 10 14")

// console.log(changeYear);


// // q 10
// function monthChange(date){
//   date.setMonth(0);

//   return date;
    
// }
// var d = new Date();
// var update = monthChange(d);

// console.log(update);


// // q 11
// function minuteChange(date){
//     var newMinutes = +prompt("Enter New Minutes 0 to 60");

//     if(newMinutes >=0 && newMinutes<60){
//          date.setMinutes(newMinutes);
//     }
//     else{
//         alert("Invalid Input: Please Enter a 0-59 Number")
//     }
//     return date;
// }
// var d= new Date();
// var update = minuteChange(d);

// console.log(update);

// // q 12
// var dayWeek = new Date().setMonth(2020,10,14);
// console.log(dayWeek);

// q 13
// pending
// q 14
// function ageCalc(){

// }






// Chapter 35 to 37       // Functions

// q 01
function simple(){
    alert("Function Call..")
}

simple()


// q 02
// function user(user){
// var userName = user;    
//  console.log(userName);
// }

// user(prompt("Enter Name"))


// q 03
function user(user){
    console.log(user);
}

user(10)
user(10)


// q 04
function user(user){
    console.log(user);
}

user(prompt("Enter Name"))


// q 05
function concat(a,b,c){
    console.log(a+b+c);
    
}
concat(10,"adnan",20)


// q 06
function concatinate(a,b){
    result = a+b;
}
concatinate("20","adnan");

console.log(result);



// q 07
function multiply(a,b,c){
    result = a*b*c;
}

multiply(20,4,3)
console.log(result);


// q 08
var arr = [1,2,3,4,5,6,7,8,9]
function arrNum(arr){
    return arr;
}

var update = arrNum(arr);
console.log(update);


// q 09
function sum(a,b){
    var a = 10, b = 20;
    result = a+b;

    return result;
}
console.log(update = sum(result));


// q 10








