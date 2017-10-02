var exec = require("child_process").exec;

//exec("open http://linkedin.com");

//exec("open -a Terminal .");

exec("git version", function(err, stdout) {
	
	if (err) {
		throw err;
	}
	
	console.log("Git Version");
	console.log(stdout);
});

