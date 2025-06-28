import type { PageLoad } from './$types';
import { getProjects } from '$lib/utils/content';

export const load: PageLoad = async () => {
	const projects = await getProjects();
	
	return {
		projects
	};
};
