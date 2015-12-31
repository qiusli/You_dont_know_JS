/**
 * Created by qiushili on 12/30/15.
 */
function foo() {
	console.log(this.a);
}

var a = 2;
var o = {
	a: 3,
	foo: foo
};
var p = {
	a: 4
};

o.foo(); // 3
(p.foo = o.foo)(); // 2

p.bar = o.foo;
p.bar(); // 4