/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

(function(){
	
	// person object constructer
	var Person = function(name, row){

		// sets eveything for the person
	 	this.name = name;
	 	this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)];
	 	this.job = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];
	 	this.row = row;

	 	// updates the action html for the person
	 	var id = document.getElementById("r"+this.row+"c3");
	 	id.innerHTML = this.action;
	}

	// sets person so that main.js will be able to access it
	window.Person = Person;
	
	// defines all the job and action choices for each person
	Person.jobs = ["Teacher", "Farmer", "Student", "Developer", "Designer"];
	Person.actions = ["Sleeping", "Eating", "Working"];

	// update function to change the actions randomly
	Person.prototype.update = function(){

		// basically prevents it from constantly changing the actions everytime the update is called
		// it's more random now
		if(Math.floor(Math.random() < .01)){

			// the person's action is changed
			this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)];

			// the person's action is updated in the html
			var id = document.getElementById("r"+this.row+"c3");
	 		id.innerHTML = this.action;
		}
		
	};

 })();  // end wrapper
