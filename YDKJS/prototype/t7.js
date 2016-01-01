/**
 * Created by qiushili on 1/1/16.
 */
var anotherObj = {
	a: 2
};
var myObj = Object.create(anotherObj, {
	b: {
		enumerable: false,
		writable: true,
		configurable: false,
		value: 3
	},
	c: {
		enumerable: true,
		writable: false,
		configurable: false,
		value: 4
	}
});
console.log(myObj.hasOwnProperty("a")); // false
console.log(myObj.hasOwnProperty("b")); // true
console.log(myObj.hasOwnProperty("c")); // true

console.log(myObj.a); // 2
console.log(myObj.b);  // 3
console.log(myObj.c);  // 4