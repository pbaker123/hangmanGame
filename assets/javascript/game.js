var words = ["ABRUPTLY","ABSURD","ABYSS","AFFIX","ASKEW","AVENUE","AWKWARD","AXIOM","AZURE","BAGPIPES","BANDWAGON","BANJO","BAYOU","BEEKEEPER","BIKINI","BLITZ","BLIZZARD","BOGGLE","BOOKWORM","BOXCAR","BOXFUL","BUCKAROO","BUFFALO","BUFFOON","BUXOM","BUZZARD","BUZZING","BUZZWORDS","CALIPH","COBWEB","COCKINESS","CROQUET","CRYPT","CURACAO","CYCLE","DAIQUIRI","DIRNDL","DISAVOW","DIZZYING","DUPLEX","DWARVES","EMBEZZLE","EQUIP","ESPIONAGE","EUOUAE","EXODUS","FAKING","FISHHOOK","FIXABLE","FJORD","FLAPJACK","FLOPPING","FLUFFINESS","FLYBY","FOXGLOVE","FRAZZLED","FRIZZLED","FUCHSIA","FUNNY","GABBY","GALAXY","GALVANIZE","GAZEBO","GIAOUR","GIZMO","GLOWWORM","GLYPH","GNARLY","GNOSTIC","GOSSIP","GROGGINESS","HAIKU","HAPHAZARD","HYPHEN","IATROGENIC","ICEBOX","INJURY","IVORY","IVY","JACKPOT","JAUNDICE","JAWBREAKER","JAYWALK","JAZZIEST","JAZZY","JELLY","JIGSAW","JINX","JIUJITSU","JOCKEY","JOGGING","JOKING","JOVIAL","JOYFUL","JUICY","JUKEBOX","JUMBO","KAYAK","KAZOO","KEYHOLE","KHAKI","KILOBYTE","KIOSK","KITSCH","KIWIFRUIT","KLUTZ","KNAPSACK","LENGTHS","LUCKY","LUXURY","LYMPH","MARQUIS","MATRIX","MEGAHERTZ","MICROWAVE","MNEMONIC","MYSTIFY","NAPHTHA","NIGHTCLUB","NOWADAYS","NUMBSKULL","NYMPH","ONYX","OVARY","OXIDIZE","OXYGEN","PAJAMA","PEEKABOO","PHLEGM","PIXEL","PIZAZZ","PNEUMONIA","POLKA","PSHAW","PSYCHE","PUPPY","PUZZLING","QUARTZ","QUEUE","QUIPS","QUIXOTIC","QUIZ","QUIZZES","QUORUM","RAZZMATAZZ","RHUBARB","RHYTHM","RICKSHAW","SCHNAPPS","SCRATCH","SHIV","SNAZZY","SPHINX","SPRITZ","SQUAWK","STAFF","STRENGTH","STRENGTHS","STRETCH","STRONGHOLD","STYMIED","SUBWAY","SWIVEL","SYNDROME","THRIFTLESS","THUMBSCREW","TOPAZ","TRANSCRIPT","TRANSGRESS","TRANSPLANT","TRIPHTHONG","TWELFTH","TWELFTHS","UNKNOWN","UNWORTHY","UNZIP","UPTOWN","VAPORIZE","VIXEN","VODKA","VOODOO","VORTEX","VOYEURISM","WALKWAY","WALTZ","WAVE","WAVY","WAXY","WELLSPRING","WHEEZY","WHISKEY","WHIZZING","WHOMEVER","WIMPY","WITCHCRAFT","WIZARD","WOOZY","WRISTWATCH","WYVERN","XYLOPHONE","YACHTSMAN","YIPPEE","YOKED","YOUTHFUL","YUMMY","ZEPHYR","ZIGZAG","ZIGZAGGING","ZILCH","ZIPPER","ZODIAC","ZOMBIE"];
			var lossStatements = ["If at first you don't succeed, then skydiving isn't for you.","Honk if you love peace and quiet.","Remember half the people you know are also below average.","Nothing is foolproof to a talented fool.","He who laughs last thinks slowest.","The early bird may get the worm, but the second mouse gets the cheese.","Support bacteria - they're the only culture some people have.","If at first you don't succeed, you dead.","Experience is something you don't get until just after you need it.","Success always occurs in private and failure in full view.","Monday is an awful way to spend 1/7th of your life.","The sooner you fall behind the less you will need time to catch up.","If you think nobody cares, try missing a couple more words.","A blonde heard that accidents happen close to home so she moved!","Your IQ came back negative.","Thanks for explaining the word 'many' to me, it means a lot.","Artificial intelligence is no match for natural stupidity."];
			var winStatements = ["Keep your face always toward the sunshine—and shadows will fall behind you.","It is always the simple that produces the marvelous.","The world is full of magical things patiently waiting for our wits to grow sharper.","Let us make our future now, and let us make our dreams tomorrow’s reality.","All you need is the plan, the road map, and the courage to press on to your destination.","The glow of one warm thought is to me worth more than money.","Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit.","The power of imagination makes us infinite.","Try to be a rainbow in someone’s cloud.","I believe that if one always looked at the skies, one would end up with wings.","I dwell in possibility.","Light tomorrow with today.","I arise full of eagerness and energy, knowing well what achievement lies ahead of me.","A No. 2 pencil and a dream can take you anywhere.","When the sun is shining I can do anything; no mountain is too high, no trouble too difficult to overcome.","Happiness is not something you postpone for the future; it is something you design for the present.","In a gentle way, you can shake the world.","Let your life lightly dance on the edges of time like dew on the tip of a leaf.","Follow your bliss and the universe will open doors where there were only walls.","Each day provides its own gifts.","Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you."]
			var alphabet;
			var winTally = 0;
			var lossesTally = 0;
			var guessTally;
			var bloodyTears = new Audio('assets/audio/bloodyTears.mp3');
			var neckSnap = new Audio('assets/audio/neckSnap.mp3');
			// victory music set to strangerthings.  add top 20 
			var playlist = ["assets/audio/axelF.mp3", "assets/audio/ghostBusters.mp3", "assets/audio/bakerStreet.mp3", "assets/audio/gbu.mp3", "assets/audio/rickRoll.mp3"];
			var audio;

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
				document.getElementById('title').style.display='none';
				document.getElementById('title2').style.display='grid';
				document.getElementById('updateImage').innerHTML = '<img src="assets/images/left13.png">';
				document.getElementById('pressStart').style.display='none';
				document.getElementById('playAgain').style.display='none';
				document.getElementById('winStory').style.display='none';
				document.getElementById('lossStory').style.display='none';
				document.getElementById('preStory').style.display='none';
				document.getElementById('gameBoard').style.display='grid';
				document.getElementById('scoreBoard').style.display='inline-block';
			}

			// This function selects the word and sets up the current word area
			function wordSelection () {
				songSelection()
				// Resets the wordSelection
				document.getElementById('gameWord').innerHTML = "";
				// Selects a random word from the word list
				currentWord = words[Math.floor(Math.random() * words.length)];
				currentWordLettersRemaining = currentWord.length
					for(var i = 0; i < currentWord.length; i++) {
						// Writes each letter in a div with numbered id (letter#) and an underscore placeholder
					var letter = '<div class="gameWordPiece" id="letter' + i  + '">' + "_" + '</div>';
					// Writes each iteration of the variable letter before the end of the div id gameWord
					document.getElementById('gameWord').insertAdjacentHTML('beforeend', letter)
				}
			}
			
			function songSelection () {
				songTrack = playlist[Math.floor(Math.random() * playlist.length)];
				document.getElementById('gameTrack').innerHTML = '<audio src="' + songTrack + '" autoplay="true" loop="true"></audio>';
			}

			// This function updates the remaining letters with any defined letters remaining in the alphabet array
			function lettersRemaining() {
				// Resets the remaining letters
				document.getElementById('remainingLetters').innerHTML = "";
				// Updates the reamining letters
				for(var j = 0; j < alphabet.length; j++) {
					var alphabetRemaining = '<div style="float: left; margin-right: 5px">' + alphabet[j] + '</div>';
					if(alphabet[j] !== undefined) {
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
				document.getElementById('updateImage').innerHTML = '<img src="assets/images/left' + guessTally + '.png">';
				// loss condition
				if(guessTally == 0) {
					setTimeout(youLost, 500);
				}
			}



			// This function processes when you've won, handles the win screen
			function youWon() {
				winTally = parseInt(winTally) + 1;
				// var alphabetGuessed = '<div class="gameWordPiece" style="float: left; margin-right: 5px" id="guesses' + guess  + '">' + guess + '</div>'
				// 	document.getElementById('guessedLetters').insertAdjacentHTML('beforeend', alphabetGuessed);
				document.getElementById('gameTrack').innerHTML = '<audio src="assets/audio/bloodyTears.mp3" autoplay="true" loop="true"></audio>';
				document.getElementById('gameBoard').style.display='none';
				document.getElementById('updateImage').innerHTML = '<img src="assets/images/left11.png">';
				setTimeout(postGameWin, 500)
				gameStart()
			}

			function postGameWin() {
				generateWinScreen()
				document.querySelector("#wins").innerHTML = winTally;
				document.querySelector("#losses").innerHTML = lossesTally;
				document.getElementById('winStory').style.display='grid';
				document.getElementById('playAgain').style.display='grid';
			}

			function generateWinScreen() {
				var youRule;
				if (winTally < winStatements.length) {
					youRule = winStatements[winTally - 1];
				} else {
					youRule = winStatements[winStatements.length - 1];
				}
				document.getElementById("winStory").innerHTML = '<h2><u>You won!!</u></h2><p>The word was</p><h1>' + currentWord + '</h1><p>A special message for you:<br><br>' + youRule + '</p><p>How many people can you save?</p>';
			}


			// This function process when you've lost, handles the end of the hangman
			function youLost() {
				document.getElementById('gameBoard').style.display='none';
				document.getElementById('gameTrack').innerHTML = '';
				setTimeout(hanging, 500)
				setTimeout(postGameLoss, 3500)
				gameStart()
			}

			function hanging () {
				neckSnap.play()
				document.getElementById('updateImage').innerHTML = '<img src="assets/images/left14.png">';
			}

			function postGameLoss() {
				
				lossesTally = parseInt(lossesTally) + 1;
				document.querySelector("#wins").innerHTML = winTally;
				document.querySelector("#losses").innerHTML = lossesTally;
				generateLossScreen()
				document.getElementById('lossStory').style.display='grid';
				document.getElementById('playAgain').style.display='grid';
			}

			function generateLossScreen() {
				var youSuck;
				if (lossesTally < lossStatements.length) {
					youSuck = lossStatements[lossesTally - 1];
				} else {
					youSuck = lossStatements[lossStatements.length - 1];
				}
				document.getElementById("lossStory").innerHTML = '<h2><u>You Dead!</u></h2><p>The word was</p><h1>' + currentWord + '</h1><p>A special message for you:<br><br>' + youSuck + '</p><p>How many more dopes will you kill?</p>';
			}

			gameStart()