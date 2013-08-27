// Wizard Class File
// Keep the constructor small- Use the prototype

	var Wizard = function(options){
		this.name = options.name;
		this.power = options.power;
		this.strength = options.strength;
	};

	Wizard.prototype = {
		location: 'Earth',
		hello: function(){},
		die: function(){
			console.log(this.name + ' is dead!');
		}
	};




