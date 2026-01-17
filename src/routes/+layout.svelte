<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
</script>

<a href="#main-content" class="skip-link">Skip to content</a>
<Navbar />
<main id="main-content">
	{@render children()}
</main>
<Footer />

<style>
	.skip-link {
		position: absolute;
		top: -40px;
		left: 16px;
		z-index: 100;
		padding: 8px 16px;
		background: #111827;
		color: white;
		border-radius: 0 0 8px 8px;
		font-weight: 500;
		text-decoration: none;
		transition: top 0.2s ease;
	}

	.skip-link:focus {
		top: 0;
		outline: none;
		box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.5);
	}
</style>
