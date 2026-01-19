<script lang="ts">
	import type { Component } from 'svelte';
	import Home from '$lib/icons/home.svelte';

	interface BreadcrumbItem {
		label: string;
		href?: string;
		icon?: Component<{ className?: string }>;
	}

	interface Props {
		items: BreadcrumbItem[];
	}

	let { items }: Props = $props();
</script>

<nav aria-label="Breadcrumb">
	<ol class="flex items-center gap-2 text-sm text-slate-500">
		{#each items as item, i}
			{#if i > 0}
				<li class="text-slate-400" aria-hidden="true">/</li>
			{/if}
			<li>
				{#if item.href}
					<a
						href={item.href}
						class="group inline-flex items-baseline gap-1 transition-colors hover:text-cyan-500"
					>
						{#if item.icon}
							<svelte:component
								this={item.icon}
								className="w-3.5 h-3.5 fill-slate-500 transition-colors group-hover:fill-cyan-500 relative top-0.5"
							/>
						{/if}
						{item.label}
					</a>
				{:else}
					<span class="text-slate-700">{item.label}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
