// Here we are creating an array of words to narrow down the possibilities
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];
// JS picks a random word here from the array above
var word = words[Math.floor(Math.random() * words.length)];
// The answer array will start with an empty array 
// of underscores the same length of the correct word
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
//this variable keeps count of the letters remaining to finish the game
var remainingLetters = word.length;
// When the remaining letters are more than zero in goes into the while loop
while (remainingLetters > 0) {
    // This shows the player the empty array to fill by start guessing letters
    alert(answerArray.join(" "));
    // The below prompt displays and gets a letter guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        // When the player chooses cancel it breaks out of the loop
        break;
        // A player can only guess one letter, if they enter multiple letters 
        // the below alert will appear.
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // This will loop through the length of the correct word
        for (var j = 0; j < word.length; j++) {
            // if the letter guessed is correct it executes the if
            if (word[j] === guess) {
                // the answerArray will be filled with the correct letter
                answerArray[j] = guess;
                // the letters remaining in the answer array gets decremented
                remainingLetters--;
            }
        }
    }
    // The end of the game loop
}
// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);