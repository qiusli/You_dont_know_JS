/**
 * Created by qiushili on 1/5/16.
 */
foo(); // 3

function foo() {
	console.log(1);
}

var foo = function() {
	console.log(2);
};

function foo() {
	console.log(3);
}