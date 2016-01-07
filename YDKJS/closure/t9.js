/**
 * Created by qiushili on 1/6/16.
 */
var foo = (function CoolModule(id) {
	function change() {
		publicAPI.identify = identify2;
	}

	function identify1() {
		console.log(id);
	}

	function identify2() {
		console.log(id.toUpperCase());
	}

	var publicAPI = {
		change: change,
		identify: identify1
	};

	return publicAPI;
})("foo module");

foo.identify();
foo.change();
foo.identify();