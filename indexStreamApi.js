const fs = require('fs');
const request = require('request');
const apiServer = require('http').createServer();
const sourceServer = require('http').createServer();


const API_SERVER_PORT = 8080;
const READER_SERVER_PORT = 8081;

apiServer.on('request', (req, res) => {
    const readStream = request.get(`http://127.0.0.1:${READER_SERVER_PORT}`);

    readStream.on('data', () => {
        console.log(process.memoryUsage());
    });

    readStream.pipe(res);
});

apiServer.listen(API_SERVER_PORT);


sourceServer.on('request', (req, res) => {
    const src = fs.createReadStream('./big.file');
    src.pipe(res);
});

sourceServer.listen(READER_SERVER_PORT);