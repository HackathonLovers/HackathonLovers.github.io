# Hackathon Lovers — Website

This repository contains the static website for Hackathon Lovers. It hosts the Spanish, a small community subsite.

Quick overview
- **Live domain:** https://hackathonlovers.com
- **Build:** Static HTML/CSS/JS (no build system required).
- **Key folders:** `static/` (assets), `empresas/` (enterprise pages), `comunidad/` (community pages)

SEO & crawling
- `robots.txt` points to `/sitemap.xml` on the primary domain.
- `sitemap.xml` (static) lives at the repository root — expand it if you add pages.

How to preview locally
1. Serve the folder with a simple static server, e.g.:

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Contributing
- Edit HTML in the relevant folder and open locally to verify.
- Keep canonical URLs consistent (use `https://hackathonlovers.com/...`).

Related files
- `robots.txt` — crawler rules
- `sitemap.xml` — site map (update when adding pages)
- `AGENTS.md` — describes agent workflows used to edit the site

If you want, I can auto-generate a full `sitemap.xml` including every HTML page in the tree.
