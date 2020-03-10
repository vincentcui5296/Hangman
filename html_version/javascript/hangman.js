const words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "galvainze",
    "cohort",
    "concatenate",
    "iteration",
    "index",
    "code",
    "angular",
    "react",
    "python"
    ];

const tries = 6;
var timesLeft = tries;

var timesLeftNode = document.querySelector("#times-left")
timesLeftNode.textContent = "Times Left:   " + tries;

var randomNum = Math.floor(Math.random() * words.length);
const word = words[randomNum];
console.log(word);
var wordTemp = word;
var wordLength = word.length;

var showWord = '_'.repeat(wordLength).split('');
var showWordNode = document.querySelector("#show-word");
showWordNode.textContent = "Show Word:   " + showWord.join(" ");

var lettersNode = document.querySelectorAll(".letter");

for (var i = 0; i < lettersNode.length; i++) {
    lettersNode[i].addEventListener("click", function() {
        var input = this.textContent.toLowerCase();
        this.setAttribute("disabled", "true");
            if (wordTemp.includes(input)) {
                var index = wordTemp.indexOf(input);
                do {
                    if (index != -1) {
                        showWord[index] = input;
                        wordLength -= 1;
                    }
                    index = wordTemp.indexOf(input, index + 1);
                } while (index != -1)

                showWordNode.textContent = "Show Word:   " + showWord.join(" ");


                if (wordLength <= 0) {
                    confirm("You Win!");
                }
            } else {
                timesLeft -= 1;
                timesLeftNode.textContent = "Times Left:   " + timesLeft;
                if (timesLeft <= 0) {
                    confirm("You lose!");
                }
            }

    });
}

// while (true) {
//     console.log("Pls guess the word");

//     
//     console.log(word);
//     
//     var lettersLeft = letters.slice();
//     
//     
//     while (timesLeft > 0) {
//         console.log(showWord.join(' '));
//         console.log("Pls choose a letter from \n" + lettersLeft.join(", "));
//         console.log(timesLeft + " times left");

//     }
// }