/*
     Name: Nicole Aitchison	
	 Date: 08/08/13
     Class & Section:  PWA1-1308
     Comments: Goal2: The Duel - Part 2
 */

// self executing function, starts when script is called...
(function(){

	console.log("Start Fight!");

	// create an array for each player that contains their name[0], damage[1], and health[3]
	var playerOne = ["Spiderman", 20, 100];
	var playerTwo = ["Batman", 20, 100];


	// initiate the round, keeps track of which round the game is on
	var round = 0;

	// fight function, loops through and calculates damage to each player
	function fight(){

		// this will display the health of each player when the fight first starts
		alert(playerOne[0] + ":" + playerOne[2] + "   *START*   " + playerTwo[0] + ":" + playerTwo[2]);

		// there are only 10 rounds, for loop keeps track of that
		for(var i = 0; i < 10; i++)
		{

			// calculate the min damage for each player (half player's max damage)
			var minDmgOne = playerOne[1] * .5;
			var minDmgTwo = playerTwo[1] * .5;

			//calculates a random number of damage to each player (between player's half damage and maximum damage)
			var f1 = Math.floor(Math.random() * (playerOne[1] - minDmgOne) + minDmgOne);
			var f2 = Math.floor(Math.random() * (playerTwo[1] - minDmgOne) + minDmgOne);

			// calculate the damage to each player's health
			playerOne[2]-=f1;
			playerTwo[2]-=f2;

			// traces out each player's health to the console
			console.log(playerOne[0] + ":" + playerOne[2] + " " + playerTwo[0] + ":" + playerTwo[2]);

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
				alert(playerOne[0] + ":" + playerOne[2] + "   *START*   " + playerTwo[0] + ":" + playerTwo[2]);
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
		if(playerOne[2] < 1 && playerTwo[2] < 1)
		{
			// then both of the players died
			result = "You Both Die";
		}
		// else if player one has a health under one
		else if(playerOne[2] <1){
			// then player two wins
			result = playerTwo[0] + " WINS!!!";
		}
		// else if player two has a health under one
		else if(playerTwo[1] < 1)
		{
			// then player one wins
			result = playerOne[0] + " WINS!!!";
		}
		// return the result to teh var that called the function
		return result;
	}

	// call the fight function to start the whole program
	fight();

})();

