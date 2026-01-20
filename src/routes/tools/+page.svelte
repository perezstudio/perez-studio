<script lang="ts">
	import ToolProfileCard from '$lib/components/ToolProfileCard.svelte';
	import { tools, getToolsByCategory, getFeaturedTools } from '$lib/data/tools.js';
	import type { Tool } from '$lib/types/tools.js';

	let selectedCategory = $state('all');
	let searchQuery = $state('');

	// Generate categories dynamically from tools data
	let categories = $derived.by(() => {
		const categorySet = new Set<string>();
		tools.forEach((tool) => {
			if (Array.isArray(tool.category)) {
				tool.category.forEach((cat) => categorySet.add(cat));
			} else {
				categorySet.add(tool.category);
			}
		});

		// Convert to sorted array and create label map
		const categoryList = Array.from(categorySet).sort();
		const result: Record<string, string> = { all: 'All Tools' };

		categoryList.forEach((cat) => {
			// Convert slug to title case label (e.g., 'project-management' -> 'Project Management')
			result[cat] = cat
				.split('-')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');
		});

		return result;
	});

	let filteredTools = $derived.by(() => {
		let filtered = tools;

		// Filter by category
		if (selectedCategory !== 'all') {
			filtered = filtered.filter((tool) => {
				if (Array.isArray(tool.category)) {
					return tool.category.includes(selectedCategory);
				}
				return tool.category === selectedCategory;
			});
		}

		// Filter by search query
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			filtered = filtered.filter(
				(tool) =>
					tool.name.toLowerCase().includes(query) ||
					tool.description.toLowerCase().includes(query) ||
					tool.tags?.some((tag) => tag.toLowerCase().includes(query))
			);
		}

		return filtered;
	});

	let featuredTools = $derived(getFeaturedTools());
	let toolsByCategory = $derived(getToolsByCategory());

	// Mock project counts (in real app, you'd calculate these from your projects)
	const projectCounts: Record<string, number> = {
		svelte: 8,
		sveltekit: 6,
		react: 12,
		nextjs: 7,
		tailwindcss: 15,
		nodejs: 18,
		postgresql: 10,
		prisma: 9,
		figma: 14,
		vercel: 11
	};
</script>

<svelte:head>
	<title>Tools & Technologies | Perez Studio</title>
	<meta
		name="description"
		content="Explore the tools and technologies I use to build amazing digital experiences."
	/>
</svelte:head>

<div>
	<!-- Header -->
	<header class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
		<div class="flex w-full max-w-[1248px] flex-col gap-2 md:px-6">
			<div class="flex max-w-3xl flex-col gap-2">
				<h1 class="text-4xl font-bold text-slate-900 md:text-5xl">Tools & Technologies</h1>
				<p class="text-lg font-medium text-slate-600">
					The arsenal of tools and technologies I use to bring ideas to life. Click on any tool to
					see the projects where I've used it.
				</p>
			</div>
		</div>
	</header>

	<!-- Search & Filters -->
	<section class="flex w-full flex-col items-center px-4 pb-8">
		<div class="flex w-full max-w-[1248px] flex-col gap-4 md:px-6">
			<!-- Search Input -->
			<div class="max-w-md">
				<label for="tool-search" class="sr-only">Search tools</label>
				<input
					id="tool-search"
					type="text"
					placeholder="Search tools..."
					bind:value={searchQuery}
					class="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
				/>
			</div>

			<!-- Category Filters -->
			<div class="flex flex-wrap gap-2">
				{#each Object.entries(categories) as [key, label] (key)}
					<button
						class="rounded-lg px-4 py-2 text-sm transition-all duration-200 {selectedCategory ===
						key
							? 'bg-cyan-100 text-cyan-700 font-medium'
							: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}"
						onclick={() => (selectedCategory = key)}
					>
						{label}
						{#if key !== 'all' && toolsByCategory[key]}
							<span class="ml-1 opacity-70">({toolsByCategory[key]?.length || 0})</span>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Featured Tools -->
	{#if featuredTools.length > 0 && selectedCategory === 'all' && !searchQuery.trim()}
		<section class="flex w-full flex-col items-center gap-8 px-4 pt-8 pb-10">
			<div class="flex w-full max-w-[1248px] flex-col gap-4 md:px-6">
				<h2 class="text-3xl font-bold text-gray-900">Featured Tools</h2>
			</div>
			<div class="grid w-full max-w-[1248px] gap-6 md:grid-cols-2 md:px-6 xl:grid-cols-3">
				{#each featuredTools as tool (tool.slug)}
					<ToolProfileCard
						{tool}
						size="large"
						showProjectCount={true}
						projectCount={projectCounts[tool.slug] || 0}
					/>
				{/each}
			</div>
		</section>
	{/if}

	<!-- All Tools -->
	<section class="flex w-full flex-col items-center gap-8 px-4 pt-8 pb-10">
		<div class="flex w-full max-w-[1248px] flex-col gap-4 md:px-6">
			<h2 class="text-3xl font-bold text-gray-900">
				{selectedCategory === 'all' && !searchQuery.trim() ? 'All Tools' : 'Results'}
			</h2>
		</div>
		{#if filteredTools.length > 0}
			<div class="grid w-full max-w-[1248px] gap-6 md:grid-cols-2 md:px-6 xl:grid-cols-3">
				{#each filteredTools as tool (tool.slug)}
					<ToolProfileCard
						{tool}
						size="medium"
						showProjectCount={true}
						projectCount={projectCounts[tool.slug] || 0}
					/>
				{/each}
			</div>
		{:else}
			<div class="w-full max-w-[1248px] py-16 text-center md:px-6">
				<h3 class="mb-2 text-xl font-bold text-gray-900">No tools found</h3>
				<p class="text-gray-600">Try adjusting your search or category filter.</p>
			</div>
		{/if}
	</section>
</div>
