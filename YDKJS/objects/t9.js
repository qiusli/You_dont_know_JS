/**
 * Created by qiushili on 12/31/15.
 */
var myObj = {
	a: 2
};

// prevent from adding new properties to the object
Object.preventExtensions(myObj);
myObj.b = 3;
console.log(myObj.b);
