/**
 * Created by qiushili on 12/30/15.
 */
function foo(a) {
	console.log(a, this.id);
}

var obj = {
	id: "awesome"
};

// use obj as 'this' for 'foo()' calls for each element
[1, 2, 3].forEach(foo, obj);