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

function Hangman() {
    const tries = 6;
    let timesLeft = tries;

    let timesLeftNode = document.querySelector("#times-left")
    timesLeftNode.textContent = "Times Left:   " + tries;

    let randomNum = Math.floor(Math.random() * words.length);
    const word = words[randomNum];
    console.log(word);
    let wordTemp = word;
    let wordLength = word.length;

    let showWord = '_'.repeat(wordLength).split('');
    let showWordNode = document.querySelector("#show-word");
    showWordNode.textContent = "Show Word:   " + showWord.join(" ");

    let lettersGrid = document.querySelector(".letters-grid");
    lettersGrid.textContent = "";
    for(let i = 0; i < 26; i++) {
        let button = document.createElement("button");
        button.classList.add("letter");
        button.textContent = String.fromCharCode("a".charCodeAt(0) + i);
        lettersGrid.appendChild(button);
    }

    let lettersNode = document.querySelectorAll(".letter");

    for (let i = 0; i < lettersNode.length; i++) {
        lettersNode[i].addEventListener("click", function() {
            let input = this.textContent.toLowerCase();
            this.setAttribute("disabled", "true");
            if (wordTemp.includes(input)) {
                let index = wordTemp.indexOf(input);
                do {
                    if (index != -1) {
                        showWord[index] = input;
                        wordLength -= 1;
                    }
                    index = wordTemp.indexOf(input, index + 1);
                } while (index != -1)

                showWordNode.textContent = "Show Word:   " + showWord.join(" ");

                if (wordLength <= 0) {
                    if (confirm("You Win, Do you want to try again?")) {
                        Hangman();
                    }
                }
            } else {
                timesLeft -= 1;
                timesLeftNode.textContent = "Times Left:   " + timesLeft;
                if (timesLeft <= 0) {
                    if (confirm("You Lose, Do you want to try again?")) {
                        Hangman();
                    }
                }
            }
        });
    }
}

Hangman();