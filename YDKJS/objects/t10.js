/**
 * Created by qiushili on 12/31/15.
 */
var myObj = {
	get a() {
		return 2;
	}
};

Object.defineProperty(myObj, "b", {
	get: function() {
		return this.a * 2;
	},
	enumerable: true
});
console.log(myObj.b);

// only getter defined, so property is read-only
myObj.a = 3;
console.log(myObj.a);