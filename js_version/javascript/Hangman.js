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

const letters = "abcdefghijklmnopqrstuvwxyz".split('');

while (true) {
    console.log("Pls guess the word");
    var randomNum = Math.floor(Math.random() * words.length);
    var word = words[randomNum];
    var wordTemp = word;
    //console.log(word);
    var timesLeft = tries;
    var lettersLeft = letters.slice();
    var wordLength = word.length;
    var showWord = '_'.repeat(wordLength).split('');
    while (timesLeft > 0) {
        console.log(showWord.join(' '));
        console.log("Pls choose a letter from \n" + lettersLeft.join(", "));
        console.log(timesLeft + " times left");
        var input = prompt().toLowerCase();
        if (input.length  === 1 && lettersLeft.includes(input)) {
            lettersLeft.splice(lettersLeft.indexOf(input), 1);
            if (word.includes(input)) {
                var index = wordTemp.indexOf(input);
                do {
                    if (index != -1) {
                        showWord[index] = input;
                        wordLength -= 1;
                    }
                    index = wordTemp.indexOf(input, index + 1);
                } while (index != -1)

                if (wordLength <= 0) {
                    console.log("You Win!");
                    break;
                }
            } else {
                timesLeft -= 1;
                if (timesLeft <= 0) {
                    console.log("You lose!");
                }
            }
        } else {
            console.log("Input error, Pls only choose one letter from \n" + lettersLeft.join(", "));
        }
    }
}