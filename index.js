//Only Odds
console.log("Only Odds")

const array = [2, 4, 6, 8, 11, 20, 15, 22]; // input array that will change
const oddnum = [] // variable that will call the odd numbers in the array

for (let i = 0; i < array.length; i++) { // for loop that counts the index of the array
    const num1 = array[i]; // the array output will be save in variable num1
    if (num1 % 2 === 1) { // takes the modulus of the array and if the remainder is 1 then it is odd
        oddnum.push(num1) // pushes all the odd values in the array to variable oddnum
    }
}
console.log(oddnum) // prints the odd values

//Vowel vs Consonant
console.log("Vowel vs Consonant")

const word1 = "hello" // input array that will change
let vowels = 0 // variable vowels
let consonants = 0 // variable vowels

for (let i = 0; i < word1.length; i++) { //for loop that counts the index of the array
    const char = word1[i];// seeting the index equal to the variable char 
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") { // counts if "aeiou" is in the index of word1
        vowels++ //counts the vowels found in the array word1
    }
    else {
        consonants++ //counts the left over index in array word1
    }
}
console.log(word1 + " has " + consonants + " consonants and " + vowels + " vowels") // prints the result of # of vowels and consonants

//Reverse Array
console.log("Reverse Array")

const arrays = [1,2,3] // input array that will change
const reverse = []  // variable that will set array in reverse order

for (let i = arrays.length-1; i>=0 ; i--){ // for loop that counts the index in reverse order
    const num2 = arrays[i] // varriable num2 equals the index vaules of the array
    reverse.push(num2) // pushing the vaules of num2 into variable reverse
}
console.log(reverse) // prints the new reverse index of the array

//Fizz Buzz
console.log("Fizz Buzz")

let numbers = "" // variable numbers which will be 1-100
for (let i = 1; i <= 100; i++) {// for loop that counts the index from 1 to 100
    if (i % 15 === 0) { // modulus of the first multiple of 3 and 5 which is 15 
        numbers = numbers + "FizzBuzz " // if true replaces all numbers that are multiples of 3 and 5 with FizzBuzz
    }
    else if (i % 3 === 0) { // modulus of all multiples of 3 
        numbers = numbers + "Fizz " // if true replaces all numbers that are multiples of 3 with Fizz
    }
    else if (i % 5 === 0) { // modulus of all multiples of 5 
        numbers = numbers + "Buzz " // if true replaces all numbers that are multiples of 5 with Buzz
    } else {
        numbers = numbers + i + " "// if none of the above are true then add the numbers from 1- 100
    }
}
console.log(numbers)//print all values from 1-100