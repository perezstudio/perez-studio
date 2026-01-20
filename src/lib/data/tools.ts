import type { Tool } from '$lib/types/tools.js';

export const tools: Tool[] = [
	// Frontend
	{
		slug: 'svelte',
		name: 'Svelte',
		description: 'Cybernetically enhanced web apps with compile-time optimizations',
		logo: '/images/tools/svelte-icon.png',
		banner: '/images/tools/svelte-banner.png',
		category: 'frontend',
		website: 'https://svelte.dev',
		documentation: 'https://svelte.dev/docs',
		featured: true,
		dailyDriver: true,
		color: '#ff3e00',
		tags: ['reactive', 'compiler', 'lightweight']
	},
	{
		slug: 'remix',
		name: 'Remix',
		description:
			'A full stack web framework that lets you focus on the user interface and work back through web standards',
		logo: '/images/tools/remix-icon.png',
		banner: '/images/tools/remix-banner.png',
		category: 'frontend',
		website: 'https://v2.remix.run/',
		documentation: 'https://v2.remix.run/docs',
		featured: false,
		dailyDriver: true,
		color: '#000000',
		tags: ['react', 'ssr', 'static-generation']
	},
	{
		slug: 'tailwindcss',
		name: 'Tailwind CSS',
		description: 'Utility-first CSS framework for rapid UI development',
		logo: '/images/tools/tailwindcss-icon.png',
		banner: '/images/tools/tailwindcss-banner.png',
		category: 'frontend',
		website: 'https://tailwindcss.com',
		documentation: 'https://tailwindcss.com/docs',
		featured: true,
		dailyDriver: true,
		color: '#06b6d4',
		tags: ['utility-first', 'responsive', 'customizable']
	},

	// Backend
	{
		slug: 'hono',
		name: 'Hono JS',
		description: 'Lightweight web framework for Node.js',
		logo: '/images/tools/hono-icon.png',
		banner: '/images/tools/hono-banner.png',
		category: 'backend',
		website: 'https://honojs.dev',
		documentation: 'https://honojs.dev/docs',
		featured: true,
		color: '#FF5B11',
		tags: ['typescript', 'web', 'framework']
	},
	{
		slug: 'bun',
		name: 'Bun',
		description: 'Fast, all-in-one JavaScript runtime',
		logo: '/images/tools/bun-icon.png',
		banner: '/images/tools/bun-banner.png',
		category: 'backend',
		website: 'https://bun.sh',
		documentation: 'https://bun.sh/docs',
		featured: false,
		color: '#FBF0DF',
		tags: ['javascript', 'runtime', 'framework']
	},
	{
		slug: 'drizzle',
		name: 'Drizzle',
		description: 'Type-safe SQL library for TypeScript',
		logo: '/images/tools/drizzle-icon.png',
		banner: '/images/tools/drizzle-banner.png',
		category: 'backend',
		website: 'https://drizzle.team',
		documentation: 'https://drizzle.team/docs',
		featured: true,
		color: '#C5F74F',
		tags: ['typescript', 'sql', 'orm']
	},

	// Database
	{
		slug: 'supabase',
		name: 'Supabase',
		description: 'Open source Firebase alternative with PostgreSQL',
		logo: '/images/tools/supabase-icon.png',
		banner: '/images/tools/supabase-banner.png',
		category: ['database', 'backend'],
		website: 'https://supabase.com',
		documentation: 'https://supabase.com/docs',
		dailyDriver: true,
		color: '#3ecf8e',
		tags: ['postgresql', 'realtime', 'auth']
	},
	{
		slug: 'firebase',
		name: 'Firebase',
		description: 'Google platform for building mobile and web applications',
		logo: '/images/tools/firebase-icon.png',
		banner: '/images/tools/firebase-banner.png',
		category: ['database', 'backend'],
		website: 'https://firebase.google.com',
		documentation: 'https://firebase.google.com/docs',
		featured: false,
		dailyDriver: true,
		color: '#FFCA28',
		tags: ['realtime', 'auth', 'hosting', 'google']
	},

	// Design
	{
		slug: 'figma',
		name: 'Figma',
		description: 'Collaborative interface design tool',
		logo: '/images/tools/figma-icon.png',
		banner: '/images/tools/figma-banner.png',
		category: ['design', 'prototyping', 'collaboration'],
		website: 'https://www.figma.com',
		documentation: 'https://help.figma.com',
		featured: false,
		dailyDriver: true,
		color: '#f24e1e',
		tags: ['design', 'prototyping', 'collaboration']
	},
	{
		slug: 'sketch',
		name: 'Sketch',
		description: 'MacOS user interface design tool',
		logo: '/images/tools/sketch-icon.png',
		banner: '/images/tools/sketch-banner.png',
		category: ['design', 'prototyping', 'collaboration'],
		website: 'https://www.sketch.com',
		documentation: 'https://help.sketch.com',
		featured: true,
		dailyDriver: true,
		color: '#F7B500',
		tags: ['design', 'prototyping', 'collaboration']
	},
	{
		slug: 'illustrator',
		name: 'Adobe Illustrator',
		description: 'Vector graphics editor',
		logo: '/images/tools/illustrator-icon.png',
		banner: '/images/tools/illustrator-banner.png',
		category: 'design',
		website: 'https://www.adobe.com/products/illustrator.html',
		documentation: 'https://helpx.adobe.com/illustrator.html',
		featured: false,
		color: '#FF9A00',
		tags: ['design', 'prototyping', 'collaboration']
	},
	{
		slug: 'photoshop',
		name: 'Adobe Photoshop',
		description: 'Raster graphics editor',
		logo: '/images/tools/photoshop-icon.png',
		banner: '/images/tools/photoshop-banner.png',
		category: 'design',
		website: 'https://www.adobe.com/products/photoshop.html',
		documentation: 'https://helpx.adobe.com/photoshop.html',
		featured: false,
		color: '#31A8FF',
		tags: ['design', 'prototyping', 'collaboration']
	},
	{
		slug: 'affinity',
		name: 'Affinity',
		description: 'Raster graphics editor',
		logo: '/images/tools/affinity-icon.png',
		banner: '/images/tools/affinity-banner.png',
		category: 'design',
		website: 'https://affinity.serif.com/en-us/',
		documentation: 'https://help.affinity.serif.com/',
		featured: false,
		color: '#A7F176',
		tags: ['design', 'prototyping', 'collaboration']
	},

	// DevOps
	{
		slug: 'vercel',
		name: 'Vercel',
		description: 'Platform for frontend frameworks and static sites',
		logo: '/images/tools/vercel-icon.png',
		banner: '/images/tools/vercel-banner.png',
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
		logo: '/images/tools/docker-icon.png',
		banner: '/images/tools/docker-banner.png',
		category: 'devops',
		website: 'https://www.docker.com',
		documentation: 'https://docs.docker.com',
		dailyDriver: true,
		color: '#2496ed',
		tags: ['containers', 'virtualization', 'deployment']
	},

	{
		slug: 'googlecloud',
		name: 'Google Cloud',
		description: 'Suite of cloud computing services for building and deploying applications',
		logo: '/images/tools/googlecloud-icon.png',
		banner: '/images/tools/googlecloud-banner.png',
		category: 'devops',
		website: 'https://cloud.google.com',
		documentation: 'https://cloud.google.com/docs',
		dailyDriver: true,
		color: '#4285F4',
		tags: ['cloud', 'infrastructure', 'serverless']
	},

	// Languages
	{
		slug: 'swift',
		name: 'Swift',
		description: 'Modern UI framework for building apps across all Apple platforms',
		logo: '/images/tools/swift-icon.png',
		banner: '/images/tools/swift-banner.png',
		category: ['mobile', 'language'],
		website: 'https://developer.apple.com/xcode/swiftui/',
		documentation: 'https://developer.apple.com/documentation/swiftui',
		featured: false,
		color: '#FF9800',
		tags: ['ios', 'macos', 'apple', 'declarative']
	},
	{
		slug: 'html',
		name: 'HTML',
		description: 'Markup language for structuring and presenting content on the web',
		logo: '/images/tools/html-icon.png',
		banner: '/images/tools/html-banner.png',
		category: ['web-development', 'language'],
		website: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		documentation: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		featured: false,
		color: '#E44D26',
		tags: ['web', 'markup', 'structure', 'presentation']
	},
	{
		slug: 'css',
		name: 'CSS',
		description:
			'Style sheet language for describing the presentation of a document written in a markup language',
		logo: '/images/tools/css-icon.png',
		banner: '/images/tools/css-banner.png',
		category: ['web-development', 'language'],
		website: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		featured: false,
		color: '#1572B6',
		tags: ['web', 'style', 'presentation', 'layout']
	},
	{
		slug: 'javascript',
		name: 'JavaScript',
		description: 'Programming language for web development',
		logo: '/images/tools/js-icon.png',
		banner: '/images/tools/js-banner.png',
		category: ['web-development', 'language'],
		website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		featured: false,
		color: '#F7DF1E',
		tags: ['web', 'programming', 'scripting', 'client-side']
	},

	// Other
	{
		slug: 'webflow',
		name: 'Webflow',
		description: 'Visual web development platform for building responsive websites',
		logo: '/images/tools/webflow-icon.png',
		banner: '/images/tools/webflow-banner.png',
		category: ['design', 'web-development', 'frontend'],
		website: 'https://webflow.com',
		documentation: 'https://university.webflow.com',
		color: '#4353FF',
		tags: ['no-code', 'visual', 'cms', 'responsive']
	},

	// Editors
	{
		slug: 'zed',
		name: 'Zed',
		description: 'Text editor for developers',
		logo: '/images/tools/zed-icon.png',
		banner: '/images/tools/zed-banner.png',
		category: 'editor',
		website: 'https://zed.dev',
		documentation: 'https://zed.dev/docs',
		featured: true,
		dailyDriver: true,
		color: '#084CCF',
		tags: ['development', 'text-editor', 'code']
	},
	{
		slug: 'vscode',
		name: 'Visual Studio Code',
		description: 'Free and open-source code editor developed by Microsoft',
		logo: '/images/tools/vscode-icon.png',
		banner: '/images/tools/vscode-banner.png',
		category: 'editor',
		website: 'https://code.visualstudio.com',
		documentation: 'https://code.visualstudio.com/docs',
		color: '#007ACC',
		tags: ['development', 'text-editor', 'code']
	},
	{
		slug: 'xcode',
		name: 'XCode',
		description: 'Integrated development environment for macOS',
		logo: '/images/tools/xcode-icon.png',
		banner: '/images/tools/xcode-banner.png',
		category: 'editor',
		website: 'https://developer.apple.com/xcode/',
		documentation: 'https://developer.apple.com/documentation/xcode',
		color: '#147EFB',
		tags: ['development', 'text-editor', 'code']
	},

	// Project Management
	{
		slug: 'trello',
		name: 'Trello',
		description: 'Visual project management tool for organizing tasks and workflows',
		logo: '/images/tools/trello-icon.png',
		banner: '/images/tools/trello-banner.png',
		category: 'project-management',
		website: 'https://trello.com',
		documentation: 'https://help.trello.com',
		color: '#0052CC',
		tags: ['project-management', 'task', 'workflow']
	},
	{
		slug: 'notion',
		name: 'Notion',
		description: 'All-in-one workspace for organizing and managing information',
		logo: '/images/tools/notion-icon.png',
		banner: '/images/tools/notion-banner.png',
		category: 'project-management',
		website: 'https://notion.so',
		documentation: 'https://www.notion.so/help',
		color: '#000000',
		tags: ['project-management', 'task', 'workflow']
	},
	{
		slug: 'jira',
		name: 'Jira',
		description: 'Project management tool for tracking issues and bugs',
		logo: '/images/tools/jira-icon.png',
		banner: '/images/tools/jira-banner.png',
		category: 'project-management',
		website: 'https://www.atlassian.com/software/jira',
		documentation: 'https://confluence.atlassian.com/jira',
		color: '#0052CC',
		tags: ['project-management', 'issue', 'bug']
	},
	{
		slug: 'asana',
		name: 'Asana',
		description: 'Project management tool for organizing and managing tasks',
		logo: '/images/tools/asana-icon.png',
		banner: '/images/tools/asana-banner.png',
		category: 'project-management',
		website: 'https://asana.com',
		documentation: 'https://asana.com/help',
		dailyDriver: true,
		color: '#F06A6A',
		tags: ['project-management', 'task', 'workflow']
	},
	{
		slug: 'things',
		name: 'Things 3',
		description: 'Task management tool for organizing and managing tasks',
		logo: '/images/tools/things-icon.png',
		banner: '/images/tools/things-banner.png',
		category: 'project-management',
		website: 'https://culturedcode.com/things/',
		documentation: 'https://culturedcode.com/things/help',
		color: '#4A90D9',
		tags: ['project-management', 'task', 'workflow']
	}
];

export function getToolBySlug(slug: string): Tool | undefined {
	return tools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory() {
	return tools.reduce(
		(acc, tool) => {
			const categories = Array.isArray(tool.category) ? tool.category : [tool.category];
			categories.forEach((cat) => {
				if (!acc[cat]) acc[cat] = [];
				acc[cat].push(tool);
			});
			return acc;
		},
		{} as Record<string, Tool[]>
	);
}

export function getFeaturedTools() {
	return tools.filter((tool) => tool.featured);
}

export function getDailyDriverTools() {
	return tools.filter((tool) => tool.dailyDriver);
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
