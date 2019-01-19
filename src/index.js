///////////////////////////////////////
//             MegaToS3              //
//         Made by Krisdev           //
//               2019                //
///////////////////////////////////////

const config = require('../config.json');
const Downloader = require('./Modules/Downloader.js');

const dl = new Downloader(config);
dl.downloadFromURL("https://mega.nz/#F!j0hFyQCZ!p0LlUl3s0S-6aSq5du6HCQ").then(d=>{
    console.log(d);
}).catch(e=>{
    console.log(e);
})