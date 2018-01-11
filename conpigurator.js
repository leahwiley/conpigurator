/*	
	https://github.com/nathanielwiley/conpigurator 
	CONPIGURATOR (v1.4.0 - AucklandIsland) By Nathaniel Wiley
	2018-1-11
*/
;"use strict";
var ConpiguratorArray = [];
var ConpiguratorHexRegex = /#?[a-fA-F0-9]{3,6}/;
function Conpigurator (id,hexOnly) {
	this.el = document.getElementById(id);
	if(this.el !== null){
		this.hexLock = (typeof(hexOnly) === 'boolean')? hexOnly : false;
		this.el.setAttribute('data-conpigurator-index',ConpiguratorArray.length);
		this.targets = [];
		this.update = function () {
			var hue = this.el.value;
			var isHex = (hue.match(ConpiguratorHexRegex) !== null)? true : false;
			var validHue = (this.hexLock && !isHex)? false : true;// No rgb or named color validation. RGB values totally untested anyway.
			if(validHue){
				if(isHex && hue.substring(0,1) !== '#'){
					hue = '#'+hue;
					//this.el.value = hue;// Optional? If input is part of form submission, they might not want the # on the back end
				}
				for(var idx in this.targets){
					document.getElementById(this.targets[idx].ID).style[this.targets[idx].prop] = hue;
				}
			}
			return this;
		};
		this.addTarget = function (id,property) {
			id = id || '';
			property = property || 'backgroundColor';
			var targetEl = document.getElementById(id);
			if(targetEl !== null && targetEl.style[property] !== undefined){ this.targets.push({ID:id,prop:property}); }
			return this;
		};
		this.hexOnly = function(hexOnly) {
			this.hexLock = (typeof(hexOnly) === 'boolean')? hexOnly : !this.hexLock;
			return this;
		};
		ConpiguratorArray.push(this);
		return this;
	} else {
		return null;
	}
}
document.body.addEventListener('change',function(event){ 
	ConpiguratorArray[Number(event.target.getAttribute('data-conpigurator-index'))].update();
});
