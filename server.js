import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Для корректной работы __dirname в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "dist");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Определяем файл, который хотим отдать
  let filePath = path.join(distPath, req.url === "/" ? "index.html" : req.url);

  // Если файла нет, возвращаем index.html (для SPA маршрутов)
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distPath, "index.html");
  }

  // Определяем Content-Type
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
  };
  const contentType = mimeTypes[ext] || "application/octet-stream";

  // Читаем файл и отправляем
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Server error");
      return;
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`✅ Server running on socket/port: ${port}`);
});
