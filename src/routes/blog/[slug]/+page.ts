import type { PageLoad } from './$types';
import { getPost } from '$lib/utils/content';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await getPost(params.slug);
		
		if (!post) {
			console.error(`Post not found: ${params.slug}`);
			throw error(404, `Post "${params.slug}" not found`);
		}
		
		return {
			post: post.metadata,
			content: post.default
		};
	} catch (err) {
		if (err instanceof Error && 'status' in err) {
			// Re-throw SvelteKit errors
			throw err;
		}
		console.error('Error loading post:', err);
		throw error(500, 'Failed to load post');
	}
};
