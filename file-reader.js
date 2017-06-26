/**
 * New node file
 */

var fs = require("fs");

//var readFileSync=fs.readFileSync('input.txt.txt');
fs.readFile('input.txt', function(err, data) {
	if(err){ return console.error(err);}
	console.log(data.toString());
});
console.log("File ending")  ;
console.log("File ending1")  ; 
console.log("File ending2")  ; 
console.log("File ending3")  ; 