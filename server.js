import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dist = join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;
const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.yml': 'text/yaml',
};
function serveFile(res, fp) {
  try {
    const content = readFileSync(fp);
    const ext = extname(fp);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    res.end(content);
  } catch {
    res.writeHead(404); res.end('Not Found');
  }
}
const server = createServer((req, res) => {
  let url = req.url.split('?')[0];
  let fp = join(dist, url);
  try {
    const st = statSync(fp);
    if (st.isDirectory()) {
      fp = join(fp, 'index.html');
      if (existsSync(fp)) { serveFile(res, fp); return; }
    } else if (st.isFile()) {
      serveFile(res, fp); return;
    }
  } catch {}
  const fallback = join(dist, 'index.html');
  if (existsSync(fallback)) { serveFile(res, fallback); return; }
  res.writeHead(404); res.end('Not Found');
});
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));