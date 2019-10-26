var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessLeft = 9;


document.onkeyup = function () {

    var userselect = String.fromCharCode(event.keyCode).toLowerCase();
    var computerselect = options[Math.floor(Math.random() * options.length)];
    var letter = "";


    if (userselect == 'a' || userselect == 'b' || userselect == 'c' || userselect == 'd' || userselect == 'e' || userselect == 'f' || userselect == 'g' || userselect == 'h' || userselect == 'i'
        || userselect == 'j' || userselect == 'k' || userselect == 'l' || userselect == 'm' || userselect == 'n' || userselect == 'o' || userselect == 'p' || userselect == 'q'
        || userselect == 'r' || userselect == 's' || userselect == 't' || userselect == 'u' || userselect == 'v' || userselect == 'w' || userselect == 'x' || userselect == 'y' || userselect == 'z') {

        if (userselect == computerselect) {
            wins++;
            guessLeft = 9;
            letter = "";
        }
        if (userselect !== computerselect) {
            letter = userselect + ", ";
            guessLeft--;
            letter = userselect;

            if (guessLeft == 0) {
                losses++;
                letter = "";
                guessLeft = 9;
            }
            
        }

    }
    var html = "<h1>The Psychic Game</h1>" +
        "<h3>Guess what letter I'm thinking</h3>" +
        "<h3>Wins: " + wins + "</h3>" +
        "<h3>Losses: " + losses + "</h3>" +
        "<h3>Guesses Left: " + guessLeft + "</h3>" +
        "<h3>Your Guesses so far:     " + letter + "</h3>";

    document.querySelector('#game').innerHTML = html;
}