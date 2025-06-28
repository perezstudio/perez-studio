<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
	$: ({ project, content } = data);
</script>

<svelte:head>
	<title>{project.title} | Projects | Perez Studio</title>
	<meta name="description" content={project.description} />
	<meta property="og:title" content={project.title} />
	<meta property="og:description" content={project.description} />
	{#if project.coverImage}
		<meta property="og:image" content={project.coverImage} />
	{/if}
</svelte:head>

<article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Back Navigation -->
	<nav class="mb-8">
		<a 
			href="/projects" 
			class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
		>
			← Back to Projects
		</a>
	</nav>

	<!-- Project Header -->
	<header class="mb-12">
		{#if project.coverImage}
			<div class="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-8">
				<img 
					src={project.coverImage} 
					alt={project.title}
					class="w-full h-full object-cover"
				/>
			</div>
		{/if}
		
		<div class="flex flex-wrap items-center gap-2 mb-4">
			{#if project.tags}
				{#each project.tags as tag}
					<span class="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
						{tag}
					</span>
				{/each}
			{/if}
		</div>
		
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
			{project.title}
		</h1>
		
		<p class="text-xl text-gray-600 mb-6">
			{project.description}
		</p>
		
		<div class="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
			<time>
				Published on {new Date(project.date).toLocaleDateString('en-US', { 
					year: 'numeric', 
					month: 'long', 
					day: 'numeric' 
				})}
			</time>
		</div>
		
		<!-- Project Links -->
		{#if project.demoUrl || project.githubUrl}
			<div class="flex flex-wrap gap-4">
				{#if project.demoUrl}
					<a 
						href={project.demoUrl} 
						target="_blank" 
						rel="noopener noreferrer"
						class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
					>
						View Live Demo →
					</a>
				{/if}
				{#if project.githubUrl}
					<a 
						href={project.githubUrl} 
						target="_blank" 
						rel="noopener noreferrer"
						class="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
					>
						View on GitHub →
					</a>
				{/if}
			</div>
		{/if}
	</header>

	<!-- Project Content -->
	<div class="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
		<svelte:component this={content} />
	</div>

	<!-- Related Projects Navigation -->
	<footer class="mt-16 pt-8 border-t border-gray-200">
		<div class="text-center">
			<a 
				href="/projects" 
				class="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium"
			>
				← View All Projects
			</a>
		</div>
	</footer>
</article>
