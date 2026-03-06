# Sounak Bhowmik — Research Portfolio

A modern research portfolio and writing website built with Next.js App Router for a quantum computation scientist.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- MDX blog pipeline
- Framer Motion
- KaTeX math rendering
- next-sitemap
- ESLint + Prettier

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
```

## Blog Authoring

Create new posts in `content/blog/*.mdx` with frontmatter:

```md
---
title: "Post Title"
date: "YYYY-MM-DD"
tags: ["Tag1", "Tag2"]
summary: "Short summary"
---
```

The blog supports:
- code blocks
- math equations (KaTeX)
- table of contents
- reading time
- tag filtering
- RSS (`/rss.xml` generated after build)

## Deployment (Vercel)

1. Push repository to GitHub.
2. Import project in Vercel.
3. Build command: `npm run build`
4. Output: `.next`
5. Deploy.

Optional: set canonical domain to `https://sounakbhowmik.vercel.app` and update `next-sitemap.config.js` if needed.
