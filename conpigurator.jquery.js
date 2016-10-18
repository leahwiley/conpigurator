;var conpigurator = {
	active:false,
	handleChange:function(event){
		if($(event.target).hasClass('conpiguratorInput')){
			if(event.target.value && event.target.value !== '' && typeof event.target.value === 'string'){
				if(event.target.dataset){
					var pigment = event.target.value;
					if(pigment.substring(0,1) !== '#') pigment = '#'+pigment;
					pigment = (pigment.length > 7)? pigment.substring(0,7) : pigment;
					conpigurator.conpigurateElements(event.target.dataset.conpigbg,'backgroundColor',pigment);
					conpigurator.conpigurateElements(event.target.dataset.conpigborder,'borderColor',pigment);
					conpigurator.conpigurateElements(event.target.dataset.conpigtext,'color',pigment);
				}
			}
		}
	},
	conpigurateElements:function(selector,colorProperty,pigment){
		if(selector){
			colorProperty = colorProperty || 'backgroundColor';
			$(selector).css(colorProperty,pigment);
		}
	},
	init:function(){
		if(!conpigurator.active){
			$(body).on('change',function(event){conpigurator.handleChange(event);});
			conpigurator.active = true;
		}
	}
};
