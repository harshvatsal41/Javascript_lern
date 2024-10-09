let fs = require("fs");
let path= require("path");



//for(let i=0;i<10;i++){
//    let dirPathToMake = `lecture-${i}`;
//    fs.mkdirSync(dirPathToMake);
//    fs.writeFileSync( path.join(dirPathToMake ,`readme-${i}.txt` ), `# read me for the content of lecture-${i}`);
//}
let ext = path.extname(path.join(__dirname,"filesystem.js"));
console.log(ext);
let name = path.basename(__dirname);
console.log(name);
ext = path.extname(path.join(__dirname,"filesystem.js"));
console.log(ext);
name = path.basename(path.join(__dirname));
console.log(name);
name= path.basename(path.join(__dirname,"abc.js"));
console.log(name);