/**
 * Created by qiushili on 1/6/16.
 */
'use strict';

// actually 5 setTimeout functions are defined
// each of them defined in each iteration
// they are in the same global scope, so they share the same 'i'
// once all define behavior finishes, 'i' equals to 5
// so all will print out 5
for(var i = 0; i < 5; i++) {
	setTimeout(function timer() {
		console.log(i);
	}, i * 1000);
}

// execute immediately, so each setTimeout has its own 'i'
for(var i = 0; i < 5; i++) {
	(function(j) {
		// store the current value
		setTimeout(function timer() {
			console.log(j);
		}, j * 1000)
	})(i);
}


for(let k = 1; k < 5; k++) {
	setTimeout(function timer() {
		console.log(k);
	}, 1000);
}