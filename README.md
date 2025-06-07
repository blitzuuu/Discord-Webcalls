# Discord Proxy (Educational Use Only)

This is a Node.js proxy that removes frame-blocking headers from Discord’s web app, allowing it to be loaded in an iframe.

## How it works

- Proxies all requests to `https://discord.com`.
- Removes `X-Frame-Options` and `frame-ancestors` in `Content-Security-Policy`.
- Allows you to embed `http://localhost:3000/channels/@me` in an iframe.

## Usage

1. **Install dependencies:**
    ```
    npm install
    ```

2. **Start the proxy:**
    ```
    npm start
    ```

3. **In your browser or extension:**  
    Use `<iframe src="http://localhost:3000/channels/@me"></iframe>`

## WARNING

- This violates Discord’s Terms of Service and may get your account banned.
- May expose you to security risks.
- For educational purposes only.

---
