const fs = require("fs");
console.log("Before");
//let data = fs.readFileSync("f1.txt");
//console.log(""+data);
//Async command
fs.readFile("f1.txt",cb);
console.log("after");
function cb(err,data){
    if(err){
        console.log("Error");
    }else{
        console.log(""+data);
    }
}