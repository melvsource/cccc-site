/**
 * CCCC Vision 1,000 — Local Dev Server
 * Run: npm start
 * Then open: http://localhost:3000
 *
 * Clean URL routing — no .html needed:
 *   /              → index.html  (Vision 1,000)
 *   /updates       → updates.html
 *   /equipping     → equipping.html
 *   /resources     → resources.html
 *   /support       → support.html
 */

const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, 'docs');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.pdf':  'application/pdf',
  '.ico':  'image/x-icon',
  '.woff2':'font/woff2',
  '.woff': 'font/woff',
  '.md':   'text/plain',
};

// Clean URL map — path → html file
const ROUTES = {
  '/':           'index.html',
  '/updates':    'updates.html',
  '/equipping':  'equipping.html',
  '/resources':  'resources.html',
  '/support':    'support.html',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0]; // strip query string

  // Try clean URL route first
  if (ROUTES[urlPath]) {
    const filePath = path.join(ROOT, ROUTES[urlPath]);
    return serveFile(filePath, res);
  }

  // Otherwise serve static file
  const filePath = path.join(ROOT, urlPath);
  serveFile(filePath, res);
});

function serveFile(filePath, res) {
  // Prevent directory traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('<h1>404 — Page not found</h1>');
    }
    const ext  = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  });
}

server.listen(PORT, () => {
  console.log(`\n✦  CCCC site running at http://localhost:${PORT}\n`);
  console.log('   /              Vision 1,000');
  console.log('   /updates       Updates & Blog');
  console.log('   /equipping     Witnesses Course');
  console.log('   /resources     Resources & Downloads');
  console.log('   /support       Contact & Support\n');
});
