import type { Tool } from '$lib/types/tools.js';

export const tools: Tool[] = [
	// Frontend
	{
		slug: 'svelte',
		name: 'Svelte',
		description: 'Cybernetically enhanced web apps with compile-time optimizations',
		logo: '/images/tools/svelte-logo.png',
		category: 'frontend',
		website: 'https://svelte.dev',
		documentation: 'https://svelte.dev/docs',
		featured: true,
		color: '#ff3e00',
		tags: ['reactive', 'compiler', 'lightweight']
	},
	{
		slug: 'react',
		name: 'React',
		description: 'A JavaScript library for building user interfaces',
		logo: '/images/tools/react-logo.png',
		category: 'frontend',
		website: 'https://react.dev',
		documentation: 'https://react.dev/learn',
		featured: true,
		color: '#61dafb',
		tags: ['components', 'virtual-dom', 'hooks']
	},
	{
		slug: 'nextjs',
		name: 'Next.js',
		description: 'React framework with hybrid static & server rendering',
		logo: '/images/tools/nextjs-logo.png',
		category: 'frontend',
		website: 'https://nextjs.org',
		documentation: 'https://nextjs.org/docs',
		featured: true,
		color: '#000000',
		tags: ['react', 'ssr', 'static-generation']
	},
	{
		slug: 'tailwindcss',
		name: 'Tailwind CSS',
		description: 'Utility-first CSS framework for rapid UI development',
		logo: '/images/tools/tailwind-logo.png',
		category: 'frontend',
		website: 'https://tailwindcss.com',
		documentation: 'https://tailwindcss.com/docs',
		featured: true,
		color: '#06b6d4',
		tags: ['utility-first', 'responsive', 'customizable']
	},

	// Backend
	{
		slug: 'nodejs',
		name: 'Node.js',
		description: "JavaScript runtime built on Chrome's V8 engine",
		logo: '/images/tools/nodejs-logo.png',
		category: 'backend',
		website: 'https://nodejs.org',
		documentation: 'https://nodejs.org/docs',
		featured: true,
		color: '#339933',
		tags: ['javascript', 'server', 'npm']
	},
	{
		slug: 'express',
		name: 'Express.js',
		description: 'Fast, unopinionated web framework for Node.js',
		logo: '/images/tools/express-logo.png',
		category: 'backend',
		website: 'https://expressjs.com',
		documentation: 'https://expressjs.com/en/guide/routing.html',
		color: '#000000',
		tags: ['middleware', 'routing', 'minimal']
	},
	{
		slug: 'fastify',
		name: 'Fastify',
		description: 'Fast and low overhead web framework for Node.js',
		logo: '/images/tools/fastify-logo.png',
		category: 'backend',
		website: 'https://www.fastify.io',
		documentation: 'https://www.fastify.io/docs/latest/',
		color: '#000000',
		tags: ['performance', 'json-schema', 'typescript']
	},

	// Database
	{
		slug: 'postgresql',
		name: 'PostgreSQL',
		description: 'Advanced open source relational database',
		logo: '/images/tools/postgresql-logo.png',
		category: 'database',
		website: 'https://www.postgresql.org',
		documentation: 'https://www.postgresql.org/docs/',
		featured: true,
		color: '#336791',
		tags: ['sql', 'acid', 'extensible']
	},
	{
		slug: 'prisma',
		name: 'Prisma',
		description: 'Next-generation ORM for Node.js and TypeScript',
		logo: '/images/tools/prisma-logo.png',
		category: 'database',
		website: 'https://www.prisma.io',
		documentation: 'https://www.prisma.io/docs',
		featured: true,
		color: '#2d3748',
		tags: ['orm', 'type-safe', 'migrations']
	},
	{
		slug: 'supabase',
		name: 'Supabase',
		description: 'Open source Firebase alternative with PostgreSQL',
		logo: '/images/tools/supabase-logo.png',
		category: 'database',
		website: 'https://supabase.com',
		documentation: 'https://supabase.com/docs',
		color: '#3ecf8e',
		tags: ['postgresql', 'realtime', 'auth']
	},

	// Design
	{
		slug: 'figma',
		name: 'Figma',
		description: 'Collaborative interface design tool',
		logo: '/images/tools/figma-logo.png',
		category: 'design',
		website: 'https://www.figma.com',
		documentation: 'https://help.figma.com',
		featured: true,
		color: '#f24e1e',
		tags: ['design', 'prototyping', 'collaboration']
	},
	{
		slug: 'adobe-xd',
		name: 'Adobe XD',
		description: 'Vector-based user experience design tool',
		logo: '/images/tools/adobe-xd-logo.png',
		category: 'design',
		website: 'https://www.adobe.com/products/xd.html',
		color: '#ff61f6',
		tags: ['design', 'prototyping', 'adobe']
	},

	// DevOps
	{
		slug: 'vercel',
		name: 'Vercel',
		description: 'Platform for frontend frameworks and static sites',
		logo: '/images/tools/vercel-logo.png',
		category: 'devops',
		website: 'https://vercel.com',
		documentation: 'https://vercel.com/docs',
		color: '#000000',
		tags: ['deployment', 'serverless', 'cdn']
	},
	{
		slug: 'docker',
		name: 'Docker',
		description: 'Platform for developing, shipping, and running applications',
		logo: '/images/tools/docker-logo.png',
		category: 'devops',
		website: 'https://www.docker.com',
		documentation: 'https://docs.docker.com',
		color: '#2496ed',
		tags: ['containers', 'virtualization', 'deployment']
	},

	// Testing
	{
		slug: 'vitest',
		name: 'Vitest',
		description: 'Blazing fast unit test framework powered by Vite',
		logo: '/images/tools/vitest-logo.png',
		category: 'testing',
		website: 'https://vitest.dev',
		documentation: 'https://vitest.dev/guide/',
		color: '#729b1b',
		tags: ['unit-testing', 'vite', 'typescript']
	},
	{
		slug: 'playwright',
		name: 'Playwright',
		description: 'Framework for Web Testing and Automation',
		logo: '/images/tools/playwright-logo.png',
		category: 'testing',
		website: 'https://playwright.dev',
		documentation: 'https://playwright.dev/docs/intro',
		color: '#2EAD33',
		tags: ['e2e-testing', 'automation', 'cross-browser']
	},

	// Mobile
	{
		slug: 'swiftui',
		name: 'SwiftUI',
		description: 'Modern UI framework for building apps across all Apple platforms',
		logo: '/images/tools/swiftui.png',
		category: 'mobile',
		website: 'https://developer.apple.com/xcode/swiftui/',
		documentation: 'https://developer.apple.com/documentation/swiftui',
		featured: true,
		color: '#007AFF',
		tags: ['ios', 'macos', 'apple', 'declarative']
	},
	{
		slug: 'swiftdata',
		name: 'SwiftData',
		description: 'Modern persistence framework for Apple platforms built on SQLite',
		logo: '/images/tools/swiftdata.png',
		category: 'database',
		website: 'https://developer.apple.com/xcode/swiftdata/',
		documentation: 'https://developer.apple.com/documentation/swiftdata',
		color: '#007AFF',
		tags: ['persistence', 'sqlite', 'apple', 'ios']
	},

	// Other
	{
		slug: 'webflow',
		name: 'Webflow',
		description: 'Visual web development platform for building responsive websites',
		logo: '/images/tools/webflow-logo.png',
		category: 'design',
		website: 'https://webflow.com',
		documentation: 'https://university.webflow.com',
		color: '#4353FF',
		tags: ['no-code', 'visual', 'cms', 'responsive']
	}
];

export function getToolBySlug(slug: string): Tool | undefined {
	return tools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory() {
	return tools.reduce(
		(acc, tool) => {
			if (!acc[tool.category]) acc[tool.category] = [];
			acc[tool.category].push(tool);
			return acc;
		},
		{} as Record<string, Tool[]>
	);
}

export function getFeaturedTools() {
	return tools.filter((tool) => tool.featured);
}

// Project tool reference - only specify what's unique to the project
export interface ProjectToolRef {
	slug: string;
	role?: string;
	featured?: boolean;
}

// Get tools with project-specific roles merged in
export function getProjectTools(toolRefs: ProjectToolRef[]) {
	return toolRefs
		.map((ref) => {
			const tool = getToolBySlug(ref.slug);
			if (!tool) {
				console.warn(`Tool not found: ${ref.slug}`);
				return null;
			}
			return {
				...tool,
				role: ref.role,
				featured: ref.featured ?? tool.featured
			};
		})
		.filter((tool): tool is Tool & { role?: string } => tool !== null);
}
