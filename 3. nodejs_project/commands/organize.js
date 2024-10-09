let path = require('path')
let fs = require('fs');
{
    //input ->directory path given
    //clasify the catogary of the files in input directory->
    //copy / cut files to that organized directory inside of any catogary folder
    //copy / cut files to that organized directory inside of any catogary folder
}
function organizefn(dirpath){
    //console.log("organize command implemented for",dirpath);
    //input ->directory path given
    if(dirpath==undefined){
        console.log("Kindly enter the path");
        return;
    }else{
        let doesExist = fs.existsSync(dirpath);
        if(doesExist){
            //create ->organize_file->directory
            let organizedir = path.join(dirpath,"organised_folder")
            if(fs.existsSync(organizedir) == false){
                fs.mkdirSync(organizedir);
            }
            organizehelper(dirpath,organizedir);
            

        }
    }
    
    //clasify the catogary of the files in input directory->
    //copy / cut files to that organized directory inside of any catogary folder

}

function organizehelper(dirpath,organizedir){
    let filename = fs.readdirSync(dirpath);
    for(let i=0;i<filename.length;i++){
        let fileaddress = path.join(dirpath,filename[i]);
        let filecatogary = fs.lstatSync(fileaddress);
        let typefile = filecatogary.isFile();
        if(typefile){
            let catogary = getcatagory(fileaddress);
            console.log(filename[i],"belongs to the->>",catogary);
            //copy / cut files to that organized directory inside of any catogary folder
            sendfile(fileaddress,organizedir,catogary);
        }
    }
}

function sendfile(srcfileaddress,destdir,catogary){
    let destfile = path.join(destdir,catogary);
    if(fs.existsSync(destfile)==false){
        fs.mkdirSync(destfile);
    }
    let filename = path.basename(srcfileaddress);
    let destfileaddress = path.join(destfile,filename);
    fs.copyFileSync(srcfileaddress,destfileaddress);
    console.log("th file name ",filename,"is sent to",catogary);
    fs.unlinkSync(srcfileaddress);
}

function getcatagory(add){
    let ext = path.extname(add);
    ext = ext.slice(1);
    console.log(ext);
    let flag = false;
    let deftype;
    for (let type in types){
        let ctypeArr = types[type];
        for (let f=0;f<ctypeArr.length;f++){
            if(ext == ctypeArr[f]){
                return type;
             }
        }
        
    }
    return "others";
}
module.exports={
    organizekey:organizefn
}