// Word list for the game
var words = ["CONTROL", "VOLLEYBALL", "DISTANCE", "RUDDY", "PARTNER", "EIGHT", "LAME", "LOCKET", "GREASE", "AIRPLANE", "AMBITIOUS", "RULE", "ZEPHYR", "MERCIFUL", "BOAST", "AQUATIC", "FERTILE"];
var alphabet;
var winTally = 0;
var lossesTally = 0;
var guessTally;

// This function starts the game initially by pressing space bar, and allows the game to play again by pressing the space bar
function gameStart() {
	document.onkeyup = function(event) {
		var restart = event.key;
		if(restart == " ") {
			gameInitialize()
			wordSelection()
			lettersRemaining()
			document.onkeyup = function(event) {
				guessProcessing()
			}
		}
	}
}

// This function resets the variables and updates the guessed letters, wins, and remaining guesses
function gameInitialize() {
	alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	guessTally = 13;
	document.getElementById('guessedLetters').innerHTML = "";
	document.querySelector("#wins").innerHTML = winTally;
	document.querySelector("#losses").innerHTML = lossesTally;
	document.querySelector("#guesses").innerHTML = guessTally;
}

// This function selects the word and sets up the current word area
function wordSelection () {
	// Resets the wordSelection
	document.getElementById('gameWord').innerHTML = "";
	// Selects a random word from the word list
	currentWord = words[Math.floor(Math.random() * words.length)];
	currentWordLettersRemaining = currentWord.length
		for(var i = 0; i < currentWord.length; i++) {
			// Writes each letter in a div with numbered id (letter#) and an underscore placeholder
		var letter = '<div class="gameWordPiece" style="float: left; margin-right: 5px" id="letter' + i  + '">' + "_" + '</div>';
		// Writes each iteration of the variable letter before the end of the div id gameWord
		document.getElementById('gameWord').insertAdjacentHTML('beforeend', letter)
	}
}

// This function updates the remaining letters with any defined letters remaining in the alphabet array
function lettersRemaining() {
	// Resets the remaining letters
	document.getElementById('remainingLetters').innerHTML = "";
	// Updates the reamining letters
	for(var j = 0; j < alphabet.length; j++) {
		var alphabetRemaining = alphabet[j];
		if(alphabetRemaining !== undefined) {
			document.getElementById('remainingLetters').insertAdjacentHTML('beforeend', alphabetRemaining);
		}
	}
}

// This function processes each guess: determines if it is a valid choice; determines if it is the correct letter for each letter of the current word; 
function guessProcessing() {
	// Determines which key was pressed.
	var guess = event.key.toUpperCase();
	var guessedAlphabet = alphabet.indexOf(guess);
	if(guessedAlphabet >= 0) {
		// Posts letters already guessed the variable guess comes from the user input
		var alphabetGuessed = '<div class="gameWordPiece" style="float: left; margin-right: 5px" id="guesses' + guess  + '">' + guess + '</div>'
		document.getElementById('guessedLetters').insertAdjacentHTML('beforeend', alphabetGuessed);
		delete alphabet[guessedAlphabet];
		lettersRemaining()
		// Look to compare guess to the currentWord.  If it exists innerHTML by id for "letter" + loop variable and reduce the currentWordLettersRemaining variable by 1.  If it equals 0 game wins.  Play a sound.  
		if(guessedAlphabet >= 0) {
			// Loops through each currentword div to check if it matches the guess, if it does it overwrites _ with the letter
			if(currentWord.indexOf(guess) >= 0) {
				goodGuess()
			} else {
				// If it doesn't exist reduce guessTally by 1, show a hangman piece.  If guessTally = 0 game over animate the game piece to "fall" and the head to "snap" and play a crunching sound
				badGuess()
			}
		}
	}
}

function goodGuess() {
	var guess = event.key.toUpperCase();
	for(var k = 0; k < currentWord.length; k++) {
		if(currentWord.charAt(k) == guess) {
			document.getElementById("letter" + k).innerHTML = guess;
			currentWordLettersRemaining = currentWordLettersRemaining - 1;
			if(currentWordLettersRemaining == 0) {
				youWon()
			}
		}
	}
}

// This function runs when a guess doesn't match any letters in the current word
function badGuess() {
	guessTally = parseInt(guessTally) - 1;
	document.getElementById('guesses').innerHTML = guessTally;
	// loss condition
	if(guessTally == 0) {
		youLost()
	}
}

// This function processes when you've won, handles the win screen
function youWon() {
	winTally = parseInt(winTally) + 1;
	gameStart()
}

// This function process when you've lost, handles the end of the hangman
function youLost() {
	lossesTally = parseInt(lossesTally) + 1;
	gameStart()
}

// gameStart()