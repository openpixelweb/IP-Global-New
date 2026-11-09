import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import http from "node:http";

const distDirectory = join(fileURLToPath(new URL(".", import.meta.url)), "dist");
const host = "0.0.0.0";
const port = Number(process.env.PORT || 8080);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".eot": "application/vnd.ms-fontobject",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function isFile(filePath) {
  return existsSync(filePath) && statSync(filePath).isFile();
}

const server = http.createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method Not Allowed");
    return;
  }

  const pathname = decodeURIComponent(new URL(request.url || "/", "http://localhost").pathname);
  const safePath = normalize(pathname).replace(/^([/\\]*\.\.[/\\])+/, "");
  let filePath = join(distDirectory, safePath === "/" ? "index.html" : safePath);

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  }

  // React Router fallback for routes such as /contact and /services.
  if (!isFile(filePath) && extname(pathname) === "") {
    filePath = join(distDirectory, "index.html");
  }

  if (!isFile(filePath)) {
    response.statusCode = 404;
    response.end("Not Found");
    return;
  }

  response.statusCode = 200;
  response.setHeader(
    "Content-Type",
    mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
  );

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  createReadStream(filePath)
    .on("error", (error) => {
      console.error("Failed to serve file:", error);
      if (!response.headersSent) response.statusCode = 500;
      response.end("Internal Server Error");
    })
    .pipe(response);
});

server.listen(port, host, () => {
  console.log(`IPGS frontend listening on http://${host}:${port}`);
});
