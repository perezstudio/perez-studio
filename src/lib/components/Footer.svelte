<script lang="ts">
	import { navItems } from '$lib/config/navigation';
	import { socialLinks, location } from '$lib/config/contact';

	const currentYear = new Date().getFullYear();
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
				Designed &amp; built with care in {location.city},&nbsp;{location.state}
			</p>
		</div>
	</div>
</footer>
