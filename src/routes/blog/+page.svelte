<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ posts } = data);

	// Move the filtering logic to the script block
	$: latestPost = posts[0];
	$: otherPosts = posts.slice(1);
</script>

<svelte:head>
	<title>Blog | Perez Studio</title>
	<meta name="description" content="Read my latest thoughts on web development, design, and technology" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<header class="text-center mb-16">
		<h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
			Blog
		</h1>
		<p class="text-xl text-gray-600 max-w-3xl mx-auto">
			Thoughts, tutorials, and insights on web development, design, and the ever-evolving world of technology.
		</p>
	</header>

	{#if posts.length > 0}
		<!-- Latest Post -->
		{#if latestPost}
			<section class="mb-20">
				<div class="bg-linear-to-r from-blue-600 to-purple-700 rounded-2xl overflow-hidden shadow-xl">
					<div class="grid lg:grid-cols-2 gap-0">
						{#if latestPost.coverImage}
							<div class="aspect-video lg:aspect-auto bg-gray-200 overflow-hidden">
								<img
									src={latestPost.coverImage}
									alt={latestPost.title}
									class="w-full h-full object-cover"
								/>
							</div>
						{/if}
						<div class="p-8 lg:p-12 text-white">
							<div class="flex items-center gap-2 mb-4">
								<span class="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full">
									Latest Post
								</span>
								{#if latestPost.tags}
									<span class="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full">
										{latestPost.tags[0]}
									</span>
								{/if}
							</div>
							<h2 class="text-3xl lg:text-4xl font-bold mb-4">
								<a href="/blog/{latestPost.slug}" class="hover:text-blue-100 transition-colors">
									{latestPost.title}
								</a>
							</h2>
							<p class="text-blue-100 mb-6 text-lg">
								{latestPost.description}
							</p>
							<div class="flex items-center justify-between">
								<time class="text-blue-100">
									{new Date(latestPost.date).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</time>
								<a
									href="/blog/{latestPost.slug}"
									class="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
								>
									Read More →
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		{/if}

		<!-- All Posts -->
		{#if otherPosts.length > 0}
			<section>
				<h2 class="text-3xl font-bold text-gray-900 mb-8">Recent Posts</h2>
				<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
					{#each otherPosts as post}
						<article class="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
							{#if post.coverImage}
								<div class="aspect-video bg-gray-200 overflow-hidden">
									<img
										src={post.coverImage}
										alt={post.title}
										class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
							{/if}
							<div class="p-6">
								<div class="flex items-center gap-2 mb-3">
									{#if post.tags}
										{#each post.tags.slice(0, 2) as tag}
											<span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
												{tag}
											</span>
										{/each}
									{/if}
								</div>
								<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
									<a href="/blog/{post.slug}" class="stretched-link">
										{post.title}
									</a>
								</h3>
								<p class="text-gray-600 mb-4 line-clamp-3">
									{post.description}
								</p>
								<time class="text-sm text-gray-500">
									{new Date(post.date).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</time>
							</div>
						</article>
					{/each}
				</div>
			</section>
		{/if}
	{:else}
		<div class="text-center py-16">
			<h2 class="text-2xl font-bold text-gray-900 mb-4">No posts yet</h2>
			<p class="text-gray-600">Check back soon for exciting new content!</p>
		</div>
	{/if}
</div>

<style>
	.stretched-link::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}

	.line-clamp-3 {
		display: -webkit-box;
		-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
