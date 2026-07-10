# Sol's Relic System Wiki

Player and server-owner documentation for Sol's Relic System v1.55, verified against the mod code for Minecraft 1.16.5, 1.20.1, 1.21.1, and 1.21.11.

## Local preview

```powershell
python -m pip install -r requirements.txt
python -m mkdocs serve
```

Open `http://127.0.0.1:8000`.

## Publish

Push this directory to a public GitHub repository and enable **Settings > Pages > GitHub Actions**. The included workflow builds and deploys the site automatically.

Public site: `https://markmochi.github.io/sols-relic-system-wiki/`

If a source texture used inside an SVG is replaced, run `powershell -ExecutionPolicy Bypass -File tools/embed-svg-assets.ps1` before publishing. This embeds the real mod texture so browsers can render it inside the standalone visual.

The wiki deliberately uses the Java classes, resource JSON, language files, and textures as its authority. Existing changelogs and description Markdown files were not used as factual sources.
