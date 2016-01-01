/**
 * Created by qiushili on 12/31/15.
 */
var myObj = {};
Object.defineProperty(myObj, "a", {
	value: 4,
	writable: true,
	configurable: false,
	enumerable: true
});

myObj.a = 5;
console.log(myObj.a);

Object.defineProperty(myObj, "a", {
	value: 6,
	writable: true,
	configurable: true,
	enumerable: true
});