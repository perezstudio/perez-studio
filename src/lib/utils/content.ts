export interface Post {
	slug: string;
	title: string;
	description: string;
	date: string;
	published: boolean;
	tags?: string[];
	coverImage?: string;
}

export interface Project {
	slug: string;
	title: string;
	description: string;
	date: string;
	published: boolean;
	tags?: string[];
	coverImage?: string;
	demoUrl?: string;
	githubUrl?: string;
	featured?: boolean;
}

export interface PostModule {
	default: any;
	metadata: Post;
}

export interface ProjectModule {
	default: any;
	metadata: Project;
}

export async function getPosts(): Promise<Post[]> {
	const modules = import.meta.glob<PostModule>('/src/content/blog/*.svx', { 
		eager: true 
	});

	const posts = Object.entries(modules).map(([path, module]) => {
		const slug = path.split('/').pop()?.replace('.svx', '') || '';
		return {
			...module.metadata,
			slug
		};
	});

	return posts
		.filter(post => post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getProjects(): Promise<Project[]> {
	const modules = import.meta.glob<ProjectModule>('/src/content/projects/*.svx', { 
		eager: true 
	});

	const projects = Object.entries(modules).map(([path, module]) => {
		const slug = path.split('/').pop()?.replace('.svx', '') || '';
		return {
			...module.metadata,
			slug
		};
	});

	return projects
		.filter(project => project.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string): Promise<PostModule | null> {
	const modules = import.meta.glob<PostModule>('/src/content/blog/*.svx', { 
		eager: true 
	});
	
	const postPath = `/src/content/blog/${slug}.svx`;
	const module = modules[postPath];
	
	if (!module) {
		return null;
	}
	
	return module;
}

export async function getProject(slug: string): Promise<ProjectModule | null> {
	const modules = import.meta.glob<ProjectModule>('/src/content/projects/*.svx', { 
		eager: true 
	});
	
	const projectPath = `/src/content/projects/${slug}.svx`;
	const module = modules[projectPath];
	
	if (!module) {
		return null;
	}
	
	return module;
}
