/*
     Name:
     Date:
     Class & Section:  PWA1-####
     Comments: "Goal 2: JavaScript Practice"
 */

// scope wrapper (self executing function)
(function(){
	
/* 
	===============================================
	RESEARCHING
	-----------------------------------------------
	To find documentation, use http://dochub.io
*/	
	
/* 
	===============================================
	RECAP:  Data Types
	-----------------------------------------------
     "string"			              string literal
     1, 3.14, 10e10			  number literal
     TRUE / FALSE			  boolean literal
     ["a", "b", "c"]				  array literal
     function(arg, arg2){}	  function literal
     undefined					  undefined
*/
	

/*
	===============================================
	RECAP:  Variable Declarations
	-----------------------------------------------
	syntax, comma separated, undefined declarations
*/

console.log('------Recap Variables ----------');

	var nothing,
	myNum = 2,
	myBoolean = true,
	myArray = [10, "James Bond", true, function(){}],
	fn = function(){};

	console.log('myArray:', myArray[1]); // Getter

	myArray[1] = 'msBond'; // Setter
	console.log('myArray:', myArray[1]); 

/*
	===============================================
	RECAP:  conditionals
	-----------------------------------------------
    syntax, condition, different types of conditionals

	a CONDITION is a boolean test between two values, the resulting boolean can be saved 

		comparison operators:
		<, >, >=, <=,!=,!==,!

		conditional syntax:
			if (condition) {
	  			//block of code or ‘actions’
			};

		== 	is the equality operator, does not check against data type
		=== is the identity operator, checks data type match - will use this

        Best Practice:  Use identity operator 99% of the time
*/	

console.log('------Recap Conditionals ----------');

	if("1" == 1){
		console.log("True");
	}
	else{
		console.log("False");
	}

	if(1 == 1){
		console.log("True");
	}
	else{
		console.log("False");
	}

	if("1" === 1){
		console.log("True");
	}
	else{
		console.log("False");
	}

	/* 	==============================================================
		if - else statements (allows only for one option)
			
		if (a < b){
			//execute this block of code if a is less than b
		}else{
			//execute this block of code
		};
  		================================================================
  	*/



	/* 	==============================================================
		if - else if - else statements (allows for multiple conditionals

		if (a < b){
			//execute this block of code if a is less than b
		}else if{
			//execute this block of code
		}else{
			//execute this block of code
		};
  		================================================================
  	*/



  	/*
         Logical Operators
             && = AND
             || = OR
	*/

	if((1 === 1) && ("hi" === "hi")){
		console.log("True");
	}

	if((1 === "1") || ("hi" === "hi")){
		console.log("True");
	}


	/*
		Ternary conditional:

		    conditional ? true : false;

			same as:

				if (weather === "Cloudy"){
					mood = 
				}else{
					//false
				};
	*/

	(1 === 1) ? console.log("terinary conditional is true") : console.log("terinary conditioal is false");

/*
	===============================================
	RECAP:  Functions
	-----------------------------------------------
	syntax, arguments, returns, variable scope
*/

console.log('------Recap Functions ----------');

    //	1.  BASIC FUNCTION:

    	var myctr = 1;
    	function myCounter(){
    		myctr++;
    		console.log("counter = ", myctr);
    	}

    	myCounter();

    //	2.  ANONYMOUS FUNCTION

    	var myctr = 1;
    	var myCounter = function(){
    		myctr++;
    		console.log("counter =", myctr);
    	}

    	myCounter();
    	myCounter();

    //Anonymous passing arguments

    	var value1 = 1;
    	var value2 = 2;

    	var myCounter = function(var1, var2){
    		console.log("var1:", var1 + " " + "var2:", var2);
    		console.log("counter =", var1 + var2);
    	}

    	console.log("value1:", value1 + " " + "value2:", value2);
    	myCounter(value1, value2);

    //Anonymous passing arguments WITH RETURN



/*******************************************************************
 	REVIEW COMPLETE
*******************************************************************/


/*
	===============================================
	MORE:  Strings
	-----------------------------------------------
*/

console.log('------ MORE Strings ----------');

var str1 = 'I love JavaScript! ';
var str2 = 'JavaScript loves me!';
var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// Use charAt() to console.log the 'v' in str1.

console.log(str1.charAt(4));

// Use indexOf() to console.log the index of 'm' in str2.

console.log(str2.indexOf("a"));

// Use lastIndexOf() to console.log the last 'a' in str1.

console.log(str2.lastIndexOf("a"));

// Use length to console.log the length in str1.

console.log(str1.length);

// Use split() to console.log an array of the ABC's using the abc variable.
// EX: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

console.log(abc.split(""));

var test = (abc.split(""));
console.log(test[3]);

//STUDENT ACTIVITY 1:
// Use substr() to console.log 'JavaScript!' from str1.

console.log(str1.substr(7,11));

// Use concat() to console.log 'I love JavaScript ! JavaScript loves me!' with str1 and str2.

console.log(str1.concat(str2));


//STUDENT ACTIVITY 2:
// Use substring() to console.log 'JavaScript' from str2.


//STUDENT ACTIVITY 3:
// 1. Use toLowerCase() to console.log the str1 all in lowercase letters.
// 2. Use toUpperCase() to console.log the str1 all in uppercase letters.

console.log(str1.toLowerCase());
console.log(str1.toUpperCase());

/*
	===============================================
	MORE:  Numbers
	-----------------------------------------------
*/

console.log('------ MORE Numbers ----------');

var num = 4567896;
var dec = 33.123456;

// Use toExponential() console.log num in exponential notation with two decimals.

console.log(num.toExponential(2));

// Use toPrecision() console.log dec as four numbers.
console.log(dec.toPrecision(6));

//STUDENT ACTIVITY 4:
//What method would you use to console.log the variable dec with two decimals.

console.log(dec.toFixed(2));

// Use toString() to console.log the type of num.

/*
	===============================================
	MORE:  Booleans

	TRUTHY / FALSY
	-----------------------------------------------
	Because of JavaScript's loose syntax, some values are == false, 
	we call these FALSY.
		
		false 		== false  	| true
		0 			== false	| true
		"" 			== false	| true
		undefined 	== false	| true  //var does not exist
		NaN 		== false	| true 
	
	So the following conditional fails...
	-----------------------------------------------
*/

console.log('------ MORE Booleans ----------');

var x = 9 * "K";
console.log(x);

if(x){
	console.log("its true, the value is:", x);
}
else{
	console.log("its false, the value is:", x);
}
	
/*
	===============================================
	MORE:  Arrays
	-----------------------------------------------
*/

console.log('------ MORE Arrays ----------');

var arr1 = [1, 2, 3, 4, 5, 6, 7];
var arr2 = ['a', 'b', 'c', 'd', 'e'];
var arr3 = ['apple', 'orange', 50393, 7.324];

// indexOf()
//Returns the first (least) index of an element within the array equal
//to the specified value, or -1 if none is found.

console.log(arr2.indexOf("c"));

// join()
// Joins all elements of an array into a string.

console.log(arr2.join("."));

// pop()
// Removes the last element from an array and returns that element
// shift() removes the first element from an array.

var element = arr1.pop();
console.log(element);

// push()
// Adds one or more elements to the end of an array and returns the new
//   length of the array
// unshift() - Adds one or more elements to the front of an array.

arr2.push("f");
console.log(arr2);

// reverse()
// Reverses the order of the elements of an array

//console.log(arr1.reverse());

// splice()
// Adds and/or removes elements from an array.

console.log(arr1.splice(4,2));
console.log(arr1);

// forEach()
// Calls a function for each element in the array.

arr1.forEach(function(element,index,array){
	console.log("element", element);
	console.log("index", index);
	console.log("array", array);
});


/*******************************************
 STUDENT ACTIVITY 5:

 1.  concatenate the firstQtr and secondQtr arrays and store the results in the
        variable combined
 2.  console.log the results stored in the variable combined
 3.  combine all three arrays and stored the results in the variable combined
 4.  console.log the results stored in the variable combined

 Use the combined variable for items 5 and 6 the below:
 5.  join the array elements into a string and console.log the results
 6.  remove the last element of the array and console.log the results and the new array
 7.  use array "secondHalfYr", and reduce the array to "Sept" & "Oct"
        and console.log the results
 ********************************************/

    var firstQtr = ["Jan", "Feb", "Mar"];
    var secondQtr = ["Apr", "May", "Jun"];
    var secondHalfYr = ["Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    
    var combined = firstQtr.concat(secondQtr);
    console.log("concat 2 arrays:", combined);

    var combined = combined.concat(secondHalfYr);
    console.log("concat with 3rd array:", combined);

    console.log("join array:", combined.join(" "));

    console.log("took out dec:", combined.pop());
    console.log("show array:", combined);

    var x = secondHalfYr.slice(2,4);
    console.log("slice:", x);

/*
	===============================================
	MORE:  Operators (typeof())
	-----------------------------------------------
	
	How to test for a variable's existence (typeof)	
*/

console.log('------ MORE Operators - typeof() ----------');

	console.log(typeof 5);
	console.log(typeof "hi");

	var string1 = "hello";
	console.log(typeof string1);

	console.log(typeof true);
	console.log(typeof (function(){})());
	console.log(typeof obj1);
	console.log(typeof [10,20,30,40]);
/*
	===============================================
	MORE:  Conditionals (switch())
	-----------------------------------------------
	
	- “if” conditionals are perfect for comparing several sets of varying conditions  
	- switch statements will evaluate a single conditional expression and
		then perform an equality check against possible cases

	Traditional IF and IF Else
	if (condition) {
		// statements1
	};

	if (condition) {
		// statements1
	} else {
		// statements2
	};	

*/

console.log('------ MORE Conditionals - Switch ----------');

	var fruit = "chicken";
	switch(fruit){
		case "oranges":
			console.log("oranges are $0.59 a pound");
			break;
		case "apples":
			console.log("apples are $0.45 a pound");
			break;
		case "bananas":
			console.log("bananas are $0.79 a pound");
			break;
		default:
			console.log("Sorry, we are out of " + fruit + ".");
		}

/*******************************************
 STUDENT ACTIVITY 6:

	1.  create a "Switch" conditional that does the following:
		a.  have a var named "age" initialized to a number
		b.  if age 13 then console.log "child"
			if age 18 then console.log "adult"
			if no age then console.log "No answer"
********************************************/

	var age = 19;
	switch(age){
		case 13:
			console.log("child");
			break;
		case 18:
			console.log("adult");
			break;
		default:
			console.log("no answer");	
	}


/*
	===============================================
	MORE:  Functions
	-----------------------------------------------

	- we reviewed returns and we went through examples with returns only 
		returning one value
	- below shows how to returning multiple values using arrays

*/

console.log('------ MORE Functions ----------');


	/* 
		Self Executing Functions
	
		(function(){   //this is a basic function which includes () at end
			//code goes here
		})();          //the () tells the function to run immediately

		Normal function:
			var fn = function(){};  //a normal function
		
			fn();	//invoking the fn function

			self function - combining the 2 statement above
				var fn = (function(){})();	
	*/	


/*
	===============================================
	For / While Loop, basic logic structure
	-----------------------------------------------
	
	Normal Operations:
		1. initialize a counter;
		2. loop/repeat a block of code until condition is met;
			the condition that a loop checks for is usually against the counter variable
		3. the most common use of loops is to cycle through all the 
			values of an array or other forms of data set (such as objects)
		4. a counter is needed in the loop - which is a simple numeric 
			variable that increases or decreases 
			- common variable names for counters are i and x - most developers 
				reserve these names for this purpose

	WHILE LOOP:  while()
		- the while loop is the simplest conditional loop
		- before the code is executed, the condition is checked
		- if it evaluates to true, the code is run, and the loop returns to the 
			condition check again
		- it will repeat this process until the condition becomes false, which 
			will then skip the code and exit the loop
		
		Basic While Loop:
			while ( condition ) {
				//code goes here
			}			
*/
console.log('------ While / Loop ----------');

	var numOfBeers = 10;
	while(numOfBeers >0){
		console.log(numOfBeers + " kegs on the wall");
		numOfBeers--;
	}
	
/*
	===============================================
	For Loop, prebuilt logic structure
	
	for(initialize; condition; increment){}

	FOR LOOP: for()
		- a for loop is an increment-based loop, where the increment is 
			part of the condition
		- there are 3 statements inside the condition of a for loop: 
			a.  first a counter variable is initialized
			b.  second the “condition check”
			c.  and third, increment the variable and perform the code 
				till the end of the loop 
			d.  each is separated by semicolon, just like normal statements

		Basic FOR Loop:
			for ( var i = 0;  i < 5;  i++ ) {
				//code goes here
			};
*/

console.log('------For Loop ----------');

	for(var beers = 10; beers > 0; beers--){
		console.log(beers + " bottles of beer on the wall");
	}

	/* 
		array.Length
	
		- if we wanted to cycle through all the values in an array, 
			we need to know how many values are in the array
		- this is where the .length property comes in - this will return 
			a number value, equal to the number of elements in the array 
		- an array’s numeric index begins at 0  
		- in the example below, the last index of the array would be 4 
			- the  .length property returns the count, which would be 5	
	*/	

	var myNums = [1,2,3,4,5];
	console.log("length", myNums.length);

	/* 
		using the for() loop with .length

		- the for loop is the most commonly used in programming, since 
			the increment makes it easy to cycle through arrays or objects.  
		- to cycle through each index of an array, we could use the .length 
			property, and use the counter i as the index, such as:

		for ( var i=0; i<myNums.length; i++){
			console.log( myNums[i] );
		};

		- however, this is not the most efficient way...
		- it is inefficient on the CPU

		- depending on the size of an array, it can be more efficient to 
			save the array length in a variable, inside the first statement
	*/

	for(var i = 0, j = myNums.length; i<j; i++){
		console.log('1. length in the for loop:', myNums[i]);
	}

	/*
		BREAK...

		- in some situations, you may need to force a loop to stop
		- by using the "break" statement, any loop will stop running at the 
			break point, and perform no more iterations
	*/

	for(var i = 0, j = myNums.length; i<j; i++){
		if(i === 3){
			console.log("testing out the break and it broke");
			break;
		}
		console.log("2.length in for loop:", myNums[i]);
	}

	/*
		CONTINUE...

		- while the break statement will stop a loop and exit it, the continue 
			statement will stop a loop’s current iteration, and continue 
			on to the next iteration
	*/


/*******************************************
 STUDENT ACTIVITY 7:

	1.  create an array with the following cartoon characters
		(Superman, Batman, Wolverine, Iceman)

		a.  create a for loop using the slower method (3 parameters)
			- in the loop just console.log the values
		b.  create a for loop using the faster method (4 parameters)
			- in the loop just console.log the values
********************************************/

	var heroes = ["Superman", "Batman", "Wolverine", "Iceman"];

	// best practice
	for(var i=0, max=heroes.length; i<max; i++){   
		console.log(heroes[i]);
	}

	// slower version
	for(var i=0; i<heroes.length; i++){
		console.log(heroes[i]);
	}


/*******************************************
    STUDENT ACTIVITY 8: (More Practice):

     1.  output "name" in lowercase
     2.  output "name" in uppercase
     3.  output the character in the 3rd index
     4.  output the index number where the work "nice" us located
     5.  output the characters in "name" between indexes 10 & 14
     6.  create a array variable using "name", and output the array
     7.  output the item in index 4
     8.  join all elements of the array separated by a "|"
     9.  output the array in reverse order
     10. output the current array without the first item
     11. output the array with a new item at the end of the array
     - add "NEW VALUE"
     12. output the array without "NEW VALUE"
********************************************/

    console.log('------ More PRACTICE ----------');

    var name = 'This is a nice change of pace';



})();