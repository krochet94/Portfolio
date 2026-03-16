# Portfolio Website

![GitHub Repo stars](https://img.shields.io/github/stars/krochet94/Portfolio?color=red&logo=github&style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/krochet94/Portfolio?color=red&logo=github&style=for-the-badge)

Personal portfolio website built with React + Vite and deployed to GitHub Pages.

## Built With

- React + TypeScript
- Vite
- React Bootstrap
- React Icons
- EmailJS

## Features

- 📖 Multi-page layout
- 🎨 Responsive styling with Bootstrap + custom CSS
- 📱 Mobile-friendly sections
- 🔄 Runtime content loading from external JSON (no redeploy for content updates)

## Dynamic Content (No Redeploy)

The following sections are now dynamic and can be updated without redeploying this app:

- Typewriter strings
- Projects
- Skillset
- Tools
- Social Icons / Links
- CV Download URL

### How it works

At runtime, the app tries to fetch content from:

`VITE_PORTFOLIO_CONTENT_URL`

If the URL is missing or fetch fails, it automatically falls back to local default content so the site still works.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create an env file (for local/dev and build):

```bash
copy .env.example .env
```

3. Update `.env` with your JSON URL:

```env
VITE_PORTFOLIO_CONTENT_URL=https://raw.githubusercontent.com/krochet94/project_config/main/portfolio-content.json
```

4. Run locally:

```bash
npm run dev
```

## Content JSON Template

Use `portfolio-content.sample.json` as your template.

Recommended workflow:

1. Create a separate repo (or branch) for content.
2. Add `portfolio-content.json` based on the sample.
3. Edit that JSON file in GitHub UI anytime.
4. Commit changes.
5. Refresh your deployed portfolio page.

No app redeploy is needed for content-only changes.

## Deploy (GitHub Pages)

```bash
npm run deploy
```

> Note: You only redeploy when app code changes. Content updates happen through the external JSON file.


