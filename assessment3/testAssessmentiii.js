function isNegative(num) {
    if (num >= 0) {
        return false;
    } else if (num < 0) {
        return true;
    }
}

function isTen(num) {
    if (num !== 10) {
        return false;
    } else {
        return true;
    }
}

function double(num) {
    return num * 2;
}

//come back to it
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
// remove9s([7, 8, 9, 10])
//come back to it

function average(nums) {
    for (var i=0; i<nums.length; i++) {
        var sum = nums.reduce((a, b) => a + b, 0)
    }
    return sum/nums.length;
}

function countOdds(num) {
    var odds = 0;
    for (var i=0; i<num.length; i++) {

        if (num[i] %2 !== 0) {
            odds++
        }
        else {
            continue;
        }
    }
    return odds;
}

//come back to it
//Write a function named averageSales that accepts an array of objects where each
// object represents a person, and has a sales property. The function should return
// the average of every object's sales property.
// function averageSales(arr) {
//     var people = [
//         {name: 'Jim Halpert', sales: 100},
//         {name: 'Dwight Schrute', sales: 50},
//         {name: 'Andy Bernard', sales: 150},
//     ];
//     people.forEach(function(sale,i) {
//         var sum = nums.reduce((a, b) => a + b, 0)
//         return sum;
//     })
// }

// averageSales([
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ])
// // 100

//come back to it
//Write a function named convertNameToObject that accepts a string that contains a
// first name and last name separated by a space character, and returns an object
// with properties firstName and lastName.
function convertNameToObject(first, name) {

}
// convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}

function countVowels(string) {
    var vowels = 'aeiouAEIOU';
    var count = 0;
    for (var i=0; i<string.length; i++) {
        if (vowels.indexOf(string[i]) !== -1) {
            count++;
        }
    }
    return count;
}

function analyzeWord(string) {
    var object = {
        numberOfLetters: string.length,
        numberOfVowels: countVowels(string),
        word: string,
    }

    return object;
}
//come back to it
//Write a function named capitalizeName that accepts a string that is a first and last
// name separated by a space, and returns a string that that has the first and last
// names capitalized.
//
// For this problem, you may assume that the function will only ever be called with a
// string that has two words separated by a single space.
function capitalizeName(firstName, lastName) {
    var first = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    var last = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    var fullName = '';

    return fullName += first

}
// capitalizeName('ron weasley') // "Ron Weasley"
// capitalizeName('Harry Potter') // "Harry Potter"
// capitalizeName('Nathan drake') // "Nathan Drake"