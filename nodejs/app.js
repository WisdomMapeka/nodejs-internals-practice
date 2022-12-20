let http = require("http");
let url = require("url");

http.createServer(
    function(req,res){
        res.writeHead(200, {"content-type":"text/html"});
        res.write("<h1>this is a respond</h1>");
        console.log(req.url);
        let myurl = url.parse(req.url, true).query;
        console.log(myurl);
        res.end();
    }
).listen(3050, console.log('running on port 3050'))