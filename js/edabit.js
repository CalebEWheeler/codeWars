// <==========================          first problem          ==========================>

//Write a function that takes an integer minutes and
//converts it to seconds.
function convert(minutes) {
    return minutes*60;
}

// <==========================          second problem          ==========================>

//Create a function that takes length and width and
//finds the perimeter of a rectangle.
function findPerimeter(length, width) {
    return (length *2) + (width *2)
}

// <==========================          third problem          ==========================>

//In this challenge, you must verify the equality of
//two different given parameters: a and b.
function checkEquality(a, b) {
    return a === b
}

// <==========================          fourth problem          ==========================>

//Create a function that returns true when num1 is
//equal to num2; otherwise return false.
function isSameNum(num1, num2) {
    if (num1 !== num2) {
        return false;
    } else {
        return true;
    }
}

// <==========================          fifth problem          ==========================>

//Create a function that takes a number as an argument,
//	increments the number by +1 and returns the result.
function addition(num) {
    num++
    return num
}

// <==========================          fifth problem          ==========================>

//Fix the code in the code tab to pass this challenge
//(only syntax errors). Look at the examples below to
//get an idea of what the function should do.
function squared(b) {
    return b * b
}

// <==========================          sixth problem          ==========================>

//chickens = 2 legs
//cows = 4 legs
//pigs = 4 legs
//The farmer has counted his animals and he gives you a subtotal for each
//    species. You have to implement a function that returns the total number
//of legs of all the animals.
function animals(chickens, cows, pigs) {
    return ((chickens * 2) + (cows * 4) + (pigs * 4))
}

// <==========================          seventh problem          ==========================>

//The && operator will only return true for true && true.
//Make a function using the && operator.
function and(a, b) {
    return a && b
}

// <==========================          eigth problem          ==========================>
//Create a function that takes the number of wins, draws and losses
//and calculates the number of points a football team has obtained so far.
//wins get 3 points
//draws get 1 point
//losses get 0 points
function footballPoints(wins, draws, losses) {
    return ((wins*3)+(draws*1)+(losses*0))
}

// <==========================          ninth problem          ==========================>
//Given two integers, a and b, return true if a can be divided evenly by b.
//Return false otherwise.
function dividesEvenly(a, b) {
    return a %b === 0
}

// <==========================          tenth problem          ==========================>
//Create a function that finds the maximum range of a triangle's third edge, '
//+ 'where the side lengths are all integers.
//(side1 + side2) - 1 = maximum range of third edge.
//The side lengths of the triangle are positive integers.
//Don't forget to return the result.
function nextEdge(side1, side2) {
    return ((side1 + side2)-1)
}

// <==========================          eleventh problem          ==========================>
//Write a function that searches an array of names (unsorted) for the name
//"Bob" and returns the location in the array. If Bob is not in the array,
//return -1.
var names = ['Chris', 'James', 'Bob', 'Geoffrey'];


// <==========================         twelfth problem          ==========================>
//Create a function that takes a
//string and returns it as an integer.
function stringInt(str) {
    return parseInt(str);
}

// <==========================         twelfth problem          ==========================>
//Create a function that takes two strings as arguments
//and returns the number of times the first string
//(the single character) is found in the second string.
//Create a function that takes two strings as arguments
//and returns the number of times the first string
//(the single character) is found in the second string.
function charCount(myChar, str) {
    var counter = 0
    for(var i=0; i<str.length; i++)
        if (str.charAt(i) === myChar) {
            counter++
        }
    return counter;
}
// <==========================         thirteenth problem          ==========================>

//There is a single operator in JavaScript, capable of
//providing the remainder of a division operation.
//Two numbers are passed as parameters.
//The first parameter divided by the second parameter
//will have a remainder, possibly zero. Return that value.
// function remainder(x, y) {
//     return x%y;
// }

// <==========================         fourteenth problem          ==========================>


//Write a function that takes two integers (hours, minutes),
//	converts them to seconds, and adds them.
function convert(hours, minutes) {
    var hoursToSeconds = 60*(hours*60);
    var minutesToSeconds = minutes*60;
    return hoursToSeconds + minutesToSeconds
}

//prac test functions
// function remove9s(num) {
//     for (var i = 0; i < num.length; i++) {
//         if (num.includes(9)) {
//             var index = num.indexOf(9)
//             num.splice(index, 1)
//             return i;
//         } else {
//             return num;
//         }
//     }
// }
// console.log(remove9s([7, 8, 9, 10]))

// function capitalizeName(firstName, lastName) {
//     // var firstLetter = firstName.charAt(0);
//     var fullName = '';
//     return ((firstName.charAt(0).toUpperCase() + firstName.slice(1))+ '' )
//         // + (lastName.charAt(0).toUpperCase() + slice(1)))
// }
// console.log(capitalizeName('ron weasley'))

// function average(arr) {
//     var total = 0;
//     for (var i=0; i<arr.length; i++) {
//         total += arr[i];
//     }
//     var avg = total/arr.length
//     return avg
//
// }
// console.log(average([1,2,3]))

// Write a function to take in an integer and write the factors of that integer to the webpage.
//Roberto's Solution
let getFactors = function (input) {
    let answerArray = [];
    for (let i = 1; i <= input; i++) {
        if (input % i === 0) {
            answerArray.push(i);
        }
    }
    return answerArray.join("<br>");
}
//Mike T's Solution
function factors(arr){
    var theFactors = [];
    if (Array.isArray(arr)){
        for (var i = 0; i < arr.length; i++){
            if (Number.isInteger(arr[i])){
                for (var n = 1; n <= arr[i]; n++){
                    if (arr[i] % n === 0){
                        theFactors.unshift(n);
                        // continue
                    }
                }
            }
        }
    }
    console.log(theFactors);
}
factors([10,9,100]);