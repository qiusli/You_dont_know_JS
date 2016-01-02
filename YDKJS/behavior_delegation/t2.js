/**
 * Created by qiushili on 1/1/16.
 */
Foo = {
	init: function(who) {
		this.me = who;
	},
	identify: function() {
		return "I am " + this.me;
	}
};

Bar = Object.create(Foo);
console.log(Foo.hasOwnProperty("init")); // true
console.log(Bar.hasOwnProperty("init")); // false
Bar.speak = function() {
	console.log("Hello, " + this.identify() + ".");
};

var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");

b1.speak();
b2.speak();

//var b3 = new Bar(); // TypeError: Bar is not a function
//b3.init("b3");
//b3.speak();