console.log("Halo, kita akan belajar membuat server");
const http = require("http");

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 *
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {
  response.statusCode = 200;
  // response.setHeader("Content-Type", "text/html");
  // response.setHeader('Content-Type', 'application/json');
  // response.setHeader('Powered-By', 'Node.js');

  // response.write('<html>');
  // response.write('<body>');
  // response.write('<h1>Hello, World!</h1>');
  // response.write('</body>');
  // response.write('</html>');
  // response.end();

  // atau

  // response.end('<html><body><h1>Hello, World!</h1></body></html>');

  const { method, url } = request;

  // BERBAGAI METHOD
  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "Hello!",
        })
      );
      // response.end("<h1>Hello!</h1>");
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
        })
      );
      // response.end(
      //   `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
      // );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "Halo! Ini adalah halaman about",
        })
      );
      // response.end("<h1>Halo! Ini adalah halaman about</h1>");
    } else if (method === "POST") {
      // mendapatkan BODY
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.statusCode = 200;
        response.end(
          JSON.stringify({
            message: `Halo, ${name}! Ini adalah halaman about`,
          })
        );
        // response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
      });
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses menggunakan ${method} request`,
        })
      );
      // response.end(
      //   `<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`
      // );
    }
  } else {
    response.statusCode = 404;
    response.end(JSON.stringify({ message: "Halaman tidak ditemukan" }));
    // response.end("<h1>Halaman tidak ditemukan<h1>")
  }
};

const server = http.createServer(requestListener);

const port = 8080;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
