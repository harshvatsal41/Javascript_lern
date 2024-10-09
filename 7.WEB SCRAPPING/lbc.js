const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
const cheerio= require('cheerio');
const request= require('request');
request(url,cb);
console.log("before");
function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        //console.log(html);
        contentHTML(html);
    }
}
function contentHTML(html){
    let $ = cheerio.load(html);
    let contentArr = $(".ds-ml-4>div>p.ci-html-content");
    console.log(contentArr.length);
    for(let i = 0;i<contentArr.length;i++){        
        let content=$(contentArr[i]).text();
        //let htmldata=$(contentArr[i]).html();
        console.log(content);
        //console.log(htmldata);
        console.log("<------------------------------------------------------------------------------->")
    }
    
}

console.log("After");