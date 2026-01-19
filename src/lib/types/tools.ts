// Tool and project linking types
export interface Tool {
	slug: string;
	name: string;
	description: string;
	logo?: string; // Square logo/icon image for cards and lists
	banner?: string; // Wide banner image for detail pages and featured sections
	category:
		| 'frontend'
		| 'backend'
		| 'database'
		| 'design'
		| 'devops'
		| 'mobile'
		| 'testing'
		| 'other';
	website?: string;
	documentation?: string;
	version?: string;
	featured?: boolean;
	color?: string; // Brand color for theming
	tags?: string[];
}

export interface ProjectTool extends Tool {
	role?: string; // How this tool was used in the project
	featured?: boolean; // Is this a primary tool for the project?
	notes?: string; // Specific notes about usage
}

// Extended portfolio post type with tools
export interface PortfolioPostWithTools extends Omit<PortfolioPost, 'technologies'> {
	tools: ProjectTool[];
	primaryTools?: string[]; // Slugs of main tools used
}

// Tool page metadata
export interface ToolPage {
	tool: Tool;
	projectCount: number;
	projects: PortfolioPostWithTools[];
	relatedTools: Tool[];
}

// Helper functions
export function getProjectsByTool(
	projects: PortfolioPostWithTools[],
	toolSlug: string
): PortfolioPostWithTools[] {
	return projects.filter((project) => project.tools.some((tool) => tool.slug === toolSlug));
}

export function getToolsByCategory(tools: Tool[]): Record<string, Tool[]> {
	return tools.reduce(
		(acc, tool) => {
			if (!acc[tool.category]) acc[tool.category] = [];
			acc[tool.category].push(tool);
			return acc;
		},
		{} as Record<string, Tool[]>
	);
}

export function getFeaturedTools(tools: Tool[]): Tool[] {
	return tools.filter((tool) => tool.featured);
}

export function getRelatedTools(
	projects: PortfolioPostWithTools[],
	currentToolSlug: string
): Tool[] {
	const relatedToolCounts: Record<string, { tool: Tool; count: number }> = {};

	// Find projects that use the current tool
	const projectsWithTool = getProjectsByTool(projects, currentToolSlug);

	// Count how often other tools appear with this tool
	projectsWithTool.forEach((project) => {
		project.tools.forEach((tool) => {
			if (tool.slug !== currentToolSlug) {
				if (!relatedToolCounts[tool.slug]) {
					relatedToolCounts[tool.slug] = { tool, count: 0 };
				}
				relatedToolCounts[tool.slug].count++;
			}
		});
	});

	// Return tools sorted by frequency
	return Object.values(relatedToolCounts)
		.sort((a, b) => b.count - a.count)
		.slice(0, 6)
		.map((item) => item.tool);
}
