/*
	PWA1: Goal8:  Simple Library

	var test = document.querySelectorAll('#test a');

	ryu(test).each(function(){
	
	});

*/

var ryu = function(elems){

    return new ryu.prototype.init(elems);

};

ryu.prototype = {

    init: function(elems){
	    this.elements = elems; // pass the existing array 
	},
    
    elements: [],

    each: function(callback){
    	for(var i = 0, max = this.elements.length; i < max; i++){
    		callback.call(this.elements[i]);
    		console.log(this.elements[i]);
    	}
    }

}; // end prototype

ryu.prototype.init.prototype = ryu.prototype;