#!/usr/bin/env node 
let inputARR = process.argv.slice(2);
let path = require('path')
let fs = require('fs');
const { type } = require('os');
let treeObj = require("./commands/tree");
let helpObj =require("./commands/help");
let organizeObj =require("./commands/organize");
let globaltreeObj =require("./commands/globaltree");
//node main.js tree "dictionarypath"
//node main.js organize "dictionarypath"
//node main.js help
let command = inputARR[0];

let types = {
    media:['mkv','mp3','mp4'],
    document:['pdf','rar','txt'],
    redirectlink:['lnk','url'],
    osfiles:['iso'],
}

switch(command){
    case "tree" : treeObj.treekey(inputARR[1]);
        break;
    case "organize" : organizeObj.organizekey(inputARR[1]);
        break;
    case "help" :

        helpObj.helpkey();
        break;
    case "globaltree" : globaltreeObj.globaltreekey(inputARR[1]);  
        break;      
    default:
        console.log("Please🙏Input Right Command");
        break;
}
