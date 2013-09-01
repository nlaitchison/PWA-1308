
// Student object constructor
var Student = function(name, street, city, state, gpa, date){

	// sets eveything for the Student
 	this.name = name;
 	this.address = street + ", " + city + ", " + state;
 	this.gpa = gpa;
 	this.date = date.toLocaleDateString();
 	this.gpaavg = 0;

}

// sets Student so that main.js will be able to access it
window.Student = Student;

// prototype that calculates the avg gpa
Student.prototype.avgGpa = function(){

	// adds up the each gpa in the students gpa array
	var gpaTotal = this.gpa[0] + this.gpa[1] + this.gpa[2];
	// then divide that number by the number of gpas
	var avg = gpaTotal/3;

	// set the students avg gpa to equal the result with 2 decimal places (#.##)
	this.gpaavg = avg.toFixed(2);
};

	
