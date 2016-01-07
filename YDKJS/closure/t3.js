/**
 * Created by qiushili on 1/6/16.
 */
var fn;
function foo() {
	var a = 2;
	function baz() {
		console.log(a);
	}
	fn = baz;
}

function bar() {
	fn();
}

foo();
bar();


function a() {
	var a = 100;
	function b() {
		return function() {
			console.log(a);
		}
	}
	return b;
}

var k = a();
var k1 = k();
k1();