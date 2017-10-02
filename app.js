//console.log(process.argv);

//Argument Variables with Process.argv
function grab(flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!user || !greeting) {
	console.log("Not found");
} else {
	console.log(`User: ${user} , Greeting: ${greeting}`);
}

// Process object Standard Output
var questions = [
	"What is your name?",
	"What is favorite hobby?",
	"What is your perferred programming language?"
]
var answers = [];

function ask(i) {
	process.stdout.write(`\n ${questions[i]}`);
	process.stdout.write(" > ");
}

process.stdin.on('data', function (data) {
	//process.stdout.write('\n' + data.toString().trim() + '\n');
	answers.push(data.toString().trim());
	
	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	}
});

process.on('exit', function () {
	process.stdout.write(" \n\n\n ");
	process.stdout.write(`Go ${answers[1]} ${answers[0]}, you can finish writing ${answers[2]} later`);
	process.stdout.write(" \n\n\n ");
});

ask(0);

