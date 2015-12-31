function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

// bar is just another reference to foo
var bar = obj.foo;
var a = "oops, global!";
bar();
