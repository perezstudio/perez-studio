<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let posts = $derived(data.posts);

	let latestPost = $derived(posts[0]);
	let otherPosts = $derived(posts.slice(1));
</script>

<svelte:head>
	<title>Blog | Perez Studio</title>
	<meta name="description" content="Read my latest thoughts on web development, design, and technology" />
</svelte:head>

<div>
	<header class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
		<div class="flex w-full max-w-[1248px] flex-col gap-2 md:px-6">
			<div class="flex max-w-3xl flex-col gap-2">
				<h1 class="text-4xl font-bold text-slate-900 md:text-5xl">Blog</h1>
				<p class="text-lg font-medium text-slate-600">
					Thoughts, tutorials, and insights on web development, design, and the ever-evolving world of technology.
				</p>
			</div>
		</div>
	</header>

	<!-- Latest Post -->
	{#if latestPost}
		<section class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
			<div class="flex w-full max-w-[1248px] flex-col gap-4 md:px-6">
				<h2 class="text-3xl font-bold text-gray-900">Latest Post</h2>
			</div>
			<div class="grid w-full max-w-[1248px] gap-8 lg:grid-cols-2">
				<a href="/blog/{latestPost.slug}">
					<article class="group flex flex-col gap-2 overflow-hidden duration-300">
						{#if latestPost.coverImage && latestPost.coverImage.trim() !== ''}
							<div class="aspect-video overflow-hidden rounded-lg bg-gray-200">
								<img
									src={latestPost.coverImage}
									alt={latestPost.title}
									class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
						{/if}
						<div class="flex flex-col gap-1 px-6">
							<h3
								class="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600"
							>
								{latestPost.title}
							</h3>
							<div class="flex items-center gap-2">
								{#if latestPost.tags}
									{#each latestPost.tags.slice(0, 3) as tag (tag)}
										<span
											class="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800"
										>
											{tag}
										</span>
									{/each}
								{/if}
							</div>
						</div>
					</article>
				</a>
			</div>
		</section>
	{/if}

	<!-- All Posts -->
	{#if otherPosts.length > 0}
		<section class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
			<div class="flex w-full max-w-[1248px] flex-col gap-2 md:px-6">
				<h2 class="text-3xl font-bold text-gray-900">All Posts</h2>
			</div>
			<div class="grid w-full max-w-[1248px] gap-6 md:grid-cols-2 xl:grid-cols-3">
				{#each otherPosts as post (post.slug)}
					<a href="/blog/{post.slug}">
						<article class="group flex flex-col gap-2 overflow-hidden duration-300">
							{#if post.coverImage && post.coverImage.trim() !== ''}
								<div class="aspect-video overflow-hidden rounded-lg bg-gray-200">
									<img
										src={post.coverImage}
										alt={post.title}
										class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
							{/if}
							<div class="flex flex-col gap-1 px-6">
								<h3
									class="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600"
								>
									{post.title}
								</h3>
								<div class="flex items-center gap-2">
									{#if post.tags}
										{#each post.tags.slice(0, 3) as tag (tag)}
											<span
												class="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800"
											>
												{tag}
											</span>
										{/each}
									{/if}
								</div>
							</div>
						</article>
					</a>
				{/each}
			</div>
		</section>
	{/if}

	{#if posts.length === 0}
		<div class="py-16 text-center">
			<h2 class="mb-4 text-2xl font-bold text-gray-900">No posts yet</h2>
			<p class="text-gray-600">Check back soon for exciting new content!</p>
		</div>
	{/if}
</div>
