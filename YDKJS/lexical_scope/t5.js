/**
 * Created by qiushili on 1/5/16.
 */
function foo(obj) {
	with(obj) {
		a = 2;
	}
}

var o1 = {
	a: 3
};

var o2 = {
	b: 3
};

foo(o1);
console.log(o1.a); // 2

foo(o2);
console.log(o2.a); // undefined
console.log(a);    // 2