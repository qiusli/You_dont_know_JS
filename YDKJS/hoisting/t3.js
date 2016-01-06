/**
 * Created by qiushili on 1/5/16.
 */
foo(); // 1
var foo;

function foo() {
	console.log(1);
}

foo = function() {
	console.log(2);
};