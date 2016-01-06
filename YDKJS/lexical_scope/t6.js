/**
 * Created by qiushili on 1/5/16.
 */
function doSomething(a) {
	b = a + doSomethingElse(a * 2);
	console.log(b * 3);
}

function doSomethingElse(a) {
	return a - 1;
}

var b;

doSomething(2);