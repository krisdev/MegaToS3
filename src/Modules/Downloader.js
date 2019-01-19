///////////////////////////////////////
//             MegaToS3              //
//         Made by Krisdev           //
//               2019                //
///////////////////////////////////////

const fs = require('fs');
const mega = require('megajs');
const ProgressBar = require('progress');

class Downloader {

    initialiser(config) {
        this.config = config;
    }

    downloadFromURL(url) {
        return new Promise((resolve, reject)=>{
            const folder = mega.file(url);

            folder.loadAttributes((err, folder)=>{
                if (err) reject(err);
                console.log(folder);
                console.log(folder.name);
                console.log(folder.children.length);

                console.log("File:", file.name, file.size + 'B');

                var dl = file.download();
                dl.pipe(fs.createWriteStream("out/" + file.name));

                var bar;
                dl.on('progress', stats=>{
                    if (!bar) bar = new ProgressBar('Downloading [:bar] :percent :etas', {
                        total: stats.bytesTotal,
                        width: 50,
                    });
                    bar.tick(stats.bytesLoaded - bar.curr);
                })

                dl.on('end', ()=>{
                    bar.tick();
                    resolve("file Downloaded");
                })

            });
        });
    }

}

module.exports = Downloader;