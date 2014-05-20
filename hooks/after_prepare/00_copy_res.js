#!/usr/bin/env node

var files = [
  {
    'res/ios/icon-40.png': 'platforms/ios/Redion/Resources/icons/icon-40.png'
  },
  {
    'res/ios/icon-40@2x.png': 'platforms/ios/Redion/Resources/icons/icon-40@2x.png'
  },
  {
    'res/ios/icon-50.png': 'platforms/ios/Redion/Resources/icons/icon-50.png'
  },
  {
    'res/ios/icon-50@2x.png': 'platforms/ios/Redion/Resources/icons/icon-50@2x.png'
  },
  {
    'res/ios/icon-60.png': 'platforms/ios/Redion/Resources/icons/icon-60.png'
  },
  {
    'res/ios/icon-60@2x.png': 'platforms/ios/Redion/Resources/icons/icon-60@2x.png'
  },
  {
    'res/ios/icon-72.png': 'platforms/ios/Redion/Resources/icons/icon-72.png'
  },
  {
    'res/ios/icon-72@2x.png': 'platforms/ios/Redion/Resources/icons/icon-72@2x.png'
  },
  {
    'res/ios/icon-76.png': 'platforms/ios/Redion/Resources/icons/icon-76.png'
  },
  {
    'res/ios/icon-76@2x.png': 'platforms/ios/Redion/Resources/icons/icon-76@2x.png'
  },
  {
    'res/ios/icon-small.png': 'platforms/ios/Redion/Resources/icons/icon-small.png'
  },
  {
    'res/ios/icon-small@2x.png': 'platforms/ios/Redion/Resources/icons/icon-small@2x.png'
  },
  {
    'res/ios/icon.png': 'platforms/ios/Redion/Resources/icons/icon.png'
  },
  {
    'res/ios/icon@2x.png': 'platforms/ios/Redion/Resources/icons/icon@2x.png'
  }
],
fs = require('fs'),
path = require('path'),
rootDir = process.argv[2];

files.forEach(function (obj) {
  Object.keys(obj).forEach(function (key) {
    var val = obj[key],
    srcFile = path.join(rootDir, key),
    dstFile = path.join(rootDir, val),
    dstDir = path.dirname(dstFile);
    if (fs.existsSync(srcFile) && fs.existsSync(dstDir)) {
      fs
        .createReadStream(srcFile)
        .pipe(fs.createWriteStream(dstFile));
    }
  });
});
