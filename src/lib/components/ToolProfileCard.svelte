<script lang="ts">
	import type { Tool, ProjectTool } from '$lib/types/tools.js';

	let {
		tool,
		size = 'medium',
		showDescription = true,
		showTags = true,
		showProjectCount = false,
		showRole = false,
		projectCount = 0
	}: {
		tool: Tool | ProjectTool;
		size?: 'small' | 'medium' | 'large';
		showDescription?: boolean;
		showTags?: boolean;
		showProjectCount?: boolean;
		showRole?: boolean;
		projectCount?: number;
	} = $props();

	// Size configurations
	const bannerHeights = {
		small: 'h-12',
		medium: 'h-20',
		large: 'h-32'
	};

	const logoSizes = {
		small: 'w-10 h-10',
		medium: 'w-16 h-16',
		large: 'w-24 h-24'
	};

	const logoOffsets = {
		small: '-mt-5',
		medium: '-mt-8',
		large: '-mt-12'
	};

	const logoBorders = {
		small: 'border-2',
		medium: 'border-4',
		large: 'border-4'
	};

	const nameSizes = {
		small: 'text-base',
		medium: 'text-lg',
		large: 'text-xl'
	};

	const descriptionSizes = {
		small: 'text-xs',
		medium: 'text-sm',
		large: 'text-base'
	};

	const contentPadding = {
		small: 'px-3 pb-3',
		medium: 'px-4 pb-4',
		large: 'px-6 pb-6'
	};

	const logoMarginBottom = {
		small: 'mb-1',
		medium: 'mb-2',
		large: 'mb-3'
	};

	// Top padding to account for logo overlap
	const logoSpacing = {
		small: 'pt-6',
		medium: 'pt-10',
		large: 'pt-14'
	};

	// Check if tool has a role (ProjectTool)
	let role = $derived('role' in tool ? tool.role : undefined);
</script>

<a
	href="/tools/{tool.slug}"
	class="tool-profile-card group block overflow-hidden rounded-xl border border-slate-200 bg-white text-inherit no-underline transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
	style="--tool-color: {tool.color || '#6b7280'}"
>
	<!-- Banner Section with Logo -->
	<div class="relative {bannerHeights[size]} w-full overflow-visible">
		<div class="h-full w-full overflow-hidden">
			{#if tool.banner && tool.banner.trim() !== ''}
				<img
					src={tool.banner}
					alt=""
					class="not-prose block h-full w-full object-cover object-center"
				/>
			{:else}
				<div
					class="h-full w-full"
					style="background: linear-gradient(135deg, color-mix(in srgb, {tool.color || '#6b7280'} 20%, white) 0%, color-mix(in srgb, {tool.color || '#6b7280'} 40%, white) 100%)"
				></div>
			{/if}
		</div>
		<!-- Accent bar on hover -->
		<div
			class="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
			style="background-color: {tool.color || '#6b7280'}"
		></div>
		<!-- Logo positioned at bottom of banner, overlapping -->
		<div class="absolute bottom-0 left-4 flex translate-y-1/2">
			<div class="{logoBorders[size]} {logoSizes[size]} flex items-center justify-center overflow-hidden rounded-2xl border-white bg-white shadow-lg">
				{#if tool.logo}
					<img
						src={tool.logo}
						alt="{tool.name} logo"
						class="h-full w-full"
					/>
				{:else}
					<div
						class="flex h-full w-full items-center justify-center rounded-2xl font-bold text-white"
						style="background-color: {tool.color || '#6b7280'}"
					>
						{tool.name.charAt(0)}
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- Content Section -->
	<div class="{contentPadding[size]} {logoSpacing[size]}">
		<!-- Tool Info -->
		<div class="text-left">
			<h3 class="{nameSizes[size]} font-semibold text-slate-900 transition-colors group-hover:text-slate-700">
				{tool.name}
			</h3>

			{#if showDescription && tool.description}
				<p class="{descriptionSizes[size]} mt-1 leading-relaxed text-slate-500">
					{tool.description}
				</p>
			{/if}

			{#if showRole && role}
				<p class="{descriptionSizes[size]} mt-1 font-medium italic" style="color: {tool.color || '#6b7280'}">
					{role}
				</p>
			{/if}

			{#if showTags && tool.tags && tool.tags.length > 0}
				<div class="mt-3 flex flex-wrap gap-1">
					{#each tool.tags.slice(0, 3) as tag (tag)}
						<span class="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
							{tag}
						</span>
					{/each}
				</div>
			{/if}

			{#if showProjectCount && projectCount > 0}
				<div class="mt-2 text-sm font-medium" style="color: {tool.color || '#6b7280'}">
					{projectCount} project{projectCount !== 1 ? 's' : ''}
				</div>
			{/if}
		</div>
	</div>

	{#if tool.featured}
		<div
			class="absolute right-2 top-2 rounded bg-gradient-to-r from-amber-400 to-amber-500 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-white"
		>
			Featured
		</div>
	{/if}
</a>

<style>
	.tool-profile-card:hover {
		background: color-mix(in srgb, var(--tool-color) 5%, white);
	}
</style>
