# MDSveX Blog and Projects Setup

Your SvelteKit application now includes a fully functional blog and projects system using MDSveX! Here's what has been set up and how to use it.

## What's Been Added

### 🗂️ Content Structure
```
src/
├── content/
│   ├── blog/          # Blog posts (.svx files)
│   └── projects/      # Project showcases (.svx files)
├── lib/
│   └── utils/
│       └── content.ts # Content loading utilities
└── routes/
    ├── blog/          # Blog listing and individual posts
    │   ├── +page.svelte
    │   ├── +page.ts
    │   └── [slug]/
    └── projects/      # Projects listing and individual projects
        ├── +page.svelte
        ├── +page.ts
        └── [slug]/
```

### 📝 Content Types

#### Blog Posts
Each blog post is a `.svx` file with frontmatter:
```markdown
---
title: "Your Post Title"
description: "A brief description"
date: "2024-12-15"
published: true
tags: ["tag1", "tag2"]
coverImage: "/images/cover.jpg"
---

# Your Content Here
Write your blog post content in Markdown with full Svelte component support!
```

#### Projects
Each project is a `.svx` file with frontmatter:
```markdown
---
title: "Project Title"
description: "Project description"
date: "2024-12-15"
published: true
featured: true
tags: ["React", "TypeScript"]
coverImage: "/images/project-cover.jpg"
demoUrl: "https://demo.com"
githubUrl: "https://github.com/user/repo"
---

# Project Content
Describe your project with full Markdown support!
```

## How to Add New Content

### Adding a New Blog Post

1. Create a new `.svx` file in `src/content/blog/`:
   ```bash
   touch src/content/blog/my-new-post.svx
   ```

2. Add frontmatter and content:
   ```markdown
   ---
   title: "My New Blog Post"
   description: "What this post is about"
   date: "2024-12-15"
   published: true
   tags: ["web-dev", "svelte"]
   ---

   # My New Blog Post
   
   Your content here...
   ```

3. The post will automatically appear on `/blog` and be accessible at `/blog/my-new-post`

### Adding a New Project

1. Create a new `.svx` file in `src/content/projects/`:
   ```bash
   touch src/content/projects/my-awesome-project.svx
   ```

2. Add frontmatter and content:
   ```markdown
   ---
   title: "My Awesome Project"
   description: "What this project does"
   date: "2024-12-15"
   published: true
   featured: false
   tags: ["SvelteKit", "TypeScript"]
   demoUrl: "https://demo.com"
   githubUrl: "https://github.com/user/repo"
   ---

   # My Awesome Project
   
   Project details...
   ```

3. The project will automatically appear on `/projects` and be accessible at `/projects/my-awesome-project`

## Features

### ✨ What's Included

- **Automatic routing**: Files in content folders become pages
- **Frontmatter support**: Metadata for posts and projects
- **Tag system**: Organize content with tags
- **Featured projects**: Highlight your best work
- **Responsive design**: Works on all devices
- **SEO optimized**: Meta tags and structured data
- **Syntax highlighting**: Code blocks with language support
- **Typography**: Beautiful prose styling with Tailwind Typography

### 🔧 Technical Features

- **TypeScript support**: Full type safety
- **Dynamic imports**: Content loaded on demand
- **Error handling**: 404 pages for missing content
- **Image optimization**: Ready for optimized images
- **Search engine friendly**: Proper meta tags and OpenGraph

## Customization

### Styling
The pages use Tailwind CSS classes. You can customize the appearance by modifying the Svelte components in:
- `src/routes/blog/+page.svelte` - Blog listing page
- `src/routes/blog/[slug]/+page.svelte` - Individual blog posts
- `src/routes/projects/+page.svelte` - Projects listing page
- `src/routes/projects/[slug]/+page.svelte` - Individual projects

### Content Loading
The content loading logic is in `src/lib/utils/content.ts`. You can modify this file to:
- Add new content types
- Change sorting logic
- Add filtering capabilities
- Modify the metadata structure

### MDSveX Configuration
The MDSveX configuration is in `svelte.config.js`. Current features:
- Syntax highlighting for code blocks
- Support for `.svx` files
- TypeScript aliases for code languages

## Sample Content

Several sample blog posts and projects have been created to demonstrate the system:

### Blog Posts
- Getting Started with SvelteKit and MDSveX
- Modern CSS Techniques for 2024
- Building Accessible Web Applications
- The Future of Web Development in 2025

### Projects
- Portfolio Website (featured)
- E-commerce Platform (featured)
- Task Management App
- Mobile Weather App

## Next Steps

1. **Replace sample content** with your own blog posts and projects
2. **Add images** to the `static/images/` directory for cover images
3. **Customize styling** to match your brand
4. **Set up image optimization** (optional)
5. **Add search functionality** (optional)
6. **Set up RSS feeds** (optional)

## Development

To run the development server:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

The content system will work automatically with your existing SvelteKit setup!

## Using Svelte Components in Content

Since you're using MDSveX, you can include Svelte components directly in your content:

```markdown
---
title: "Interactive Blog Post"
date: "2024-12-15"
published: true
---

<script>
  import MyComponent from '$lib/components/MyComponent.svelte';
  let count = 0;
</script>

# Interactive Content

Here's a regular paragraph.

<MyComponent bind:count />

<button on:click={() => count++}>
  Count: {count}
</button>

Back to regular Markdown!
```

This makes your blog posts and project descriptions incredibly powerful and interactive!
