const http = require("http");

const app = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  const data = JSON.stringify({
    name: "heyi",
    age: 18,
  });
  res.end(data);
});

app.listen(3000, () => {
  console.log("Server running at 3000");
});
