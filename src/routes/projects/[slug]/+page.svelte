<script lang="ts">
	import type { PageData } from './$types';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Home from '$lib/icons/home.svelte';

	let { data }: { data: PageData } = $props();
	let project = $derived(data.project);
	let content = $derived(data.content);

	let copied = $state(false);

	async function copyLink() {
		try {
			await navigator.clipboard.writeText(window.location.href);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy link:', err);
		}
	}
</script>

<svelte:head>
	<title>{project.title} | Projects | Perez Studio</title>
	<meta name="description" content={project.description} />
	<meta property="og:title" content={project.title} />
	<meta property="og:description" content={project.description} />
	{#if project.ogImage || project.bannerImage}
		<meta property="og:image" content={project.ogImage || project.bannerImage} />
	{/if}
	{#if project.twitterImage}
		<meta name="twitter:image" content={project.twitterImage} />
	{/if}
</svelte:head>

<article class="flex flex-col gap-8">
	<!-- Project Header -->
	<header class="flex w-full flex-col items-center px-4 pt-10">
		<div class="flex w-full max-w-312 md:px-6">
			<div class="flex max-w-3xl flex-col gap-2">
				<Breadcrumb
					items={[
						{ label: 'Home', href: '/', icon: Home },
						{ label: 'Projects', href: '/projects' },
						{ label: project.title }
					]}
				/>

				<h1 class="text-4xl font-bold text-gray-900 md:text-5xl">
					{project.title}
				</h1>

				<p class="text-xl text-gray-600">
					{project.description}
				</p>
			</div>
		</div>
	</header>

	<!-- Banner Image Section -->
	{#if project.bannerImage}
		<section class="flex w-full justify-center lg:px-4">
			<div class="max-h-115 w-full max-w-312 overflow-hidden bg-gray-200 lg:rounded-xl">
				<img src={project.bannerImage} alt={project.title} class="h-full w-full object-cover object-top" />
			</div>
		</section>
	{/if}

	<!-- Metadata Section -->
	<section class="flex w-full justify-center px-4">
		<div class="flex w-full max-w-312 flex-col items-start justify-between gap-4 md:flex-row md:items-center md:px-6">
			<div class="flex flex-wrap gap-8">
				<div class="flex flex-col gap-1">
					<span class="text-xs font-medium uppercase text-gray-500">Published On</span>
					<time class="text-gray-900">
						{new Date(project.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</time>
				</div>
				{#if project.tags && project.tags.length > 0}
					<div class="flex flex-col gap-1">
						<span class="text-xs font-medium uppercase text-gray-500">Tags</span>
						<div class="flex flex-wrap gap-2">
							{#each project.tags as tag}
								<span class="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
									{tag}
								</span>
							{/each}
						</div>
					</div>
				{/if}
			</div>
			<button
				onclick={copyLink}
				class="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
			>
				{#if copied}
					Copied!
				{:else}
					Copy Link
				{/if}
			</button>
		</div>
	</section>

	<!-- Project Content -->
	<div class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
		<div class="flex w-full max-w-312 flex-col gap-2 md:px-6">
			<div
				class="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 max-w-none"
			>
				<svelte:component this={content} />
			</div>
		</div>
	</div>
</article>
