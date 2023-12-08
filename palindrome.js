// Polya Problem Solving Methodology
// 1: Understand the Problem
// A palindrome is a word that will be spelt the same whether it is forward or backwards
// Input is a string, output is a boolean


// 2: Make a Plan
    // Write the function signature: const funcName = () => {}
    // Take the word and break it down into an array of single characters
    // Reverse the word that was broken into single characters, join the array of characters back together to be a string
    // Before/during comparison we change both the word and the backwards word to lower case => Radar != radaR
    // Compare the two words:
        // if the words are equal to each other, return true
        // otherwise return false

// 3: Write the Code(execute the plan)
const isPalindrome = (word) => {
    // Take the word and break it down into an array of single characters
    // Reverse the word that was broken into single characters, join the array of characters back together to be a string
    const reversedWord = word.split('').reverse().join("")

    // Compare the two words:
        // if the words are equal to each other, return true
        // otherwise return false
    // Before/during comparison we change both the word and the backwards word to lower case => Radar != radaR
    // if(word.toLowerCase() === reversedWord.toLowerCase()){
    //     return true
    // } else{
    //     return false
    // }

    // Using a ternary
    // return word.toLowerCase() === reversedWord.toLowerCase() ? true : false

    // Simplifying bc the expression evaluates to a boolean already
    return word.toLowerCase() === reversedWord.toLowerCase()
}
console.log(isPalindrome("anutforajaroftuna"))
console.log(isPalindrome("maDaM"))
console.log(isPalindrome("Carlos"))

// 4: Refactor / revise
// Make it case insensitive
// Can we shorten this code?





