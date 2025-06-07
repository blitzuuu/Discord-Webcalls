const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Proxy Discord, removing frame-blocking headers
app.use(
  '/',
  createProxyMiddleware({
    target: 'https://discord.com',
    changeOrigin: true,
    selfHandleResponse: false, // Let http-proxy handle response
    onProxyRes: (proxyRes, req, res) => {
      // Remove or modify frame-blocking headers
      if (proxyRes.headers['x-frame-options']) {
        delete proxyRes.headers['x-frame-options'];
      }
      if (proxyRes.headers['content-security-policy']) {
        // Remove frame-ancestors from CSP
        let csp = proxyRes.headers['content-security-policy'];
        csp = csp.replace(/frame-ancestors [^;]+;?/gi, '');
        proxyRes.headers['content-security-policy'] = csp;
      }
    }
  })
);

app.listen(PORT, () => {
  console.log(`Proxy running at http://localhost:${PORT}/`);
  console.log('WARNING: This is for educational use only!');
});
