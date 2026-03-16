# Portfolio Website

![GitHub Repo stars](https://img.shields.io/github/stars/krochet94/Portfolio?color=red&logo=github&style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/krochet94/Portfolio?color=red&logo=github&style=for-the-badge)

Personal portfolio website built with **React + TypeScript + Vite**, and deployed to **GitHub Pages**.

## Tech Stack

- React 19 + TypeScript
- Vite
- React Router
- React Bootstrap + custom CSS
- React Icons
- EmailJS

## Features

- Multi-page layout (Home, About, Projects, Contacts)
- Responsive UI for desktop and mobile
- Runtime content loading from external JSON
- Safe fallback to local default content when external content is unavailable
- Optional runtime quote source from external API

## Dynamic Runtime Content

At runtime, the app attempts to load portfolio content from:

- `VITE_PORTFOLIO_REPO_URL`

If the URL is missing or the request fails, the app falls back to `src/content/defaultContent.ts`.

The dynamic JSON can control:

- Typewriter strings
- Projects
- Skillset
- Tools
- Social links
- CV URL

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_PORTFOLIO_REPO_URL=https://raw.githubusercontent.com/krochet94/project_config/main/portfolio-content.json
VITE_QUOTES_API_URL=https://quoteslate.vercel.app/api/quotes/random?count=50
```

Notes:

- `VITE_PORTFOLIO_REPO_URL` is optional (app uses local defaults when absent/unreachable).
- `VITE_QUOTES_API_URL` is optional (About page uses built-in fallback quotes when absent/unreachable).

### Run Locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Serve Built Files

```bash
npm run start
```

## Deployment (GitHub Pages)

This repository is configured for GitHub Pages deployment via `gh-pages`.

```bash
npm run deploy
```

Deployment-related settings:

- `package.json` → `homepage: https://krochet94.github.io/Portfolio/`
- `vite.config.ts` → `base: "/Portfolio/"`

## External Content JSON Shape (Example)

```json
{
  "typewriterStrings": ["MERN Stack Developer", "Fullstack Web Developer"],
  "projects": [
    {
      "imgPath": "https://example.com/image.png",
      "title": "Project Name",
      "description": "Project description",
      "ghLink": "https://github.com/user/repo",
      "demoLink": "https://example.com",
      "isBlog": false
    }
  ],
  "skillset": [{ "icon": "DiReact", "desc": "React" }],
  "tools": [{ "icon": "SiGithub", "desc": "GitHub" }],
  "socialLinks": [
    {
      "platform": "GitHub",
      "url": "https://github.com/krochet94",
      "icon": "AiFillGithub"
    }
  ],
  "contact": {
    "cvUrl": "https://example.com/cv.pdf"
  }
}
```

You can host this JSON in any public URL (for example, a GitHub raw file) and update it without redeploying app code.



