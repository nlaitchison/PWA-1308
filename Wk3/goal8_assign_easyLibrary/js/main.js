/*
	PWA1: Goal8: Simple Library App

	Nicole Aitchison
	PWA1 1308
	8/24/2013
*/

(function(){

	// var to store all the anchors
	var anchors = document.querySelectorAll('#container a')

	// var to store the returned function from the call to the library
	var returned = ryu(anchors);

	// console log var returned
	console.log(returned);

	// call the each funtion in the library and pass it the anchors
	ryu(anchors).each(function(){

		// change the bg color to gray for each anchor
		this.style.backgroundColor = 'gray';
		// create an onclick function for each anchor
		this.onclick = function(e){
			// prevent the anchor from going to the link
    		e.preventDefault();
    		// console log 'this'
    		console.log("this: " + this);
    	};

	});

})();  // end wrapper