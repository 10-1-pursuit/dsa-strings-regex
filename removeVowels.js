// Input is a string, output is a string with the vowels removed
// What are vowels? => a, e, i, o, u
// ex: "hello" => "hll"
// ex: "Carlos" => "Crls"



const disemvowelWord = (word) => {
    // Create empty string to hold our new string(consonants)
    let newStr = ""
    // Make word lower case
    word = word.toLowerCase()
    // Iterate over our string parameter
    for (let i = 0; i < word.length; i++) {
        // check if the letter at each iteration is a vowel
        // if it isn't a vowel: add it to the new string
        if(
            word[i] !== 'a' && 
            word[i] !== 'e' &&
            word[i] !== 'i' &&
            word[i] !== 'o' &&
            word[i] !== 'u'
          ){
            newStr += word[i]
        }
        // if it IS a vowel, we can leave it alone and keep going
    }
    // Return the new string
    return newStr
}


const disemvowelWord2 = (word) => {
    for (let i = 0; i < word.length; i++) {
      if (
        word[i].toLowerCase() === "a" ||
        word[i].toLowerCase() === "e" ||
        word[i].toLowerCase() === "i" ||
        word[i].toLowerCase() === "o" ||
        word[i].toLowerCase() === "u"
      ) {
        word = word.slice(0, i) + word.slice(i + 1);
        // Need to decrement bc we take a letter out of the string and move all of the indices down by one, even though i continues to increment
        i--;
      }
    }
    return word;
  };

// console.log(disemvowelWord2("Sean"))
// returns "San" if we omit the `i--`


// Using a Regular Expression
const disemvowelWord3 = (word) => {
    // Pattern below searches for "ao"
    // const regex = /ao/

    // Pattern searches for the first instance that matches either 'a' or 'o'
    // const regex = /[ao]/

    // Pattern searches for ALL of the instances that match either 'a' or 'o'
    // const regex = /[ao]/g

    // Pattern searches for ALL of the instances that match either 'a', 'e', 'i', 'o', 'u'
    // const regex = /[aeiou]/g

    // Pattern searches for ALL of the instances that match any of the letters in the square brackets whether they are capitalized or lower case
    // g: global, removes multiple instances
    // i: case insensitive, removes both capital and lowercase letters
    const regex = /[aeiou]/gi

    // .replace: Replaces the values of regex that it finds in the string w an empty ""
    return word.replace(regex, "")
    // .match() will return an array if the regex values are found (even empty arrays/objects are truthy)
    // or will return undefined if it is not found(falsy)
}

console.log(disemvowelWord3("I am a string with many vowels you know"))