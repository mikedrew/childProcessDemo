console.log('spawn');

var os = require('os');
var exec = require('child_process').execFile;
var spawn = require('child_process').spawn;
var child_process = require('child_process');

var exePath = 'c:\\ethminer\\ethminer.exe';

var addr = '0xf2079ff4ba7604f26a12442e43e851328858c5d9';
var args = ['-F','http://ethereumpool.co/?miner=5@'+ addr + '@1','-G'];



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


