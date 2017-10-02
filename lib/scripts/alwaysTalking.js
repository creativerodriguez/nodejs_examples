var sayings = [
	"One to the next one",
	"Rocking in Paris",
	"One can do with all this power",
	"You got that milk money",
	"I got that milf money",
	"Purple Lamborgini lurking",
	"I'm moowalking on marble floors"
]

var interval = setInterval(function() {
	var i = Math.floor(Math.random() * sayings.length);
	process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function(data){
	console.log(`STDIN Data Received -> ${data.toString().trim()}`);
	clearInterval(interval);
	process.exit();
});