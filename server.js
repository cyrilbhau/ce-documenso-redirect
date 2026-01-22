const http = require("http");

const TARGET = "https://signatures.consciousengines.com";

const server = http.createServer((req, res) => {
  const location = TARGET + req.url;
  res.statusCode = 301;
  res.setHeader("Location", location);
  res.end();
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Redirecting all requests to ${TARGET} on port ${port}`);
});
