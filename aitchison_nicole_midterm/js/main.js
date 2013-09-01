/*
	* Mid Terms for PWA-1 1304
	
	Nicole Aitchison
	8/20/13
	PWA1 1308
*/

(function(){

	// create a new date to add to the student objects
	var d = new Date();
	// create an array of 3 objects, each one is a student students
	var students = [
		{
		name: 'Nicole',
		address:{
			street: '4567 Test St',
			city: 'Winter Park',
			state: 'Florida'},
		gpa: [3.67, 3.54, 3.81],
		date: d,
		phone: "123-456-7890"
		},
		{
		name: 'Natalie',
		address:{
			street: '1234 Test Rd',
			city: 'Orlando',
			state: 'Florida'},
		gpa: [3.47, 3.63, 3.72],
		date: d,
		phone: "456-789-0123"
		},
		{
		name: 'Kaneisha',
		address:{
			street: '8901 Test Ave',
			city: 'Miami',
			state: 'Florida'},
		gpa: [3.86, 3.64, 3.58],
		date: d,
		phone: "789-012-3456"
		}
	];
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
		for(var i = 0, max = studentsArray.length; i<max; i++){
			
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

		// call the function to add data to students and pass it all the info for the student
		addData('Sophie', '2345 Green St', 'Tampa', 'Florida', [3.81, 3.73, 3.68], "112-345-6789");

		// a student was added, so display the console log again
		console.log("----- Second Console Log -----");
		// and call the consoleLogFunction
		consoleLog();

		// add an event listener to the button so that the display will change when it's clicked
		redButton.addEventListener("click", displayStudent, false);

	}

	// this is the function for the console log
	function consoleLog(){

		// for loop will go through every student in the student array and console log it's info
		for(var i = 0, max = students.length; i<max; i++){
			console.log("1. Name: " + students[i].name);
			console.log("2. Address: " + students[i].address.street + " " + students[i].address.city + ", " + students[i].address.state);
			console.log("3. GPA: [" + students[i].gpa + "]");
			console.log("4. Date: " + students[i].date);
			console.log("5. Phone: " + students[i].phone);
		};
	};

	// this function is used to add another student to the array
	// when it's called, all the student's info must be passed 
	function addData(name, street, city, state, gpa, phone){
		
		// a new student is created, all it's key values will be ther parameters values
		var newStudent = {
			name: name,
			address:{
				street: street,
				city: city,
				state: state},
			gpa: gpa,
			date: d,
			phone: phone
		}

		// then the new student will be pushed/added to the array of students
		students.push(newStudent);
	};

	// this function will change the display when the button is clicked
	function displayStudent(e){

		// these vars store all the divs that will be edited
		var name = document.querySelector('#name');
		var address = document.querySelector('#address');
		var gpa = document.querySelector('#gpa');
		var date = document.querySelector('#date');
		var gpaavg = document.querySelector('#gpaavg');
		var phone = document.querySelector('#phone');

		// the function will stop when all the students have been displayed once
		// so if the currentIndex doesn't equal the number of students in the students array
		if(currentIndex != students.length){

			// then set all the divs values to equal the current students info
			name.innerHTML = "Name: " + students[currentIndex].name;
			address.innerHTML = "Address: " + students[currentIndex].address.street + " " + students[currentIndex].address.city + ", " + students[currentIndex].address.state;
			gpa.innerHTML = "GPA: " + students[currentIndex].gpa;
			date.innerHTML = "Date: " + students[currentIndex].date.getMonth() + "/" + students[currentIndex].date.getDay() + "/" + students[currentIndex].date.getFullYear();
			gpaavg.innerHTML = "Average GPA: " + gpaAverage(students[currentIndex].gpa);
			phone.innerHTML = "Phone: " + students[currentIndex].phone;

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

	// this function is called in the displayStudent() to calculate the current student's average gpa, 
	function gpaAverage(gpa){

		// add up all the scores in the gpa array (there's always 3)
		var total = gpa[0] + gpa[1] + gpa[2];
		// then divide the total by the number of scores 
		var avg = total / 3;

		// and return the avg so it can be disaplayed
		// to fixed will drop the decimal after 2 places
		return avg.toFixed(2);
	}

})();






