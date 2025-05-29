<script lang="ts">
	import { page } from '$app/stores';

	let mobileMenuOpen = false;

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

<nav class="flex w-full justify-center px-4 py-4">
	<div class="flex w-full max-w-[1200px] flex-col">
		<!-- Main navbar row -->
		<div class="flex w-full items-center justify-between">
			<a href="/">
				<img src="logo.svg" alt="Logo" class="h-8" />
			</a>

			<!-- Desktop Navigation -->
			<ul class="hidden flex-row gap-2 md:flex">
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class="rounded-lg px-4 py-2 text-gray-600 transition-colors hover:bg-slate-100 hover:text-gray-900"
							class:active={$page.url.pathname === item.href}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>

			<!-- Mobile menu button -->
			<button
				class="rounded-lg p-2 transition-colors hover:bg-slate-100 md:hidden"
				on:click={toggleMobileMenu}
				aria-label="Toggle navigation menu"
				aria-expanded={mobileMenuOpen}
			>
				{#if mobileMenuOpen}
					<!-- Close icon (X) -->
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				{:else}
					<!-- Hamburger icon -->
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
			<div class="mt-4 border-t pt-4 md:hidden">
				<ul class="flex flex-col gap-1">
					{#each navItems as item}
						<li>
							<a
								href={item.href}
								class="block rounded-lg px-4 py-3 text-gray-600 transition-colors hover:bg-slate-100 hover:text-gray-900"
								class:active={$page.url.pathname === item.href}
								on:click={closeMobileMenu}
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
