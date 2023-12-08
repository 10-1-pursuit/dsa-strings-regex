// Strings!
// Strings share some properties w/ arrays, like the .length property
const myName = 'Carlos'
// console.log(myName.length)

// We can index strings like we do arrays using bracket notation
// console.log(myName[3])

// We CANNOT however update the string using the indexes
myName[3] = 'L'
// console.log(myName)

// Accessing a piece of a string or "substring"
// .substring takes in two arguments:
// 1: the index of the starting point
// 2: the index of the ending point, but excluding that index
// console.log(myName.substring(3, 5))


// Iterating over Strings
// for (let i = 0; i < myName.length; i++) {
//     console.log(myName[i])
// }

// Will throw an error! .reverse is an Array method, not a string method!
// myName.reverse()


// console.log(myName.split(''))

// .split('') converts a sting into an array, based on the separator(delimiter)
// If you put an empty string as the separator, it will make each character its own index
// If you put a space inside of a string, it will break the string up into words, and omit the spaces
const mySentence = "The dog jumped over the fence"
// console.log(mySentence.split(' '))


// .reverse() is an Array method, and in order to use it on a string, we have to first convert the string into an array
// Reverses a word => array of characters(letters)
// console.log(myName.split('').reverse())

// Reverses an entire sentence => array of words
// console.log(mySentence.split(' ').reverse())

// Joining an array: converting the array into a string
// join() takes an argument representing the "separator" which it will join each index on
// Empty string will join on each index
// " "(space inside a string) will join all indexes and have a space between them

// Will rejoin string with nothing between each index
// console.log(myName.split('').reverse().join(''))

// Will rejoin string with spaces between each word
// console.log(mySentence.split(' ').reverse().join(' '))

// Will rejoin string w 'x's between each word
console.log(mySentence.split(' ').reverse().join('x'))




