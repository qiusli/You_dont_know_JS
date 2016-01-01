/**
 * Created by qiushili on 1/1/16.
 */
var anotherObj = {
	cool: function() {
		console.log("Cool!");
	}
};
var myObj = Object.create(anotherObj);
myObj.doCool = function() {
	this.cool();
};
myObj.doCool();