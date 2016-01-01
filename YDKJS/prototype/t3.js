/**
 * Created by qiushili on 1/1/16.
 */
function Foo() {
	this.value = 1
}
var a = new Foo();
a.value = 2;
console.log(a.value); // 2
console.log(a.hasOwnProperty("value")); // true
console.log(Object.getPrototypeOf(a) === Foo.prototype); // true
console.log(a.constructor === Foo); // true
console.log(Foo.prototype.constructor === Foo); // true
console.log(a.hasOwnProperty("constructor")); // false

var b = new Foo();
b.value = 4;
console.log(b.value); // 4

