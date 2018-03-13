
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses. They begin at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var userGuess = null;

var letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

// keypress, below function runs
   document.onkeypress = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    	if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		guessesLeft--;
	}

	// if letterToBeGuessed = userGuess then its a win
	// reset guessesLeft to 9
	// start game again
	if (letterToBeGuessed == userGuess) {
		wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// if guessesLeft goes to 0 = loss
	// reset guessesLeft to 9
	if (guessesLeft == 0) {
		losses++;
		console.log("loss");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// Displaying information to html
	var html = "<p><h3>Wins: " + wins + "</h3></p>" + "<p><h3>Losses: " + losses + "</h3></p>" + "<p><h3>Guesses Left: " + guessesLeft + "</h3></p>" + "<p><h3>Your guesses so far: " + guessesSoFar + "</h3></p>";
	document.querySelector("#game").innerHTML = html;

}
