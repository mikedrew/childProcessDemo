console.log('execFileDemo');

var os = require('os');
var exec = require('child_process').execFile;
var spawn = require('child_process').spawn;
var child_process = require('child_process');

var addr = '0xf2079ff4ba7604f26a12442e43e851328858c5d9';
var args = ['-F','http://ethereumpool.co/?miner=5@'+ addr + '@1','-G'];

child_process.execFile('c:\\ethminer\\ethminer.exe',args,[],function (err, stdout, stderr) {
	
	if (err) {
        // Ooops.
        console.log(stderr);
        return console.log(err);
    }

    // Done.	
    console.log(stdout);
})
