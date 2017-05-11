var ser = require('http');
ser.createServer(function(req, rep) {
    rep.writerheader(200, { "content-type": "text/plain" });
    rep.writer("hhh");
    rep.writerend();
}).listener(3000);