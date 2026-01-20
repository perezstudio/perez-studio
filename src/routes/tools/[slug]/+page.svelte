<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Home from '$lib/icons/home.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let { data }: { data: PageData } = $props();
	let tool = $derived(data.tool);
	let projects = $derived(data.projects);
	let projectCount = $derived(data.projectCount);
</script>

<svelte:head>
	<title>{tool.name} | Tools | Perez Studio</title>
	<meta name="description" content="{tool.description} - See projects where I've used {tool.name}." />
	<meta property="og:title" content={tool.name} />
	<meta property="og:description" content={tool.description} />
	{#if tool.banner}
		<meta property="og:image" content={tool.banner} />
	{/if}
</svelte:head>

<article class="flex flex-col gap-8">
	<!-- Tool Header -->
	<header class="flex w-full flex-col items-center px-4 pt-10">
		<div class="flex w-full max-w-312 md:px-6">
			<div class="flex flex-row items-start gap-6 lg:items-center">
				<!-- Logo (hidden on mobile/tablet, visible on desktop) -->
				<div class="hidden h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg lg:block">
					{#if tool.logo}
						<img
							src={tool.logo}
							alt="{tool.name} logo"
							class="h-full w-full"
						/>
					{:else}
						<div
							class="flex h-full w-full items-center justify-center rounded-2xl text-2xl font-bold text-white"
							style="background-color: {tool.color || '#6b7280'}"
						>
							{tool.name.charAt(0)}
						</div>
					{/if}
				</div>

				<!-- Title Content -->
				<div class="flex max-w-3xl flex-col gap-2">
					<Breadcrumb
						items={[
							{ label: 'Home', href: '/', icon: Home },
							{ label: 'Tools', href: '/tools' },
							{ label: tool.name }
						]}
					/>

					<!-- Logo (visible on mobile/tablet, between breadcrumb and title) -->
					<div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg lg:hidden">
						{#if tool.logo}
							<img
								src={tool.logo}
								alt="{tool.name} logo"
								class="h-full w-full"
							/>
						{:else}
							<div
								class="flex h-full w-full items-center justify-center rounded-2xl text-2xl font-bold text-white"
								style="background-color: {tool.color || '#6b7280'}"
							>
								{tool.name.charAt(0)}
							</div>
						{/if}
					</div>

					<h1 class="text-4xl font-bold text-gray-900 md:text-5xl">
						{tool.name}
					</h1>

					<p class="text-xl text-gray-600">
						{tool.description}
					</p>
				</div>
			</div>
		</div>
	</header>

	<!-- Banner Image Section -->
	{#if tool.banner && tool.banner.trim() !== ''}
		<section class="flex w-full justify-center lg:px-4">
			<div class="max-h-115 w-full max-w-312 overflow-hidden bg-gray-200 lg:rounded-xl">
				<img
					src={tool.banner}
					alt=""
					class="not-prose block h-full w-full object-cover object-center"
				/>
			</div>
		</section>
	{/if}

	<!-- Metadata Section -->
	<section class="flex w-full justify-center px-4">
		<div class="flex w-full max-w-312 flex-col items-start justify-between gap-4 md:flex-row md:items-center md:px-6">
			<div class="flex flex-wrap gap-8">
				<!-- Category -->
				<div class="flex flex-col gap-1">
					<span class="text-xs font-medium uppercase text-gray-500">Category</span>
					<span
						class="inline-block rounded-lg px-3 py-1 text-sm font-semibold capitalize text-white"
						style="background-color: {tool.color || '#6b7280'}"
					>
						{tool.category}
					</span>
				</div>

				<!-- Project Count -->
				{#if projectCount > 0}
					<div class="flex flex-col gap-1">
						<span class="text-xs font-medium uppercase text-gray-500">Projects</span>
						<span class="text-gray-900">
							{projectCount} project{projectCount !== 1 ? 's' : ''}
						</span>
					</div>
				{/if}

				<!-- Tags -->
				{#if tool.tags && tool.tags.length > 0}
					<div class="flex flex-col gap-1">
						<span class="text-xs font-medium uppercase text-gray-500">Tags</span>
						<div class="flex flex-wrap gap-2">
							{#each tool.tags as tag (tag)}
								<span class="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
									{tag}
								</span>
							{/each}
						</div>
					</div>
				{/if}
			</div>

			<!-- Action Buttons -->
			<div class="flex gap-2">
				{#if tool.website}
					<a
						href={tool.website}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
						style="background-color: {tool.color || '#6b7280'}"
					>
						Website
					</a>
				{/if}
				{#if tool.documentation}
					<a
						href={tool.documentation}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
					>
						Documentation
					</a>
				{/if}
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
		<div class="flex w-full max-w-312 flex-col gap-6 md:px-6">
			<h2 class="text-3xl font-bold text-gray-900">Projects using {tool.name}</h2>

			{#if projects.length > 0}
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
					{#each projects as project (project.slug)}
						<ProjectCard {project} highlightTool={tool.slug} />
					{/each}
				</div>
			{:else}
				<div class="py-16 text-center">
					<p class="text-gray-600">
						No projects using {tool.name} have been added yet. Check back soon!
					</p>
				</div>
			{/if}
		</div>
	</section>
</article>
