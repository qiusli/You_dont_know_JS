/**
 * Created by qiushili on 12/30/15.
 */
function foo() {
  console.log(this.a);
}

function dooFoo(fn) {
  fn();
}

var obj = {
  a: 2,
  foo: foo
};

var a = "oops, global";
dooFoo(obj.foo);
setTimeout(obj.foo, 100);