/**
 * Created by qiushili on 1/5/16.
 */
function foo(str, a) {
	eval(str);
	console.log(a, b);
}

var b = 2;
foo("var b = 3;", 1);