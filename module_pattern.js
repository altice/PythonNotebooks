// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

(function () {
	// ... all vars and functions are in this scope only
	// still maintains access to all globals
}());


(function ($, YAHOO) {
	// now have access to globals jQuery (as $) and YAHOO in this code
}(jQuery, YAHOO));

var MODULE = (function () {
	var my = {},
		privateVariable = 1;

	function privateMethod() {
		// ...
	}

	my.moduleProperty = 1;
	my.moduleMethod = function () {
		// ...
	};

	return my;
}());


var MODULE = (function (my) {
	my.anotherMethod = function () {
		// added method...
	};

	return my;
}(MODULE));


          dictionary={ 
     "Violates organizational policy":["2016-10-21T00:00:00", 0.176249], 
      "Purchases mail order bride":["2016-11-21T00:00:00", 0.276249],
      "Drives under alcohol":["2016-12-21T00:00:00", 0.476249]
   
};



console.log(dictionary)