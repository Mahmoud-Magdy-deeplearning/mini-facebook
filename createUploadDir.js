const { readdir } = require('fs');
const fs = require('fs');

let mkfolder = true;
const getDirectories = (source, callback) =>
  readdir(source, { withFileTypes: true }, (err, files) => {
    if (err) {
      callback(err);
    } else {
      files
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => {
          if (dirent.name === 'uploads') {
            console.log('Uploads folder already exists');
            mkfolder = false;
          }
        });
      if (mkfolder) {
        fs.mkdir('./uploads', (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('uploads directory created');
          }
        });
      }
    }
  });
getDirectories('./');
