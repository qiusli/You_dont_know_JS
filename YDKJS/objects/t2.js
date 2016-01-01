/**
 * Created by qiushili on 12/31/15.
 */
var myObject = {};
myObject[true] = "foo";
myObject[3] = "bar";
myObject[myObject] = "baz";
myObject.false = "Qiushi";

var anotherObj = {};
myObject[anotherObj] = "Arsenal"; // override "baz"

console.log(myObject["true"]);
console.log(myObject["3"]);
console.log(myObject["[object Object]"]);
console.log(myObject["false"]);