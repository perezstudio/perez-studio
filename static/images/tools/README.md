# Tool Logo Requirements

This directory should contain high-quality logo images for each tool used in your portfolio. 

## Image Specifications

- **Format**: PNG with transparent background (preferred) or high-quality JPG
- **Size**: 200x200px minimum, 400x400px recommended
- **Quality**: High resolution, clean, and professional looking
- **Naming**: Use the tool slug + "-logo.png" (e.g., "sveltekit-logo.png")

## Required Tool Logos

Based on your tools.ts file, you'll need these logos:

### Frontend
- `svelte-logo.png` - Svelte logo
- `sveltekit-logo.png` - SvelteKit logo  
- `react-logo.png` - React logo
- `nextjs-logo.png` - Next.js logo
- `tailwind-logo.png` - Tailwind CSS logo

### Backend
- `nodejs-logo.png` - Node.js logo
- `express-logo.png` - Express.js logo
- `fastify-logo.png` - Fastify logo

### Database
- `postgresql-logo.png` - PostgreSQL logo
- `prisma-logo.png` - Prisma logo
- `supabase-logo.png` - Supabase logo

### Design
- `figma-logo.png` - Figma logo
- `adobe-xd-logo.png` - Adobe XD logo

### DevOps
- `vercel-logo.png` - Vercel logo
- `docker-logo.png` - Docker logo

### Testing
- `vitest-logo.png` - Vitest logo
- `playwright-logo.png` - Playwright logo

## Where to Get Logos

1. **Official Brand Resources**: Most companies provide official logo downloads
   - Figma: https://www.figma.com/community/
   - Vercel: https://vercel.com/design
   - Supabase: https://supabase.com/brand-assets
   - etc.

2. **Logo Repositories**:
   - Simple Icons: https://simpleicons.org/
   - Brand Icons: https://github.com/simple-icons/simple-icons
   - SVG Logos: https://svgporn.com/

3. **Create Placeholder Images**: 
   - Use the existing icons from `/static/icons/` as fallbacks
   - Convert SVG icons to PNG if needed
   - Ensure proper sizing and quality

## Usage in Components

The ToolsUsed component will:
1. First try to load the `logo` image (high-quality brand logo)
2. Fall back to `icon` if logo is not available
3. Fall back to a text-based placeholder if neither exists

This ensures your portfolio always displays properly while you collect the high-quality logos.
