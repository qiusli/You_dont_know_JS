/**
 * Created by qiushili on 12/31/15.
 */
var myObj = {};
Object.defineProperty(myObj, "a", {
	value: 2,
	enumerable: true
});
Object.defineProperty(myObj, "b", {
	value: 3,
	enumerable: false
});

// a 2
for(var k in myObj) {
	console.log(k, myObj[k]);
}

console.log(myObj.propertyIsEnumerable("a"));
console.log(myObj.propertyIsEnumerable("b"));

console.log(Object.getOwnPropertyNames(myObj));