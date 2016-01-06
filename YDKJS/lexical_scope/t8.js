/**
 * Created by qiushili on 1/5/16.
 */
function foo() {
	function bar(a) {
		// override i in for-loop
		i = 3;
		console.log(a + i);
	}

	for(var i = 0; i < 10; i++) {
		bar(i * 2);
	}
}
foo();