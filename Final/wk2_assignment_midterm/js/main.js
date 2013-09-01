/*
	Nicole Aitchison 
	8/31/2012
	PWA-1 1308
	Final
*/

(function(){

	// create an empty array to hold the students
	var students = [];

	// instantiate the new students using the constructor
	var studentOne = new Student("Nicole", "1234 Red St", "Winter Park", "Florida", [3.62, 3.58, 3.81], new Date());
	var studentTwo = new Student("Natalie", "5678 Orange St", "Orlando", "Florida", [3.47, 3.63, 3.72], new Date());
	var studentThree = new Student("Kaneisha", "8901 Yellow St", "Miami", "Florida", [3.86, 3.62, 3.58], new Date());

	// add all the students to the array
	students = [studentOne, studentTwo, studentThree];

	// create a var to store the next button
	var redButton = document.querySelector(".buttonred");
	// create a var to store the index of the current student
	// it will be used when disaplying the students info
	var currentIndex = 0;

	// call the function that will validate all the GPA scores
	validateGpa(students);


	// this function validates the GPA scores, they must be in a certain format
	function validateGpa(studentsArray){

		// boolean to keep track of whether or not the GPAs are valid
		var gpasAreValid = true;

		// for loop to go through the students array 
		for(var i = 0, max = students.length; i<max; i++){
			
			// this var will get the gpa array for each student and set store it
			// this will change for every loop
			var gpaArray = studentsArray[i].gpa;
			
			// this loop will go through the gpa and check each item
			for(var j = 0, max = gpaArray.length; j<max; j++){

				// this var will store the gpa score and type cast it to a string so it can be validated
				var gpaScore = String(gpaArray[j]);

				// each gpa must be in this format: #.##
				// so it must have a length of 4 and the decimal must be in the 1st index (0123)
				// if it doesn't follow that formation...
				if(gpaScore.length != 4 || gpaScore.indexOf('.') != 1){

					// then the GPAs are not valid
					gpasAreValid = false;
					// and console log that there has been an error
					console.log("Error: Invalid GPA Scores. Must be in #.## format.");
				}
			};
		};

		// so after the for loop checks all the gpa scores
		// if the GPAs are all valid...
		if(gpasAreValid){
			
			// then run the program
			runProgram();
		}
	};

	// this function will run the program
	function runProgram(){

		// display the first console log
		console.log("----- First Console Log -----");
		// so call the consoleLogFunction
		consoleLog();

		// create a new student and add it to the array
		var studentFour = new Student('Sophie', '2345 Green St', 'Tampa', 'Florida', [3.85, 3.94, 3.62], new Date());
		students.push(studentFour);

		// a student was added, so display the console log again
		console.log("----- Second Console Log -----");
		// and call the consoleLogFunction
		consoleLog();

		// call the function that will calculate the avg GPAs
		calcGpa();

		// add an event listener to the button so that the display will change when it's clicked
		redButton.addEventListener("click", displayStudent, false);

	}
	
	// this function will change the display when the button is clicked
	function displayStudent(e){

		// these vars store all the divs that will be edited
		var name = document.querySelector('#name');
		var address = document.querySelector('#address');
		var gpa = document.querySelector('#gpa');
		var date = document.querySelector('#date');
		var gpaavg = document.querySelector('#gpaavg');

		// the function will stop when all the students have been displayed once
		// so if the currentIndex doesn't equal the number of students in the students array
		if(currentIndex != students.length){

			// then set all the divs values to equal the current students info
			name.innerHTML = "Name: " + students[currentIndex].name;
			address.innerHTML = "Address: " + students[currentIndex].address;
			gpa.innerHTML = "GPA: " + students[currentIndex].gpa;
			date.innerHTML = "Date: " + students[currentIndex].date;
			gpaavg.innerHTML = "Average GPA: " + students[currentIndex].gpaavg;

			// and add 1 to the currentIndex so the next student will be displayed when the button is clicked 
			currentIndex++;
		}
		// else, the program has displayed all the students once so...
		else{

			// set the currentIndex to 0
			currentIndex = 0;
			// remove the event listiner from the button so that it can't be clicked
			redButton.removeEventListener("click", displayStudent, false);
			// and change the text on the button so that the user knows all the students have been displayed
			redButton.innerHTML = "DONE!!!";
		}
	};

	// this is the function for the console log
	function consoleLog(e){

		// for loop will go through every student in the student array and console log it's info
		for(var i = 0, max = students.length; i < max; i++){
			console.log("1. Name: " + students[i].name);
			console.log("2. Address: " + students[i].address);	
			console.log("3. GPA: [" + students[i].gpa + "]");
			console.log("4. Date: " + students[i].date);
		};

	}

	// this function is called to calc the avg gpa for each student
	function calcGpa(){
		// a foreach loop is used to call the prototype function for each student
		students.forEach(function(element){
			element.avgGpa();
		});
	};

})();
