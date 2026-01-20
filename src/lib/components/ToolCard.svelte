<script lang="ts">
	import type { Tool } from '$lib/types/tools.js';
	import ToolProfileCard from './ToolProfileCard.svelte';

	let {
		tool,
		projectCount = 0,
		showProjectCount = true,
		size = 'medium'
	}: {
		tool: Tool;
		projectCount?: number;
		showProjectCount?: boolean;
		size?: 'small' | 'medium' | 'large';
	} = $props();
</script>

<ToolProfileCard
	{tool}
	{size}
	showDescription={true}
	showTags={true}
	{showProjectCount}
	{projectCount}
/>
