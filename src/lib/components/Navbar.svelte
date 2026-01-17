<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	let mobileMenuOpen = $state(false);

	const navItems = [
		{ href: '/projects', label: 'Projects' },
		{ href: '/about', label: 'About' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' }
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="sticky top-0 z-50 flex w-full justify-center border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-sm">
	<div class="flex w-full max-w-[1248px] flex-col md:px-6">
		<!-- Main navbar row -->
		<div class="flex w-full items-center justify-between">
			<a href="/" class="transition-opacity hover:opacity-80">
				<img src="/logo.svg" alt="Perez Studio" class="h-8" />
			</a>

			<!-- Desktop Navigation -->
			<ul class="hidden flex-row gap-1 md:flex">
				{#each navItems as item (item.href)}
					<li>
						<a
							href={item.href}
							class="rounded-lg px-4 py-2 text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
							class:bg-slate-100={$page.url.pathname === item.href || $page.url.pathname.startsWith(item.href + '/')}
							class:text-slate-900={$page.url.pathname === item.href || $page.url.pathname.startsWith(item.href + '/')}
							class:font-medium={$page.url.pathname === item.href || $page.url.pathname.startsWith(item.href + '/')}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>

			<!-- Mobile menu button -->
			<button
				class="rounded-lg p-2 transition-colors hover:bg-slate-100 md:hidden"
				onclick={toggleMobileMenu}
				aria-label="Toggle navigation menu"
				aria-expanded={mobileMenuOpen}
			>
				{#if mobileMenuOpen}
					<!-- Close icon (X) -->
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				{:else}
					<!-- Hamburger icon -->
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				{/if}
			</button>
		</div>

		<!-- Mobile Navigation Menu -->
		{#if mobileMenuOpen}
			<div class="mt-4 border-t border-slate-200 pt-4 md:hidden" transition:slide={{ duration: 200 }}>
				<ul class="flex flex-col gap-1">
					{#each navItems as item (item.href)}
						<li>
							<a
								href={item.href}
								class="block rounded-lg px-4 py-3 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
								class:bg-slate-100={$page.url.pathname === item.href || $page.url.pathname.startsWith(item.href + '/')}
								class:text-slate-900={$page.url.pathname === item.href || $page.url.pathname.startsWith(item.href + '/')}
								class:font-medium={$page.url.pathname === item.href || $page.url.pathname.startsWith(item.href + '/')}
								onclick={closeMobileMenu}
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</nav>
