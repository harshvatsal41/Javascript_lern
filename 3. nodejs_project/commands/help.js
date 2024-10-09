function helpfn(dirpath){
    
    console.log(`
    list of all tha commands:
                            node main.js tree "dictionarypath"
                            node main.js organize "dictionarypath"
                            node main.js help                     
    `)
}
module.exports={
    helpkey:helpfn
}