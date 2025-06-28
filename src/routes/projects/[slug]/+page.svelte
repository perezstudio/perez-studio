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

<article class="flex flex-col gap-4">
	<!-- Back Navigation -->
	<nav class="flex w-full flex-col items-center gap-8 px-4 py-4">
		<div class="flex w-full max-w-[1248px] flex-col gap-2 md:px-6">
			<a
				href="/projects"
				class="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
			>
				← Back to Projects
			</a>
		</div>
		{#if project.coverImage}
			<div class="aspect-video w-full max-w-[1248px] overflow-hidden rounded-xl bg-gray-200">
				<img src={project.coverImage} alt={project.title} class="h-full w-full object-cover" />
			</div>
		{/if}
	</nav>

	<!-- Project Header -->
	<header class="flex w-full flex-col items-center gap-8 px-4">
		<div class="flex w-full max-w-[1248px] flex-col gap-2 md:px-6">
			<div class="flex flex-wrap items-center gap-2">
				{#if project.tags}
					{#each project.tags as tag}
						<span class="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
							{tag}
						</span>
					{/each}
				{/if}
			</div>

			<h1 class="text-4xl font-bold text-gray-900 md:text-5xl">
				{project.title}
			</h1>

			<p class="text-xl text-gray-600">
				{project.description}
			</p>

			<div class="flex flex-wrap items-center gap-6 text-sm text-gray-500">
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
							class="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
						>
							View Live Demo →
						</a>
					{/if}
					{#if project.githubUrl}
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
						>
							View on GitHub →
						</a>
					{/if}
				</div>
			{/if}
		</div>
	</header>

	<!-- Project Content -->
	<div class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
		<div class="flex w-full max-w-[1248px] flex-col gap-2 md:px-6">
			<div
				class="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 max-w-none"
			>
				<svelte:component this={content} />
			</div>
		</div>
	</div>
</article>
