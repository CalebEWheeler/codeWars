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