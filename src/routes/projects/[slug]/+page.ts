import type { PageLoad } from './$types';
import { getProject } from '$lib/utils/content';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const project = await getProject(params.slug);
		
		if (!project) {
			console.error(`Project not found: ${params.slug}`);
			throw error(404, `Project "${params.slug}" not found`);
		}
		
		return {
			project: project.metadata,
			content: project.default
		};
	} catch (err) {
		if (err instanceof Error && 'status' in err) {
			// Re-throw SvelteKit errors
			throw err;
		}
		console.error('Error loading project:', err);
		throw error(500, 'Failed to load project');
	}
};
