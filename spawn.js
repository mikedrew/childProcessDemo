console.log('spawn');

var os = require('os');
var exec = require('child_process').execFile;
var spawn = require('child_process').spawn;
var child_process = require('child_process');

var exePath = 'c:\\ethminer\\ethminer.exe';
var args = ['-F','http://ethereumpool.co/?miner=5@0x683feddafc2a8542744a4587de0c45626d7b8e68'];


var child = spawn(exePath,args);

child.stdout.on('data',function(d){
	
	console.log(d);
	
});

child.stderr.on('data',function(d){
	
	console.log(d);
	
});

child.on('close',function(code,signal){
	
	console.log('closed with code:' + code + ' and signal: ' + signal);
	
	
});


