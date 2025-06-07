# Discord Voice Call Minimal Extension

A Chromium extension to display only Discord voice calls and control them with hotkeys.

## Features

- Shows Discord in a popup, hiding most UI except voice calls.
- Hotkeys to join (`Ctrl+Shift+J`) and leave (`Ctrl+Shift+L`) voice channels.
- Simple, proof-of-concept code (may break if Discord updates UI).

## How to use

1. **Clone or Download**
   - Download this repository as a ZIP and extract, or clone with:
     ```
     git clone https://github.com/YOUR_USERNAME/discord-voice-extension.git
     ```

2. **Load as Unpacked Extension**
   - Go to `chrome://extensions/` in your Chromium-based browser.
   - Enable "Developer mode" (toggle upper right).
   - Click "Load unpacked" and select this folder.

3. **Open the Extension**
   - Click the extension icon and open the popup to load Discord.
   - Log in if needed.

4. **Use Hotkeys**
   - Use `Ctrl+Shift+J` to join a voice call (when available).
   - Use `Ctrl+Shift+L` to leave a voice call.

## Notes & Caveats

- **Fragile:** May break if Discord changes their UI.
- **Terms of Service:** Automating Discord UI may violate their ToS. Use at your own risk.
- **No Guarantee:** This is a demo/proof-of-concept.

---

**Not affiliated with Discord. For educational use only.**
