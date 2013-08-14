/*
     Name: Nicole Aitchison	
	 Date: 08/13/13
     Class & Section:  PWA1-1308
     Comments: Goal4: The Duel - Part 3
*/

// self executing function, starts when script is called...
(function(){

	console.log("Start Fight!");

	// create an object for each player that contains their name[0], damage[1], and health[3]
	// add the players to an array
	var players = [
		playerOne = {
			name:"Spiderman", 
			dmg: 20, 
			health: 100
		},
		playerTwo = {
			name: "Batman",
			dmg: 20,
			health: 100
		}
	];

	// initiate the round, keeps track of which round the game is on
	var round = 0;
	// var to keep track of whether the game is over or not
	var gameOver = false;

	// fight function, loops through and calculates damage to each player
	
	
	var fight = document.querySelector('.buttonblue');
	fight.onclick = function(fighting){
		// if the game isn't over then run the contents of the fight function
		if(gameOver === false){
			// display round number
			var displayRound = document.querySelector('#round');
			displayRound.innerHTML = "Round: " + round;

			// this will display the health of each player when the fight first starts
			//alert(players[0].name + ":" + players[0].health + "   *START*   " + players[1].name + ":" + players[1].health);
			var playerOneDisplay = document.querySelector('#kabal');
			playerOneDisplay.innerHTML = players[0].health;

			var playerTwoDisplay = document.querySelector('#kratos');
			playerTwoDisplay.innerHTML = players[1].health;

			// calculate the min damage for each player (half player's max damage)
			var minDmgOne = players[0].dmg * .5;
			var minDmgTwo = players[1].dmg * .5;

			//calculates a random number of damage to each player (between player's half damage and maximum damage)
			var f1 = Math.floor(Math.random() * (players[0].dmg - minDmgOne) + minDmgOne);
			var f2 = Math.floor(Math.random() * (players[1].dmg - minDmgOne) + minDmgOne);

			// calculate the damage to each player's health
			players[0].health-=f1;
			players[1].health-=f2;

			// conditional so that the health won't display as negative numbers
			// if the health is below 0 then set it to equal 0
			if(players[0].health < 1)
			{
				players[0].health = 0;
			}
			if(players[1].health < 1)
			{
				players[1].health = 0;
			}

			// traces out each player's health to the console
			console.log(players[0].name + ":" + players[0].health + " " + players[1].name + ":" + players[1].health);

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
				playerOneDisplay.innerHTML = players[0].health;
				playerTwoDisplay.innerHTML = players[1].health;
				
			}
			// if there is a winnder
			else{
				// then display the result which is returned by the winnerCheck function
				alert(result);	
			}
		}
	}

	// winnerCheck function checks to see if there's a winner 
	function winnerCheck(){
		// make var to display result
		var displayResult = document.querySelector('#round');
		// the result will default to no winner at the beggining of the function
		var result = "no winner";
		// conditionals to check for a winner
		// check to see if both players have a health that's less then one
		if(players[0].health < 1 && players[1].health < 1)
		{
			// then both of the players died
			displayResult.innerHTML = "You Both Die...";
			
			//set gameOver to equal true so it doesn't continue
			gameOver = true;
			console.log(gameOver);
		}
		// else if player one has a health under one
		else if(players[0].health <1){
			// then player two wins
			displayResult.innerHTML = players[1].name + " WINS!!!";

			//set gameOver to equal true so it doesn't continue
			gameOver = true;
			console.log(gameOver);
		}
		// else if player two has a health under one
		else if(players[1].health < 1)
		{
			// then player one wins
			displayResult.innerHTML = players[0].name + " WINS!!!";
			
			//set gameOver to equal true so it doesn't continue
			gameOver = true;
			console.log(gameOver);
		}
		// return the result to teh var that called the function
		return result;
	}

})();

