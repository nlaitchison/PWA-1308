/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7

	Nicole Aitchison
	PWA 1 1308
	8/22/2013
	
 */

(function(){

	var names = ['Nicole', 'Natalie', 'Sophie', 'Kaneisha', 'Joey'];
	var people = [];
	var interval;

	// for loop that instantiates 3 Person objects
	for(var i = 0; i < 3; i++){

		// instantiates a person with a random name from the array
		var personIndex = Math.floor(Math.random() * names.length);
		var person = new Person(names[personIndex], i + 1);

		// calls the function to update the html with each person's name and job
		populateHTML(person.name, "r"+(i+1)+"c1");
		populateHTML(person.job, "r"+(i+1)+"c2");
		
		// pushes the person to the array of people
		people.push(person);
		// splices the name out so that the same name won't be used more than once
		names.splice(personIndex,1);
		
		// console.log the person to make sure it's being created
		console.log(person);
	};

	// ensures that only one interval is running
	clearInterval(interval);
	// interval is set to 30 FPS, calls runUpdate function
	interval = setInterval(runUpdate, 1000 / 30); 

	// this function calls the update function for each person in the array
	function runUpdate(){
		people.forEach(function(element){
			element.update();
		});
	};

	// function to update the html based on the parameters passed in
	function populateHTML(data, field){
		var id = document.getElementById(field);
		id.innerHTML = data;
	}
	

})();  // end wrapper

