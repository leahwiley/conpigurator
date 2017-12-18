;var ConpiguratorArray = [];
function Conpigurator (id) {
	this.el = document.getElementById(id);
	this.el.setAttribute('data-conpigurator-index',ConpiguratorArray.length);
	this.targets = [];
	this.el.addEventListener('change',function(event){
		ConpiguratorArray[Number(event.target.getAttribute('data-conpigurator-index'))].update();
	});
	this.update = function () {
		var hex = this.el.value;// Assumes this.el.value is a Hexadecimal value
		if(hex.substring(0,1) !== '#') hex = '#'+hex;
		for(var idx in this.targets){
			document.getElementById(this.targets[idx].ID).style[this.targets[idx].prop] = hex;
		}
		return this;
	};
	this.addTarget = function (id,property) {// No safeguards against ID or property name typos OR incompatible property names
		id = id || '';
		property = property || 'backgroundColor';
		this.targets.push({ID:id,prop:property});
		return this;
	};
	ConpiguratorArray.push(this);
	return this;
}
/*	
	CONPIGURATOR By Nathaniel Wiley
	==========
	var myConpigurator = new Conpigurator('inputID')
		.addTarget('targetID','backgroundColor')
		.addTarget('targetID','color')...;
	myConpigurator.addTarget('targetID','CSS color property');// Add 
	myConpigurator.update();// Force application of myConpigurator
	==========
	1.0.0 - 2017-12-18 
		- Functionality with Hexadecimal input proven in:
		IE9, IE10, Edge, Firefox 56.0.2, and Chrome 63.0.3239.84
*/