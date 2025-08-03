// membuat web server manual
const http = require("http");
const port = 8080;
const fs = require("fs");

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    const url = req.url;

    // pake switch case
    switch (url) {
      case "/contact":
        renderHTML("./contact.html", res);
        break;
      case "/about":
        renderHTML("./about.html", res);
        break;
      default:
        renderHTML("./index.html", res);
    }

    // // pake if else
    // if (url === "/contact") {
    //   renderHTML("./contact.html", res);
    //   //   res.write("<h2>Contact Page</h2>");
    //   //   res.end();
    // } else if (url === "/about") {
    //   renderHTML("./about.html", res);
    //   //   res.write("<h2>About Page</h2>");
    //   //   res.end();
    // } else {
    //   renderHTML("./index.html", res);
    // }
  })
  .listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });
