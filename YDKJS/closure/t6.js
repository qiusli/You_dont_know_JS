/**
 * Created by qiushili on 1/6/16.
 */
function coolModule() {
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log(something);
	}

	function doAnother() {
		console.log(another.join("!"));
	}

	return {
		doSomething: doSomething,
		doAnother: doAnother
	};
}

var foo = coolModule();
foo.doSomething();
foo.doAnother();