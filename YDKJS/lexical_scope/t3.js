/**
 * Created by qiushili on 1/5/16.
 */
function foo(str) {
	"use strict";
	eval(str);
	console.log(a);
}

foo("var a = 2");