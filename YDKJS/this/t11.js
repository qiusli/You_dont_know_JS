/**
 * Created by qiushili on 12/30/15.
 */
function foo() {
	console.log(this.a);
}

var obj = {
	a: 2
};

foo.call(obj);

var bar = function() {
	foo.call(obj);
};

bar();
setTimeout(bar, 100);
