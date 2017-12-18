/*	
	https://github.com/nathanielwiley/conpigurator 
	CONPIGURATOR (v1.0.0 - AMYorkshire) By Nathaniel Wiley
	2017-12-18
*/
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
