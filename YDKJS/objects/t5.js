/**
 * Created by qiushili on 12/31/15.
 */
var myObject = {
	a: 2
};

// { value: 2, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));