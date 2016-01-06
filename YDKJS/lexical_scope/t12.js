/**
 * Created by qiushili on 1/5/16.
 */
var foo = true;
if(foo) {
	var a = 2;
	const b = 3;

	a = 3;
	b = 4;
}
console.log(a); // 3
console.log(b); // 3