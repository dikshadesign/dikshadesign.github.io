const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;
const PUBLIC_DIR = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  if (pathname === '/') {
    pathname = '/index.html';
  }

  // Strip leading slash for relative joining
  const relativePath = pathname.replace(/^\/+/, '');
  const filePath = path.resolve(PUBLIC_DIR, relativePath);

  // Security check: ensure path is inside PUBLIC_DIR
  if (!filePath.toLowerCase().startsWith(PUBLIC_DIR.toLowerCase())) {
    console.warn(`[403 FORBIDDEN] ${req.method} ${pathname}`);
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.warn(`[404 NOT FOUND] ${req.method} ${pathname}`);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`404 Not Found: ${pathname}`);
      return;
    }

    if (stats.isDirectory()) {
      const indexPath = path.join(filePath, 'index.html');
      fs.stat(indexPath, (indexErr, indexStats) => {
        if (!indexErr && indexStats.isFile()) {
          serveFile(indexPath, pathname, res);
        } else {
          console.warn(`[403 DIR LISTING] ${pathname}`);
          res.writeHead(403, { 'Content-Type': 'text/plain' });
          res.end('403 Directory Listing Prohibited');
        }
      });
      return;
    }

    serveFile(filePath, pathname, res);
  });
});

function serveFile(filePath, pathname, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.writeHead(200, {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
  console.log(`[200 OK] ${pathname} (${contentType})`);

  stream.on('error', (err) => {
    console.error(`[STREAM ERROR] ${pathname}:`, err.message);
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
    }
    res.end('500 Internal Server Error');
  });
}

server.listen(PORT, '0.0.0.0', () => {
  console.log(`=======================================================`);
  console.log(`PORTFOLIO SERVER ACTIVE (Dual-Stack IPv4 / IPv6)`);
  console.log(`  Local URL:        http://localhost:${PORT}/`);
  console.log(`  Local IP:         http://127.0.0.1:${PORT}/`);
  console.log(`  AERA Case Study:  http://localhost:${PORT}/aera.html`);
  console.log(`  Design System:    http://localhost:${PORT}/design-system/index.html`);
  console.log(`=======================================================`);
});
