/**
 * Created by qiushili on 1/6/16.
 */
function CoolModule(id) {
	function identify() {
		console.log(id);
	}

	return {
		identify: identify
	};
}

var foo1 = CoolModule("foo 1");
var foo2 = CoolModule("foo 2");

foo1.identify();
foo2.identify();