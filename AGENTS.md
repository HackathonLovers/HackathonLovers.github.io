AGENTS

This repository is frequently edited by human contributors and automated assistants (agents). Use this document to explain agent expectations and workflows.

1. Purpose
- Describe what changes the agent may make: small content edits, metadata/SEO updates, accessibility fixes, and generating sitemaps.

2. Allowed actions
- Update static HTML/CSS/JS files.
- Create or update `robots.txt` and `sitemap.xml`.
- Add or update structured data (JSON-LD) and Open Graph/Twitter meta tags.
- Improve accessibility landmarks and ARIA attributes.

3. Not allowed without human approval
- Large refactors of build systems or dependency changes.
- Pushing secrets, API keys, or credentials.
- Changing domain ownership or DNS configuration.

4. Communication
- Agent edits should be accompanied by a concise changelog entry in the commit message or PR body.
- For multi-step tasks, maintain a todo list and mark items when completed.

5. Example commands
- Preview locally:

```bash
python3 -m http.server 8000
```

6. Contact
- For any unsure change, open an issue or contact the repository maintainer before proceeding.
