var Person = require("./lib/Person");

var orlando = new Person("Orlando Rodriguez");
var john = new Person("John Doe");
var jane = new Person("Jane Flow");

orlando.on('speak', function(said) {
	console.log(`${this.name} said ${said}`);
});

john.on('speak', function(said) {
	console.log(`${this.name} said ${said}`);
});

jane.on('speak', function(said) {
	console.log(`${this.name} said ${said}`);
});

orlando.emit('speak', "You are awesome.");

john.emit('speak', "You are ok.");

jane.emit('speak', "You are the worst.");