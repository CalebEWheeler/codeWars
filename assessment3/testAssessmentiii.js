// function isNegative(num) {
//     if (num >= 0) {
//         return false;
//     } else if (num < 0) {
//         return true;
//     }
// }
//
// function isTen(num) {
//     if (num !== 10) {
//         return false;
//     } else {
//         return true;
//     }
// }
//
// function double(num) {
//     return num * 2;
// }

// come back to it
function remove9s(num) {
    for(var i=num.length-1; i<=num.length;i--) {
        //     if (num[i]===9) {
        //     console.log(num.splice(i,1))
        //     console.log(num)
        // }
    }
}
console.log(remove9s([9,9,9]))


// function average(nums) {
//     for (var i=0; i<nums.length; i++) {
//         var sum = nums.reduce((a, b) => a + b, 0)
//     }
//     return sum/nums.length;
// }
//
// function countOdds(num) {
//     var odds = 0;
//     for (var i=0; i<num.length; i++) {
//
//         if (num[i] %2 !== 0) {
//             odds++
//         }
//         else {
//             continue;
//         }
//     }
//     return odds;
// }

//come back to it
//Write a function named averageSales that accepts an array of objects where each
// object represents a person, and has a sales property. The function should return
// the average of every object's sales property.
// function averageSales() {
//     var people = [
//         {name: 'Jim Halpert', sales: 100},
//         {name: 'Dwight Schrute', sales: 50},
//         {name: 'Andy Bernard', sales: 150},
//     ];
//     console.log(people.sales.length)
// }

//CAME BACK AND COMPLETED
// function convertNameToObject(string) {
//     var stringSplit = string.split(" ");
//     var object = {firstName: stringSplit[0], lastName: stringSplit[1]}
//     return object;
// }

// function countVowels(string) {
//     var vowels = 'aeiouAEIOU';
//     var count = 0;
//     for (var i=0; i<string.length; i++) {
//         if (vowels.indexOf(string[i]) !== -1) {
//             count++;
//         }
//     }
//     return count;
// }
//
// function analyzeWord(string) {
//     var object = {
//         numberOfLetters: string.length,
//         numberOfVowels: countVowels(string),
//         word: string,
//     }
//
//     return object;
// }
//CAME BACK AND COMPLETED
// function capitalizeName(string) {
//     var stringSplit = string.split(" ");
//     var object = {firstName: stringSplit[0], lastName: stringSplit[1]}
//     var fullName = ''
//
//     fullName += object.firstName[0].toUpperCase() + object.firstName.slice(1) + ' ' + object.lastName[0].toUpperCase() + object.lastName.slice(1)
//     return fullName
// }

