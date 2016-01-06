/**
 * Created by qiushili on 1/5/16.
 */
var a = 2;
var b = 10;
(function foo() {
	// foo can only be found here
	var a = 3;
	console.log(a);
	console.log(b);
})();
console.log(a);