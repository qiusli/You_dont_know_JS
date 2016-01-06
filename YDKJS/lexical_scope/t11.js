/**
 * Created by qiushili on 1/5/16.
 */
'use strict';

// Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
// this is the reason why we have to 'use strict' here
for(let i = 0; i < 10; i++) {
	console.log(i);
}
//console.log(i); // undefined


for(var j = 0; j < 10; j++) {
	console.log(j);
}
console.log("j is: " + j); // j is: 10