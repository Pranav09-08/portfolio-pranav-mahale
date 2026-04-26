# Student Portfolio (Premium Frontend Stack)

Professional, modular portfolio built with:

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- MDX blog (file-based, no backend)

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Folder Structure

```text
src/
	app/
		blog/
			[slug]/page.tsx
			page.tsx
		globals.css
		layout.tsx
		page.tsx
	components/
		layout/
			site-footer.tsx
			site-header.tsx
		sections/
			about-section.tsx
			contact-section.tsx
			experience-section.tsx
			hero-section.tsx
			projects-section.tsx
			skills-section.tsx
		ui/
			container.tsx
			reveal.tsx
			section-title.tsx
	config/
		site.ts
	content/
		blog/
			*.mdx
	data/
		portfolio.ts
	lib/
		mdx.ts
		utils.ts
	types/
		portfolio.ts
public/
	documents/
		Pranav_Kiran_Mahale_Resume.pdf
```

## Personalize With Your Resume

1. Update profile details in src/config/site.ts.
2. Replace skills, projects, and experiences in src/data/portfolio.ts.
3. Keep your resume PDF in public/documents and update resumePath if filename changes.
4. Add or edit blog posts in src/content/blog using MDX frontmatter.

## Blog Frontmatter Format

```md
---
title: "Post title"
excerpt: "Short summary"
publishedAt: "2026-04-26"
tags:
	- tag1
	- tag2
---
```

## Build

```bash
npm run build
npm run start
```
