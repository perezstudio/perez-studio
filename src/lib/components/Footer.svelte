<script lang="ts">
	import Email from '$lib/icons/email.svelte';
	import Twitter from '$lib/icons/twitter.svelte';
	import Instagram from '$lib/icons/instagram.svelte';
	import Dribbble from '$lib/icons/dribbble.svelte';
	import Behance from '$lib/icons/behance.svelte';
	import GitHub from '$lib/icons/github.svelte';
	import LinkedIn from '$lib/icons/linkedin.svelte';
	import { navItems } from '$lib/config/navigation';

	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ href: '/contact', label: 'Email', icon: Email },
		{ href: 'https://x.com/perezstudioio', label: 'X (Twitter)', icon: Twitter },
		{ href: 'https://www.instagram.com/perezstudioio/', label: 'Instagram', icon: Instagram },
		{ href: 'https://dribbble.com/perezstudioio', label: 'Dribbble', icon: Dribbble },
		{ href: 'https://www.behance.net/perezstudio', label: 'Behance', icon: Behance },
		{ href: 'https://github.com/perezstudio', label: 'GitHub', icon: GitHub },
		{ href: 'https://www.linkedin.com/in/kevinperezut/', label: 'LinkedIn', icon: LinkedIn }
	];
</script>

<footer class="w-full border-t border-slate-200 bg-slate-50">
	<div class="mx-auto flex w-full max-w-[1248px] flex-col gap-8 px-4 py-12 md:px-6">
		<!-- Top section with nav and social -->
		<div class="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
			<!-- Navigation links -->
			<nav aria-label="Footer navigation">
				<ul class="flex flex-wrap gap-1">
					{#each navItems as link (link.href)}
						<li>
							<a
								href={link.href}
								class="rounded-lg px-4 py-2 text-slate-600 transition-all duration-200 hover:bg-slate-200 hover:text-slate-900"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Social links -->
			<div class="flex gap-1">
				{#each socialLinks as social (social.label)}
					{@const IconComponent = social.icon}
					<a
						href={social.href}
						aria-label={social.label}
						class="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700"
					>
						<IconComponent className="w-5 fill-current" />
					</a>
				{/each}
			</div>
		</div>

		<!-- Bottom section with copyright -->
		<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<p class="text-sm text-slate-500">
				&copy; {currentYear} Perez&nbsp;Studio. All rights reserved.
			</p>
			<p class="text-sm text-slate-400">
				Designed &amp; built with care in Milwaukee,&nbsp;WI
			</p>
		</div>
	</div>
</footer>
