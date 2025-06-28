<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ projects } = data);

	// Move the filtering logic to the script block
	$: featuredProjects = projects.filter((p) => p.featured);
	$: otherProjects = projects.filter((p) => !p.featured);
</script>

<svelte:head>
	<title>Projects | Perez Studio</title>
	<meta name="description" content="Explore my latest projects and development work" />
</svelte:head>

<div>
	<header class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
		<div class="flex w-full max-w-[1248px] flex-col gap-2 md:px-6">
			<div class="flex max-w-3xl flex-col gap-2">
				<h1 class="text-4xl font-bold text-slate-900 md:text-5xl">Projects</h1>
				<p class="text-lg font-medium text-slate-600">
					I'm a developer and designer dedicated to creating digital tools that empower people to
					work more efficiently and unleash their creativity. My projects are all about merging
					technical innovation with user-focused design.
				</p>
			</div>
		</div>
	</header>

	<!-- Featured Projects -->
	{#if featuredProjects.length > 0}
		<section class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
			<div class="flex w-full max-w-[1248px] flex-col gap-4 md:px-6">
				<h2 class="text-3xl font-bold text-gray-900">Featured Projects</h2>
			</div>
			<div class="grid w-full max-w-[1248px] gap-8 lg:grid-cols-2">
				{#each featuredProjects as project}
					<a href="/projects/{project.slug}">
						<article class="group flex flex-col gap-2 overflow-hidden duration-300">
							{#if project.coverImage}
								<div class="aspect-video overflow-hidden rounded-lg bg-gray-200">
									<img
										src={project.coverImage}
										alt={project.title}
										class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
							{/if}
							<div class="flex flex-col gap-1 px-6">
								<h3
									class="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600"
								>
									{project.title}
								</h3>
								<div class="flex items-center gap-2">
									{#if project.tags}
										{#each project.tags.slice(0, 3) as tag}
											<span
												class="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800"
											>
												{tag}
											</span>
										{/each}
									{/if}
								</div>
							</div>
						</article>
					</a>
				{/each}
			</div>
		</section>
	{/if}

	<!-- All Projects -->
	{#if otherProjects.length > 0}
		<section class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
			<div class="flex w-full max-w-[1248px] flex-col gap-2 md:px-6">
				<h2 class="text-3xl font-bold text-gray-900">All Projects</h2>
			</div>
			<div class="grid w-full max-w-[1248px] gap-6 md:grid-cols-2 xl:grid-cols-3">
				{#each otherProjects as project}
					<a href="/projects/{project.slug}">
						<article class="group flex flex-col gap-2 overflow-hidden duration-300">
							{#if project.coverImage}
								<div class="aspect-video overflow-hidden rounded-lg bg-gray-200">
									<img
										src={project.coverImage}
										alt={project.title}
										class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
							{/if}
							<div class="flex flex-col gap-1 px-6">
								<h3
									class="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600"
								>
									{project.title}
								</h3>
								<div class="flex items-center gap-2">
									{#if project.tags}
										{#each project.tags.slice(0, 3) as tag}
											<span
												class="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800"
											>
												{tag}
											</span>
										{/each}
									{/if}
								</div>
							</div>
						</article>
					</a>
				{/each}
			</div>
		</section>
	{/if}

	{#if projects.length === 0}
		<div class="py-16 text-center">
			<h2 class="mb-4 text-2xl font-bold text-gray-900">No projects yet</h2>
			<p class="text-gray-600">Check back soon for exciting new projects!</p>
		</div>
	{/if}
</div>
