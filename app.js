var http = require("http");
var fs = require("fs");
var querystring = require("querystring");

var server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    res.writeHead(200, { "content-Type": "text/html" });
    fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
  } else if (req.method === "POST") {
    var data = "";
    req.on("data", function (chunk) {
      data += chunk;
    });
    req.on("end", function () {
      res.writeHead(200, { "content-Type": "text/html" });
      var dataP = querystring.parse(data);
      console.log(dataP);
      res.end(JSON.stringify(dataP));
    });
  }
});
server.listen(3000, () => {
  console.log("server connected");
});
