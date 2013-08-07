/*
     Name: Nicole Aitchison	
	 Date: 08/06/13
     Class & Section:  PWA1-1308
     Comments: Goal1: The Duel - Part I
 */

// self executing function, starts when script is called...
(function(){

	console.log("Start Fight!");

	// create variables for each player, their health and damage
	// player names
	var playerOneName = "Spiderman";
	var playerTwoName = "Batman";

	// player damages
	var playerOneDmg = 20;
	var playerTwoDmg = 20;

	// player 
	var playerOneHealth = 100;
	var playerTwoHealth = 100;

	// initiate the round, keeps track of which round the game is on
	var round = 0;

	// fight function, loops through and calculates damage to each player
	function fight(){

		// this will display the health of each player when the fight first starts
		alert(playerOneName + ":" + playerOneHealth + "   *START*   " + playerTwoName + ":" + playerTwoHealth);

		// there are only 10 rounds, for loop keeps track of that
		for(var i = 0; i < 10; i++)
		{

			// calculate the min damage for each player (half player's max damage)
			var minDmgOne = playerOneDmg * .5;
			var minDmgTwo = playerTwoDmg * .5;

			//calculates a random number of damage to each player (between player's half damage and maximum damage)
			var f1 = Math.floor(Math.random() * (playerOneDmg - minDmgOne) + minDmgOne);
			var f2 = Math.floor(Math.random() * (playerTwoDmg - minDmgOne) + minDmgOne);

			// calculate the damage to each player's health
			playerOneHealth-=f1;
			playerTwoHealth-=f2;

			// traces out each player's health to the console
			console.log(playerOneName + ":" + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);

			// checks for a winner 
			// result will equal the winnerCheck function, the function will figure out the winner
			var result = winnerCheck();
			// the result will be traces to the console
			console.log(result);
			
			// conditional to check to see if there's a winner yet
			// if there is no winner
			if(result === "no winner")
			{
				// add one to the round since it's moving to the next round
				round++;
				// display the health of each player before moving on to the next round
				alert(playerOneName + ":" + playerOneHealth + "   *START*   " + playerTwoName + ":" + playerTwoHealth);
			}
			// if there is a winnder
			else{
				// then display the result which is returned by the winnerCheck function
				alert(result);
				// stop the fight function from continuing to loop since the game is over 
				break;
			}
		}
	}

	// winnerCheck function checks to see if there's a winner 
	function winnerCheck(){
		// the result will default to no winner at the beggining of the function
		var result = "no winner";
		// conditionals to check for a winner
		// check to see if both players have a health that's less then one
		if(playerOneHealth < 1 && playerTwoHealth < 1)
		{
			// then both of the players died
			result = "You Both Die";
		}
		// else if player one has a health under one
		else if(playerOneHealth <1){
			// then player two wins
			result = playerTwoName + " WINS!!!";
		}
		// else if player two has a health under one
		else if(playerTwoHealth < 1)
		{
			// then player one wins
			result = playerOneName + " WINS!!!";
		}
		// return the result to teh var that called the function
		return result;
	}

	// call the fight function to starts the whole program
	fight();

})();

