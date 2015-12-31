function foo(p1, p2) {
  this.val = p1 + p2;
}

var bar = foo.bind(null, "Qiushi ");
var baz = new bar("Li");
console.log(baz.val);