# Conpigurator (Pigment Configurator)

Lightweight JS class for changing CSS color properties on page with designated inputs

When a new Conpigurator is constructed, the identified DOM element is given a data-conpigurator-index attribute and an "onChange" event listener. When the DOM element experiences a change event, it will trigger the Conpigurator object in memory associated with the element's conpigurator index to run its update function, changing the CSS properties of targeted elements specified in calls to the addTarget function.

#Example
```html
<p id="conpigurateMe">Target</p>
<input id="conpigurateU" type="text">
<script>
	// CONSTRUCTOR with chained target assignment
	var myConpigurator = new Conpigurator('conpigurateU')
		.addTarget('conpigurateMe','backgroundColor')
		.addTarget('conpigurateMe2','color');
	
	// Explicit target assignment
	myConpigurator.addTarget('conpigurateMe3','{CSS color property}');
	
	// Manual trigger application of myConpigurator color to targets
	myConpigurator.update();
</script>
```
#v1.2.0 - <a href="https://en.wikipedia.org/wiki/List_of_pig_breeds">AppalachianEnglish</a>
- Validate target element existence in addTarget function
- Validate CSS property name in addTarget function

#v1.1.0 - <a href="https://en.wikipedia.org/wiki/List_of_pig_breeds">AngelnSaddleback</a>
- Support CSS named color values using Hexadecimal code regex before forcing '#' to beginning of value

#v1.0.0 - AMYorkshire
- Standalone prototype constructor approach implemented
- Full vanilla JavaScript functionality with 3- and 6-digit Hexadecimal values
- Single Conpigurator can affect multiple properties and multiple elements
- Compatibility tested with IE9, IE10, Edge, Firefox 56.0.2, and Chrome 63.0.3239.84

#v0.0.1 - AksaiBlackPied
- Conpigurator has only been tested with full 6-digit Hexadecimal color values. RGB values and CSS color names are outright unsupported. 3-digit Hex values are untested.
- Vanilla conpigurator.js is NOT WORKING YET. I suspect the delegated change event listener is either being applied incorrectly or isn't catching the events.

#Development Goals
- conpigurator.min.js
```
