const request = qrequire('request');
const cheerio = require('cheerio');


request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-sunrisers-hyderabad-qualifier-2-1237180/live-cricket-score',cb);
function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        handlehtml(html);
    }
}
function handlehtml(html){
        let selTool = cheerio.load(html);
        let ContentArray = selTool("ds-leading-[0]");
        console.log(ContentArray.length);
}

