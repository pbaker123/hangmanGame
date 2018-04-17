var lossStatements = ["If at first you don't succeed, then skydiving isn't for you.","Honk if you love peace and quiet.","Remember half the people you know are also below average.","Nothing is foolproof to a talented fool.","He who laughs last thinks slowest.","The early bird may get the worm, but the second mouse gets the cheese.","Support bacteria - they're the only culture some people have.","If at first you don't succeed, you dead.","Experience is something you don't get until just after you need it.","Success always occurs in private and failure in full view.","Monday is an awful way to spend 1/7th of your life.","The sooner you fall behind the less you will need time to catch up.","If you think nobody cares, try missing a couple more words.","A blonde heard that accidents happen close to home so she moved!","Your IQ came back negative.","Thanks for explaining the word 'many' to me, it means a lot.","Artificial intelligence is no match for natural stupidity."];
var playlist = ["assets/audio/axelF.mp3", "assets/audio/ghostBusters.mp3", "assets/audio/bakerStreet.mp3", "assets/audio/gbu.mp3", "assets/audio/rickRoll.mp3"];
var winStatements = ["Keep your face always toward the sunshine—and shadows will fall behind you.","It is always the simple that produces the marvelous.","The world is full of magical things patiently waiting for our wits to grow sharper.","Let us make our future now, and let us make our dreams tomorrow’s reality.","All you need is the plan, the road map, and the courage to press on to your destination.","The glow of one warm thought is to me worth more than money.","Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit.","The power of imagination makes us infinite.","Try to be a rainbow in someone’s cloud.","I believe that if one always looked at the skies, one would end up with wings.","I dwell in possibility.","Light tomorrow with today.","I arise full of eagerness and energy, knowing well what achievement lies ahead of me.","A No. 2 pencil and a dream can take you anywhere.","When the sun is shining I can do anything; no mountain is too high, no trouble too difficult to overcome.","Happiness is not something you postpone for the future; it is something you design for the present.","In a gentle way, you can shake the world.","Let your life lightly dance on the edges of time like dew on the tip of a leaf.","Follow your bliss and the universe will open doors where there were only walls.","Each day provides its own gifts.","Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you."]
var words = ["ABRUPTLY","ABSURD","ABYSS","AFFIX","ASKEW","AVENUE","AWKWARD","AXIOM","AZURE","BAGPIPES","BANDWAGON","BANJO","BAYOU","BEEKEEPER","BIKINI","BLITZ","BLIZZARD","BOGGLE","BOOKWORM","BOXCAR","BOXFUL","BUCKAROO","BUFFALO","BUFFOON","BUXOM","BUZZARD","BUZZING","BUZZWORDS","CALIPH","COBWEB","COCKINESS","CROQUET","CRYPT","CURACAO","CYCLE","DAIQUIRI","DIRNDL","DISAVOW","DIZZYING","DUPLEX","DWARVES","EMBEZZLE","EQUIP","ESPIONAGE","EUOUAE","EXODUS","FAKING","FISHHOOK","FIXABLE","FJORD","FLAPJACK","FLOPPING","FLUFFINESS","FLYBY","FOXGLOVE","FRAZZLED","FRIZZLED","FUCHSIA","FUNNY","GABBY","GALAXY","GALVANIZE","GAZEBO","GIAOUR","GIZMO","GLOWWORM","GLYPH","GNARLY","GNOSTIC","GOSSIP","GROGGINESS","HAIKU","HAPHAZARD","HYPHEN","IATROGENIC","ICEBOX","INJURY","IVORY","IVY","JACKPOT","JAUNDICE","JAWBREAKER","JAYWALK","JAZZIEST","JAZZY","JELLY","JIGSAW","JINX","JIUJITSU","JOCKEY","JOGGING","JOKING","JOVIAL","JOYFUL","JUICY","JUKEBOX","JUMBO","KAYAK","KAZOO","KEYHOLE","KHAKI","KILOBYTE","KIOSK","KITSCH","KIWIFRUIT","KLUTZ","KNAPSACK","LENGTHS","LUCKY","LUXURY","LYMPH","MARQUIS","MATRIX","MEGAHERTZ","MICROWAVE","MNEMONIC","MYSTIFY","NAPHTHA","NIGHTCLUB","NOWADAYS","NUMBSKULL","NYMPH","ONYX","OVARY","OXIDIZE","OXYGEN","PAJAMA","PEEKABOO","PHLEGM","PIXEL","PIZAZZ","PNEUMONIA","POLKA","PSHAW","PSYCHE","PUPPY","PUZZLING","QUARTZ","QUEUE","QUIPS","QUIXOTIC","QUIZ","QUIZZES","QUORUM","RAZZMATAZZ","RHUBARB","RHYTHM","RICKSHAW","SCHNAPPS","SCRATCH","SHIV","SNAZZY","SPHINX","SPRITZ","SQUAWK","STAFF","STRENGTH","STRENGTHS","STRETCH","STRONGHOLD","STYMIED","SUBWAY","SWIVEL","SYNDROME","THRIFTLESS","THUMBSCREW","TOPAZ","TRANSCRIPT","TRANSGRESS","TRANSPLANT","TRIPHTHONG","TWELFTH","TWELFTHS","UNKNOWN","UNWORTHY","UNZIP","UPTOWN","VAPORIZE","VIXEN","VODKA","VOODOO","VORTEX","VOYEURISM","WALKWAY","WALTZ","WAVE","WAVY","WAXY","WELLSPRING","WHEEZY","WHISKEY","WHIZZING","WHOMEVER","WIMPY","WITCHCRAFT","WIZARD","WOOZY","WRISTWATCH","WYVERN","XYLOPHONE","YACHTSMAN","YIPPEE","YOKED","YOUTHFUL","YUMMY","ZEPHYR","ZIGZAG","ZIGZAGGING","ZILCH","ZIPPER","ZODIAC","ZOMBIE"];

var alphabet, audio, guessTally, currentWord, currentWordLettersRemaining;
var again = document.getElementById('playAgain');
var bloodyTears = new Audio('assets/audio/bloodyTears.mp3');
var gBoard = document.getElementById('gameBoard');
var gContent = document.getElementById('gameContent');
var gLetters = document.getElementById('guessedLetters');
var gTrack = document.getElementById('gameTrack');
var gWord = document.getElementById('gameWord');
var loss = document.querySelector("#losses");
var lossesTally = 0;
var lStory = document.getElementById('lossStory');
var neckSnap = new Audio('assets/audio/neckSnap.mp3');
var pStory = document.getElementById('preStory');
var sBoard = document.getElementById('scoreBoard');
var start = document.getElementById('pressStart');
var t1 = document.getElementById('title');
var t2 = document.getElementById('title2');
var update = document.getElementById('updateImage');
var wins = document.querySelector("#wins");
var winTally = 0;
var wStory = document.getElementById('winStory');



// This function preloads all of the images used in the game
window.onload = function() {

	setTimeout(function() {

		for (var i = 0; i < 15; i++) {
		// preload images
		new Image().src = "assets/images/left" + i + ".png";
		}
		new Image().src = "assets/images/righthalf.png";
	}, 1000);

};

// This function starts the game initially by pressing space bar, and allows the game to play again by pressing the space bar
function gameStart() {
	document.onkeyup = function(event) {
		var restart = event.key;
		if(restart == " ") {
			songSelection()
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
	// Sets variables
	alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	guessTally = 13;
	
	// Sets the game environment
	gLetters.innerHTML = "";
	wins.innerHTML = winTally;
	loss.innerHTML = lossesTally;
	t1.style.display='none';
	t2.style.display='grid';
	gContent.style.display='block';
	update.innerHTML = '<img src="assets/images/left13.png">';
	start.style.display='none';
	again.style.display='none';
	wStory.style.display='none';
	lStory.style.display='none';
	pStory.style.display='none';
	gBoard.style.display='grid';
	sBoard.style.display='inline-block';
}

// This function selects the word and sets up the current word area
function wordSelection () {
	currentWord = words[Math.floor(Math.random() * words.length)];
	currentWordLettersRemaining = currentWord.length;

	// Resets the wordSelection
	gWord.innerHTML = "";
	for(var i = 0; i < currentWord.length; i++) {
		// Writes each letter in a div with numbered id (letter#) and an underscore placeholder
		var letter = '<div class="gameWordPiece" id="letter' + i  + '">' + "_" + '</div>';
		// Writes each iteration of the variable letter before the end of the div id gameWord
		gWord.insertAdjacentHTML('beforeend', letter)
	}
}

function songSelection () {
	songTrack = playlist[Math.floor(Math.random() * playlist.length)];
	gTrack.innerHTML = '<audio src="' + songTrack + '" autoplay="true" loop="true"></audio>';
}

// function songSelection () {
// 	audio = document.getElementById("axelF");
// 	audio.play()
// }

// function songStop () {
// 	audio.pause()
// }

// This function updates the remaining letters with any defined letters remaining in the alphabet array
function lettersRemaining() {
	var rLetters = document.getElementById('remainingLetters');
	// Resets the remaining letters
	rLetters.innerHTML = "";
	// Updates the reamining letters
	for(var j = 0; j < alphabet.length; j++) {
		var alphabetRemaining = '<div style="float: left; margin-right: 5px">' + alphabet[j] + '</div>';
		if(alphabet[j] !== undefined) {
			rLetters.insertAdjacentHTML('beforeend', alphabetRemaining);
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
		gLetters.insertAdjacentHTML('beforeend', alphabetGuessed);
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
				setTimeout(youWon, 750)
			}
		}
	}
}

// This function runs when a guess doesn't match any letters in the current word
function badGuess() {
	guessTally = parseInt(guessTally) - 1;
	if (guessTally >= 0) {
		update.innerHTML = '<img src="assets/images/left' + guessTally + '.png">';
	} else {
		// protects against fast typers getting to -1 score breaking the left image
		update.innerHTML = '<img src="assets/images/left0.png">'
	}
	// loss condition
	if(guessTally == 0) {
		setTimeout(youLost, 750);
	}
}

// This function processes when you've won, handles the win screen
function youWon() {
	generateWinScreen()
	postGameWin()
	gameStart()
}

function postGameWin() {
	gTrack.innerHTML = '<audio src="assets/audio/bloodyTears.mp3" autoplay="true" loop="true"></audio>';
	gBoard.style.display='none';
	update.innerHTML = '<img src="assets/images/left11.png">';
	winTally = parseInt(winTally) + 1;
	wins.innerHTML = winTally;
	loss.innerHTML = lossesTally;
	wStory.style.display='grid';
	again.style.display='grid';
}

function generateWinScreen() {
	var youRule = winStatements[Math.floor(Math.random() * winStatements.length)];
	var story = '<h2><u>You won!!</u></h2><p>The word was</p><h1>' + currentWord + '</h1><p>A special message for you:<br><br>' + youRule + '</p><p>How many people can you save?</p>';
	wStory.innerHTML = story;
}


// This function process when you've lost, handles the end of the hangman
function youLost() {
	generateLossScreen()
	setTimeout(hanging, 500)
	setTimeout(postGameLoss, 3500)
	gameStart()
}

function hanging () {
	gTrack.innerHTML = '';
	gBoard.style.display='none';
	neckSnap.play()
	update.innerHTML = '<img src="assets/images/left14.png">';
}

function postGameLoss() {
	lossesTally = parseInt(lossesTally) + 1;
	wins.innerHTML = winTally;
	loss.innerHTML = lossesTally;
	lStory.style.display='grid';
	again.style.display='grid';
}

function generateLossScreen() {
	var youSuck = lossStatements[Math.floor(Math.random() * lossStatements.length)];
	var story = '<h2><u>You Dead!</u></h2><p>The word was</p><h1>' + currentWord + '</h1><p>A special message for you:<br><br>' + youSuck + '</p><p>How many more dopes will you kill?</p>'
	lStory.innerHTML = story;
}

gameStart()