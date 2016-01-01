/**
 * Created by qiushili on 1/1/16.
 */
var anotherObject = {
	a: 2
};
var myObj = Object.create(anotherObject);
console.log(myObj.a);

for(var k in myObj) {
	console.log("found: " + k);
}
console.log("a" in myObj);
console.log(myObj.hasOwnProperty("a"));