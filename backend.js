const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = 3000;
const frontendPath = path.join(__dirname, "frontend.html");
const frontendHtml = fs.readFileSync(frontendPath);

const tarefas = [
  { id: 1, titulo: "Estudar APIs REST", concluida: false },
  { id: 2, titulo: "Criar um exemplo com Node.js", concluida: true },
  { id: 3, titulo: "Consultar tarefas pelo front-end", concluida: false },
];

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (req.method === "GET" && url.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(frontendHtml);
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/tarefas") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(tarefas));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ erro: "Rota não encontrada" }));
});

server.listen(PORT, () => {
  console.log(`Aplicação disponível em http://localhost:${PORT}`);
});
