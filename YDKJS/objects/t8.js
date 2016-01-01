/**
 * Created by qiushili on 12/31/15.
 */
var myObj = {};
// create constant in JavaScript
Object.defineProperty(myObj, "a", {
	value: 43,
	writable: false,
	configurable: false
});