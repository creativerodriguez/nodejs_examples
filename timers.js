var waitTime = 3000;
var currentTime = 0;
var waitInternval =  10;
var percentWaited = 0;

function writeWaitingPercent(p)  {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function(){
	currentTime += waitInternval;
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	//console.log(`waiting ${currentTime/1000} seconds...`);
	writeWaitingPercent(percentWaited);
}, waitInternval);

setTimeout(function(){
	clearInterval(interval);
	writeWaitingPercent(100);
	console.log("\n\nDone\n\n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);