/**
 * Created by qiushili on 1/1/16.
 */
var foo = {
	something: function() {
		console.log("Tell me somehting good...");
	}
};
var bar = Object.create(foo);
bar.something();
console.log(bar.hasOwnProperty("something")); // false