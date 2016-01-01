/**
 * Created by qiushili on 12/31/15.
 */
var myObject = {};
Object.defineProperty(myObject, "a", {
	value: 2,
	writable: false,
	configurable: true,
	enumerable: true
});

console.log(myObject.a);
myObject.a = 100;
console.log(myObject.a);