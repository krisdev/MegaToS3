///////////////////////////////////////
//             MegaToS3              //
//         Made by Krisdev           //
//               2019                //
///////////////////////////////////////

const config = require('../config.json');
const Downloader = require('./Modules/Downloader.js');

const dl = new Downloader(config);
dl.downloadFromURL("https://mega.nz/#!aHQFwSAS!j9uyILaeDc-0zb8MbSg4bGTYCmy_-TrDEiYMKUqIklE").then(d=>{
    console.log(d);
}).catch(e=>{
    console.log(e);
})