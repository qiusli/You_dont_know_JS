/**
 * Created by qiushili on 1/5/16.
 */
foo(); // b

var a = true;
if(a) {
	function foo() {
		console.log("a");
	}
} else {
	function foo() {
		console.log("b");
	}
}