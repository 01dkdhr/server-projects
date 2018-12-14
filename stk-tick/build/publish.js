const fs = require('fs');
const path = require('path');
const package = require('../package.json');

const htmlPath = path.join(__dirname, '../index.html');
const distPath = path.join(__dirname, '../dist');
const publicPath = path.join(__dirname, '../../../https-server/public');
const publishPath = publicPath;

// 删除文件夹
function deleteDirection(dirPath) {
    const arr = fs.readdirSync(dirPath);

    for (let i in arr) {
        const childPath = path.join(dirPath, arr[i]);
        const stats = fs.statSync(childPath);  
        
        if (stats.isFile()) {
            fs.unlinkSync(childPath);
        } else {
            deleteDirection(childPath);
        }
    }

    fs.rmdirSync(dirPath);
}

// 复制文件夹
function copyDirection(src, dst) {
    if (!fs.existsSync(dst)) {
        fs.mkdirSync(dst);
    }

    const arr = fs.readdirSync(src);
    for (let i in arr) {
        const childPath = path.join(src, arr[i]);
        const stats = fs.statSync(childPath);  
        
        if (stats.isFile()) {
            fs.copyFileSync(childPath, path.join(dst, arr[i]));
        } else {
            copyDirection(childPath, path.join(dst, arr[i]));
        }
    }
}

if (!fs.existsSync(distPath)) {
    console.log('publish fail: distPath is not exist');
    return;
}

if (!fs.existsSync(publicPath)) {
    console.log('publish fail: publicPath is not exist');
    return;
}

if (fs.existsSync(publishPath)) {
    deleteDirection(publishPath);
}
fs.mkdirSync(publishPath);

copyDirection(distPath, publishPath);