/**
 * Created by qiushili on 1/1/16.
 */
function Vehicle() {
	this.engine = 1;
}
Vehicle.prototype.iginition = function() {
	console.log("Turning on my engine");
};
Vehicle.prototype.drive = function() {
	this.iginition();
	console.log("Steering and moving forward");
};

function Car() {
	var car = new Vehicle();
	car.wheels = 4;
	var vehDrive = car.drive;
	car.drive = function() {
		vehDrive.call(this);
		console.log("Rolling on all " + this.wheels + " wheels!");
	};
	return car;
}

var myCar = new Car();
myCar.drive();