<script lang="ts">
	import type { ProjectTool } from '$lib/types/tools.js';
	import ToolProfileCard from './ToolProfileCard.svelte';

	let {
		tools = [],
		showDescription = true,
		showRole = true,
		showFeatured = true,
		columns = 3
	}: {
		tools?: ProjectTool[];
		showDescription?: boolean;
		showRole?: boolean;
		showFeatured?: boolean;
		columns?: number;
	} = $props();

	let featuredTools = $derived(tools.filter((tool) => tool.featured));
	let otherTools = $derived(tools.filter((tool) => !tool.featured));
</script>

<section class="my-16 border-t border-gray-200 py-8">
	<h2 class="mb-8 text-center text-4xl font-bold text-gray-900">Tools Used</h2>

	{#if showFeatured && featuredTools.length > 0}
		<div class="mb-12">
			<h3 class="mb-6 text-2xl font-semibold text-gray-700">Primary Technologies</h3>
			<div
				class="grid grid-cols-1 gap-6 md:grid-cols-2"
				class:lg:grid-cols-2={columns === 2 || featuredTools.length === 2}
				class:lg:grid-cols-3={columns === 3 && featuredTools.length >= 3}
			>
				{#each featuredTools as tool (tool.slug)}
					<ToolProfileCard
						{tool}
						size="large"
						{showDescription}
						{showRole}
						showTags={false}
					/>
				{/each}
			</div>
		</div>
	{/if}

	{#if otherTools.length > 0}
		<div>
			{#if featuredTools.length > 0}
				<h3 class="mb-6 text-2xl font-semibold text-gray-700">Supporting Technologies</h3>
			{/if}
			<div
				class="grid grid-cols-1 gap-6 md:grid-cols-2"
				class:lg:grid-cols-2={columns === 2}
				class:lg:grid-cols-3={columns === 3}
			>
				{#each otherTools as tool (tool.slug)}
					<ToolProfileCard
						{tool}
						size="medium"
						{showDescription}
						{showRole}
						showTags={false}
					/>
				{/each}
			</div>
		</div>
	{/if}

	{#if tools.length === 0}
		<p class="my-8 text-center italic text-gray-600">No tools specified for this project.</p>
	{/if}
</section>
