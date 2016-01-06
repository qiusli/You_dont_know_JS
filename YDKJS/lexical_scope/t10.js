/**
 * Created by qiushili on 1/5/16.
 */
var b = 2;

(function IIFE(def) {
	def();
})(function def() {
	var a = 3;
	console.log(a);
	console.log(b);
});