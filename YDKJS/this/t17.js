/**
 * Created by qiushili on 12/30/15.
 */
function foo() {
	console.log(this.a);
}

var a = 2;

foo.call(null);