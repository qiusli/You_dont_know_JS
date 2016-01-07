/**
 * Created by qiushili on 1/6/16.
 */
var foo = (function CoolModule() {
	var something = "Cool";
	var anotherThing = [1, 2, 3];

	function doSomething() {
		console.log(something);
	}

	function doAnotherThing() {
		console.log(anotherThing.join("!"));
	}

	return {
		doSomething: doSomething,
		doAnotherThing: doAnotherThing
	};
})();

foo.doSomething();
foo.doAnotherThing();