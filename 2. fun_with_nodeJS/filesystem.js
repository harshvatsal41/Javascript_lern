   //filesystem
let fs = require("fs");
// files -> create ,read ,update , delete
//let buffer = fs.readFileSync("abc.js");
//console.log("" + buffer);

//create
//fs.openSync("abc.txt","w");

//write
//fs.writeFileSync("abc.txt","hum aaj bhot khush hua hai");

//update
//fs.appendFileSync("abc.txt"," siraf bhot khush nahi atti uttam khush hu mein");

//folder create
//crate directory
//fs.mkdirSync("meri dictionary");

//read folder
//let content = fs.readdirSync("meri dictionary");

//create file in folder
//fs.writeFileSync("meri dictionary/merilife.js","console.log(abc)");

//let i =0;
//for ( i; i<content.length;i++){

//    //remove file
//    fs.unlinkSync("meri dictionary/" +content[i]);
//    console.log(content);
//}

//remove directory
//fs.rmdirSync("meri dictionary");

//fs.existsSync->tells if a file exist at a path -> true/false
//let pathexists = fs.existsSync("kyahaibay.txt");
//console.log(pathexists);
//let detailsobj = fs.lstatSync(__dirname + "\\kyakya//");
//let ans = detailsobj.isDirectory();
//console.log(ans);
//ans = detailsobj.isFile();
//console.log(ans);
//


for(let i=0;i<10;i++){
    let dirPathToMake = `lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake +"\\"+`readme-${i}.txt` , `# read me for the content of lecture-${i}`);
}