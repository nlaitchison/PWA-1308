/*
	* Mid Terms for PWA-1 1304

	Nicole Aitchison 
*/

(function(){

	var d = new Date();
	var students = [
		{
		name: 'Nicole',
		address:{
			street: '1234 Red St',
			city: 'Winter Park',
			state: 'Florida'},
		gpa: [3.62, 3.58, 3.81],
		date: d
		},
		{
		name: 'Natalie',
		address:{
			street: '5678 Orange St',
			city: 'Orlando',
			state: 'Florida'},
		gpa: [3.47, 3.63, 3.72],
		date: d
		},
		{
		name: 'Kaneisha',
		address:{
			street: '8901 Yellow St',
			city: 'Miami',
			state: 'Florida'},
		gpa: [3.86, 3.62, 3.58],
		date: d
		}
	];

	console.log("----- First Console Log -----");
	for(var i = 0, max = students.length; i < max; i++){
		console.log("1. Name: " + students[i].name);
		console.log("2. Address: " + students[i].address.street + " " + students[i].address.city + ", " + students[i].address.state);	
		console.log("3. GPA: [" + students[i].gpa + "]");
		console.log("4. Date: " + students[i].date);
	};

	addData('Sophie', '2345 Green St', 'Tampa', 'Florida', [3.8, 3.9, 3.6]);

	function addData(name, street, city, state, gpa){
		var newStudent = {
			name: name,
		address:{
			street: street,
			city: city,
			state: state},
		gpa: gpa,
		date: d
		};

		students.push(newStudent);
	};

	console.log("----- Second Console Log -----");
	for(var i = 0, max = students.length; i < max; i++){
		console.log("1. Name: " + students[i].name);
		console.log("2. Address: " + students[i].address.street + " " + students[i].address.city + ", " + students[i].address.state);	
		console.log("3. GPA: [" + students[i].gpa + "]");
		console.log("4. Date: " + students[i].date);
	};

	var currentItemInArray = 0;

	var nextButton = document.querySelector('.buttonred'); 
	nextButton.addEventListener("click", showNext, false);
	
	function showNext(e){
		
		var name = document.querySelector('#name');
		var address = document.querySelector('#address');
		var gpa = document.querySelector('#gpa');
		var date = document.querySelector('#date');
		var gpaavg = document.querySelector('#gpaavg');

		if(currentItemInArray < students.length){
			
			name.innerHTML = students[currentItemInArray].name;
			address.innerHTML = students[currentItemInArray].address.street + " " + students[currentItemInArray].address.city + ", " + students[currentItemInArray].address.state;
			gpa.innerHTML = students[currentItemInArray].gpa;
			date.innerHTML = students[currentItemInArray].date;
			gpaavg.innerHTML = avgGpa(students[currentItemInArray].gpa);

			currentItemInArray++;

		}
		else{
			console.log("no more students");

			currentItemInArray = 0;
			nextButton.removeEventListener("click", showNext, false);
			nextButton.innerHTML = "DONE!!!";
		}
		
	}; 

	function avgGpa(gpa){
		var gpaTotal = gpa[0] + gpa[1] + gpa[2];
		var avg = gpaTotal/3;
		return avg.toFixed(2);
	};

})();
