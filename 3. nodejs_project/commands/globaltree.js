let path = require('path')
let fs = require('fs');
function globalfn(dirpath){
    if (dirpath==undefined) {
        destpath =process.cwd();
        treehelper(destpath,"");
    }else{
        let doesExist = fs.existsSync(dirpath);
        if(doesExist){
            treehelper(dirpath,"");
            }else{


            console.log("kindly enter the correct path");
            return;
        }

        }
}
function treehelper(dirpath,indent){
    //is file or folder
    let isfile = fs.lstatSync(dirpath).isFile();
    if(isfile == true){
        let filename = path.basename(dirpath);
        console.log(indent+'|-=-=>'+filename);
    }
    else{        
        let dirname = path.basename(dirpath);
        console.log(indent+"L____"+dirname);
        let childrens = fs.readdirSync(dirpath);
        for(let i=0;i<childrens.length;i++){
            let childpath = path.join(dirpath,childrens[i]);
            treehelper(childpath,indent+"\t");
        }
    }
}
module.exports={
    globaltreekey:globalfn
}
