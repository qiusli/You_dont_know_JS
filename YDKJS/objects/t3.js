/**
 * Created by qiushili on 12/31/15.
 */
var prefix = "foo";
var myObject = {
	[prefix + "bar"]: "hello",
	[prefix + "baz"]: "world"
};
console.log(myObject["foobar"]);
console.log(myObject["foobaz"]);