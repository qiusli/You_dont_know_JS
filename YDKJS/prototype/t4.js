/**
 * Created by qiushili on 1/1/16.
 */
function Foo() {}
// Foo's prototype's been overridden, all its properties are lost
Foo.prototype = {
	name: "Qiushi",
	age: 27
};
var a = new Foo();
// false, overridden Foo.prototype has no constructor property
console.log(a.constructor === Foo);
// true, follow the prototype chain (a.prototype -> Foo.prototype -> Object.prototype)
console.log(a.constructor === Object);