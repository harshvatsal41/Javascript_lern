const request = require('request');
const cheerio = require('cheerio')
const chalk = require('chalk');
const figlet = require('figlet');
//feature is given by request module
console.log("Before");
request('https://www.worldometers.info/coronavirus/',cb);
console.log("After")
function cb(error, response, html) {
    if(error){
        console.error('error:', error); // Print the error if one occurred
    }else{
        //console.log('statusCode:',response&&response.statusCode); // Print the response status code if a response was received
        //console.log('body:', html); // Print the HTML for the Google homepage.
        handlehtml(html);
        }
  }
function handlehtml(html){
    let selTool = cheerio.load(html);
    
    //console.log(ContentArray);
    //for(let i=0;i<ContentArray.length;i++){
    //  let data=selTool(ContentArray[i]).text();
    //  console.log(ch.blue(figlet.textSync(data)));
    //}
    let total=selTool(ContentArray[0]).text();
    let death=selTool(ContentArray[1]).text();
    let recovered=selTool(ContentArray[2]).text();
    console.log("total cases : "+chalk.gray(total));
    console.log("total death : "+chalk.greenBright(death));
    console.log("Recovered   : "+chalk.whiteBright(recovered));
  }
console.log("After");