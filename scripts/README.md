# Scripts

Local developer utilities used while building the audit pipeline. Not part of the deployed web app.

- `audit.ts` — core audit logic: fetches images from Google Drive and classifies them with Gemini.
- - `run_audit.js` — Puppeteer script that drives the audit end-to-end against a local dev server.
  - - `get_key.js` — small helper that reads `GEMINI_API_KEY` from the local env for debugging; do not commit its output.
   
    - Run with `npm install` then `node scripts/run_audit.js` against a local `npm run dev` server.
    - 
