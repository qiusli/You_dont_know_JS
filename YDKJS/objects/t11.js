/**
 * Created by qiushili on 12/31/15.
 */
var myObj = {
	a: 2
};

console.log("a" in myObj);
console.log("b" in myObj);

console.log(myObj.hasOwnProperty("a"));
console.log(myObj.hasOwnProperty("b"));
