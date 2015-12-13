console.log('execFileDemo');

var os = require('os');
var exec = require('child_process').execFile;
var spawn = require('child_process').spawn;
var child_process = require('child_process');

var args = ['-F','http://ethereumpool.co/?miner=5@0x683feddafc2a8542744a4587de0c45626d7b8e68','-G'];

child_process.execFile('c:\\ethminer\\ethminer.exe',args,[],function (err, stdout, stderr) {
	
	if (err) {
        // Ooops.
        console.log(stderr);
        return console.log(err);
    }

    // Done.	
    console.log(stdout);
})
