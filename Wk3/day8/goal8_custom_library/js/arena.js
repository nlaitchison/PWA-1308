// Arena Class
	
	var Arena = function(options){
		this.name = options.name;
		this.location = options.location;
	};

	Arena.prototype = {
		fighters: [],
		register: function(fighter){
			// push argument into an array 
			this.fighters.push(fighter);
			console.log(fighter.name + ' has joined ' + this.name);
		},
		fight: function(){
			var f1 = Math.floor(Math.random() * this.fighters.length);
			var f2 = Math.floor(Math.random() * this.fighters.length);

			while (f1 == f2){
				f2 = Math.floor(Math.random() * this.fighters.length);
			};

			var fighter1 = this.fighters[f1];
			var fighter2 = this.fighters[f2];

			// higher strength wins, loser dies
			var loser = fighter1.strength > fighter2.strength ? fighter2 : fighter1;

			loser.die();
		}
	};



