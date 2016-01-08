/**
 * Created by qiushili on 1/7/16.
 */
// JS does not have dynamic scope
function foo() {
	console.log(a);
}

function bar() {
	var a = 3;
	foo();
}

var a = 2;
bar();