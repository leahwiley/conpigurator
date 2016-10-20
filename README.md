# Conpigurator (Pigment Configurator)

Lightweight JS library for changing CSS color properties on page with designated form fields

Conpigurator.jquery.js is dependent on jQuery methods to become more succinct and provide IE compatibility. If you are already loading jQuery, this file has an even smaller footprint. If IE compatibility is necessary, jQuery + this file will have you conpigurating in a flash.

Conpiguator.js uses vanilla javascript. So, it has no dependencies, but it is not IE compatible.

Conpiguration is run by a delegated change event handler applied to the body. It checks for the change event's target to have the "conpiguratorInput" class. If so, it checks for the existence of any of the following data attributes: data-conpigbg, data-conpigborder, data-conpigtext. The value of these attributes is expected to be an element selector string. The Conpigurator library will then change the backgroundColor, borderColor, or (font) color of the selected element(s) based on the values of data-conpigbg, data-conpigborder, and data-conpigtext respectively.

#Example
```html
<div id="conpigurateMe">Target</div>
<label for="conpig--bg">Background</label>
<input id="conpig--bg" type="text" class="conpiguratorInput" data-conpigbg="#conpigurateMe"/>
<label for="conpig--border">Border</label>
<input id="conpig--border" type="text" class="conpiguratorInput" data-conpigborder="#conpigurateMe"/>
<label for="conpig--text">text</label>
<input id="conpig--text" type="text" class="conpiguratorInput" data-conpigtext="#conpigurateMe"/>
```

#v0.0.1 - <a href="https://en.wikipedia.org/wiki/List_of_pig_breeds">AksaiBlackPied</a>
- Conpigurator has only been tested with full 6-digit Hexadecimal color values. RGB values and CSS color names are outright unsupported. 3-digit Hex values are untested.
- Vanilla conpigurator.js is NOT WORKING YET. I suspect the delegated change event listener is either being applied incorrectly or isn't catching the events.

#Development Goals
- Get Vanilla conpigurator.js working (as in, loading the library and calling it's init function is a set-and-forget process leaving all conpigurating to be run off delegated change event handling)
- Support 3-and-6-digit Hexadecimal, rgb, rgba, and CSS named color values
- Write conpigurator as a jQuery plugin with a signature like: 
```html
$({selector}).conpigurator({[camel-cased CSS color property]:[selector of element to conpigurate],...});
```
