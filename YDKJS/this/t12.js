/**
 * Created by qiushili on 12/30/15.
 */
function foo(something) {
	console.log(this.a, something);
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = function() {
	return foo.apply(obj, arguments);
};

var b = bar(3);
console.log(b);

function bind(fn, obj) {
	return function() {
		return fn.apply(obj, arguments);
	}
}

var bar2 = bind(foo, obj);
var b2 = bar2(3);
console.log(b2);


var bar3 = foo.bind(obj);
var b3 = bar3(3);
console.log(b3);