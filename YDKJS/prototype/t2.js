/**
 * Created by qiushili on 1/1/16.
 */
var anotherObj = {
	a: 2
};
var myObj = Object.create(anotherObj);
console.log(myObj.a); // 2
// this is like myObj.a = myObj.a + 1 (create a new property on myObj)
myObj.a++;
console.log(myObj.a); // 3
console.log(myObj.hasOwnProperty("a")); // true