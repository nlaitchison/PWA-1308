/**
 * GUESSING GAME:
 *
 * Created By: Nicole Aitchison
 * Date: 8/13/13
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
	// create a var of a random number
	var randomNumber = String(Math.floor(Math.random() * 10 + 1));
	console.log("random number:", randomNumber);
	
	// var to keep track of the number of guesses made and left
	var guessCount = 0;
	var guessLeft = 3;

	// var to keep track of whether the game is over
	var gameOver = false;

	// var to detect if the enter key has been pressed
	window.addEventListener('keyup', function (e) {

		// the enter keycode is 13, so check to see if enter was pressed
		// they're has to be guess left also
		if (e.keyCode === 13 && guessLeft > 0) {

			// then call user guessed function
			userGuessed();
		}

	}, false);

	// create a var for the guess button
	var guess = document.querySelector('button');
	// enable the button
	guess.disabled = false;
	// add an onclick event to the button
	guess.onclick = function(e){

		// when it's clicked, call the userGuessed function to run game
		userGuessed();

	}

	// function to run the game
	var userGuessed = function(){
		
		

		// store the inputed text
		var userInput = document.getElementById('input').value;

		// create for the displayed text that will change
		var text = document.getElementById('output');

		// check to make sure that the user has inputed a value and it's b/w 1 and 10
		if(userInput != "" && userInput > 0 && userInput < 11 && guessCount < 3)
		{	
			// add to the guess count and subtract from the guesses left
			guessCount++;
			guessLeft--;

			console.log("guess:", userInput, "guessCount", guessCount);
			
			// if the guess = the randomNumber
			if(userInput === randomNumber ){

				// change the displayed text
				text.innerHTML = "You win!";

				// the user can't click the button 
				guess.disabled = true;

				// the game is over
				gameOver = true;

				// remove event listener for enter key
				window.addEventListener('keyup', function (e) {}, false);
			}
			// if the guess is greater than the randomNumber
			else if(userInput > randomNumber){

				// change the displayed text
				text.innerHTML = "Too high, guess again!" + " Guess: " + guessCount + " of " + 3;
			}
			// if the guess is less than the randomNumber
			else if(userInput < randomNumber){

				// change the displayed text
				text.innerHTML = "Too low, guess again!" + " Guess: " + guessCount + " of " + 3;
			}	

		}
		// if no guesses are left
		if(guessLeft === 0 && gameOver != true){

			// change the displayed text
			text.innerHTML = "You ran out of guesses, you lose!";

			// the user can't click the button 
			guess.disabled = true;

			// remove event listener for enter key
			window.addEventListener('keyup', function (e) {}, false);
		}
	}	
})();