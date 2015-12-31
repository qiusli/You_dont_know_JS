function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "Qiushi"
};
var you = {
    name: "Chelse"
};

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);