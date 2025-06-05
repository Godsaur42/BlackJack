var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
    var filePath = '../Front-End' + req.url;
    if (req.url === '/') {
        filePath = '../Front-End/StartPage.html';
    }

    var extname = path.extname(filePath);
    var contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.readFile(filePath, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('404 Not Found');
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(data);
        }
        res.end();
    });
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});
