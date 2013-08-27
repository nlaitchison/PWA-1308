/* 
	Arena Battle!!!
	Author: JavaScript Development Team
	PWA1: Goal 8
*/

/*
	=====================================================
	Javascript pattern: self-executing function
	syntax: (function(){})();
	
	Create a private scope for the application's main code
*/

(function(){
	
	// Create the wizards
	var gandolf = new Wizard({
		name: "Gandolf the Grey",
		power: "fire",
		strength: 20
	});

	var dementor = new Wizard({
	name: "Dementor",
	power: "shadow",
	strength: 15
	});

	var merlin = new Wizard({
	name: "Merlin",
	power: "earth",
	strength: 30
	});

	// Create an arena to fight in
	var thunderDome = new Arena({
		name: "The ThunderDome",
		location: "Skyrim"
	});

	// add the wizards to the arena
	thunderDome.register(gandolf);
	thunderDome.register(dementor);
	thunderDome.register(merlin);

	thunderDome.fight();

})();



