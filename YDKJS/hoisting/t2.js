/**
 * Created by qiushili on 1/5/16.
 */
foo();
// function expression not hoisted
var foo = function() {
	console.log("hi");
};