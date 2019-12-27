const fs = require('fs');

function getRoute(url, callback) {
    if(!url || url === '/') {//по умолчанию
        url = '/index';
    };
    let isFile = ((url.search('/assets') < 0) && (url.search('/images') < 0));
    /**
     * Get file data
     */
    let filename = "./lab1" + url + (isFile ? '.html' : '');
    fs.readFile(filename, function(err, data) {
        if (err) {
            callback(
                {
                    code: 404,
                    message: '404 Not Found',
                    type: 'text/html'
                }
            );
        } else {
            callback(
                {
                    code: 200,
                    isFile: isFile,
                    data: data
                }
            );
        }
    });
}
/**
 * Save opened route to history file
 */
function saveHistory(url, ip) {
    const historyFile =  process.env.SAVE_ENV;
    if(!url || url === '/') {
        url = '/index';
    }
    let today = new Date();
    let text = url + ', ' + ip + ', ' + today.getFullYear() + '.' + today.getMonth() + '.' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + '\n';
    fs.appendFile('./' + historyFile, text, err => {
        if(err) console.log(err);
    });
}

module.exports = {
    getRoute, saveHistory
};