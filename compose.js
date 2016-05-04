console.log('start');
// right to left with compose
var pageValidators = [
	function () { return null; },
	function () { return 'no'; },
	function () { return 'yes'; },
	function () { return null; } 
];

var returnIfError = function (fn) {
	return function (result) {	
		return result || fn();
	};
}

var returnIfErrorValidators = _.map(pageValidators, returnIfError);

var validator = _.compose.apply(null, returnIfErrorValidators);

var result = validator();

// Should be 'yes'
console.log('result is: ' + result);