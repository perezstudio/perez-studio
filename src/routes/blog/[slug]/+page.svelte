<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
	$: ({ post, content } = data);
</script>

<svelte:head>
	<title>{post.title} | Blog | Perez Studio</title>
	<meta name="description" content={post.description} />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.description} />
	{#if post.coverImage}
		<meta property="og:image" content={post.coverImage} />
	{/if}
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={post.date} />
	{#if post.tags}
		{#each post.tags as tag}
			<meta property="article:tag" content={tag} />
		{/each}
	{/if}
</svelte:head>

<article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Back Navigation -->
	<nav class="mb-8">
		<a 
			href="/blog" 
			class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
		>
			← Back to Blog
		</a>
	</nav>

	<!-- Post Header -->
	<header class="mb-12">
		{#if post.coverImage}
			<div class="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-8">
				<img 
					src={post.coverImage} 
					alt={post.title}
					class="w-full h-full object-cover"
				/>
			</div>
		{/if}
		
		<div class="flex flex-wrap items-center gap-2 mb-4">
			{#if post.tags}
				{#each post.tags as tag}
					<span class="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
						{tag}
					</span>
				{/each}
			{/if}
		</div>
		
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
			{post.title}
		</h1>
		
		<p class="text-xl text-gray-600 mb-6">
			{post.description}
		</p>
		
		<div class="flex flex-wrap items-center gap-6 text-sm text-gray-500">
			<time>
				Published on {new Date(post.date).toLocaleDateString('en-US', { 
					year: 'numeric', 
					month: 'long', 
					day: 'numeric' 
				})}
			</time>
			<span>•</span>
			<span>
				By Kevin Perez
			</span>
		</div>
	</header>

	<!-- Post Content -->
	<div class="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
		<svelte:component this={content} />
	</div>

	<!-- Post Footer -->
	<footer class="mt-16 pt-8 border-t border-gray-200">
		<div class="flex flex-col sm:flex-row items-center justify-between gap-4">
			<div class="text-center sm:text-left">
				<p class="text-gray-600 mb-2">Thanks for reading!</p>
				<p class="text-sm text-gray-500">
					Have thoughts or questions? 
					<a href="/contact" class="text-blue-600 hover:text-blue-800">Get in touch</a>
				</p>
			</div>
			<a 
				href="/blog" 
				class="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium"
			>
				← Read More Posts
			</a>
		</div>
	</footer>
</article>
