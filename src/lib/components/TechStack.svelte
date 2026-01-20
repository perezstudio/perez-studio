<script lang="ts">
	import type { Tool } from '$lib/types/tools.js';
	import ToolProfileCard from './ToolProfileCard.svelte';

	let {
		technologies = []
	}: {
		technologies?: Tool[];
	} = $props();
</script>

<div class="my-8 rounded-xl border-l-4 border-cyan-500 bg-slate-50 p-6">
	<h3 class="m-0 mb-4 text-xl font-semibold text-slate-800">Technologies Used</h3>
	<div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
		{#each technologies as tech (tech.slug)}
			<ToolProfileCard
				tool={tech}
				size="small"
				showDescription={false}
				showTags={false}
			/>
		{/each}
	</div>
</div>
