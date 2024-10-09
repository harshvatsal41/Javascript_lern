#!/usr/bin/env node 
let inputarr = process.argv.slice(2);
let command = inputarr;
const { timeStamp, Console } = require('console');
let fs = require('fs');

//INPUT ARRAY LIST
let funarr=[];
let filearr=[];


//COMMAND EXITANCE
let isSpresent = inputarr.includes("-s");
let isNpresemt = inputarr.includes("-n");
let isBpresent = inputarr.includes("-b");

// PERCEIVING COAMMANDS
for(let content in command){
    let string= command[content]; 
    let isfile = fs.existsSync(string);

    if(string == '-s'){
        funarr.push(string);
    }else if (string == '-n') {
        funarr.push(string);
    }else if(string == '-b') {1
        funarr.push(string);
    }else if(isfile){
        filearr.push(string);
    }else if(isfile==false){
        console.log(string,"doesn't exist");
        return;
    }
}


//EDGE CASES
let isbothpresent = isNpresemt && isBpresent;
if(isbothpresent==true){
    console.log("either enter -n or -b ");
    return;
}

//EXTRACTING CONTENT FROM FILE
let content ="";
for(let file in filearr){ 
    let buffer = fs.readFileSync(filearr[file]);
    content += buffer;
    
}

//CONVERTING FILE INTO PEACES OF LINE
let contentArr = content.split("\r\n");

//CASE OF S
if(isSpresent==true){
    for(let j=0;j<contentArr.length;j++){
        if (contentArr[j]==""  && contentArr[j-1]==""){
            contentArr[j]=null;
        }else if(contentArr[j]=="" && contentArr[j-1]==null){
            contentArr[j]=null;
        }
        
    }
    let tempArr = [];
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i] != null){
            tempArr.push(contentArr[i])
        }
    }
    contentArr=tempArr;
    console.log(contentArr.join("\n"));
}

//CASE OF N
if(isNpresemt==true){
    for(let i=0;i<contentArr.length;i++){
        console.log(i+1,contentArr[i]);
    }

}

//CASE OF B
let count = 1;
if(isBpresent==true){
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i] != ""){
            console.log(count,contentArr[i]);
            count++;
        }
        else{
            console.log(contentArr[i]);
        }
    }
}

 