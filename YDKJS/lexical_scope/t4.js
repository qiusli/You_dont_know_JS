/**
 * Created by qiushili on 1/5/16.
 */
var obj = {
	a: 1,
	b: 2,
	c: 3
};

obj.a = 2;
obj.b = 3;
obj.c = 4;

with (obj) {
	a = 3;
	b = 4;
	c = 5;
}