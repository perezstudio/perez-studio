<script lang="ts">
	import { tools, getFeaturedTools } from '$lib/data/tools.js';
	import { companies, education, certifications, awards, calculateDuration, calculateCompanyDuration } from '$lib/data/about.js';

	const featuredTools = getFeaturedTools();
	const otherTools = tools.filter(t => !t.featured).slice(0, 6);
	const displayTools = [...featuredTools, ...otherTools];
</script>

<svelte:head>
	<title>About - Perez Studio</title>
	<meta name="description" content="Learn more about Kevin Perez, a frontend developer and designer based in Milwaukee, WI." />
</svelte:head>

<div>
	<!-- Hero Section -->
	<section class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
		<div class="flex w-full max-w-312 flex-col gap-8 md:flex-row md:items-center md:gap-12 md:px-6">
			<div class="flex-shrink-0">
				<img
					src="/profile.jpg"
					alt="Kevin Perez"
					class="h-48 w-48 rounded-2xl object-cover shadow-lg md:h-64 md:w-64"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="flex flex-col gap-4">
				<h1 class="text-5xl font-extrabold text-slate-900">About Me</h1>
				<p class="text-lg text-slate-600">
					I'm Kevin, a frontend developer and designer based in Milwaukee, Wisconsin.
					I specialize in building modern, user-focused web applications that solve real-world problems.
				</p>
				<p class="text-lg text-slate-600">
					With over 8 years of experience in web development, I've worked with startups, agencies,
					and enterprise clients to create digital experiences that are both beautiful and functional.
					Currently, I'm focused on building Civics Lab, a suite of tools for political campaigns.
				</p>
			</div>
		</div>
	</section>

	<!-- Work Experience Section -->
	<section class="flex w-full flex-col items-center gap-8 px-4 py-16 bg-slate-50">
		<div class="flex w-full max-w-312 flex-col gap-8 md:px-6">
			<h2 class="text-4xl font-extrabold text-slate-900">Experience</h2>
			<div class="relative">
				<!-- Timeline line -->
				<div class="absolute left-6 top-0 hidden h-full w-0.5 bg-slate-300 md:block"></div>

				<div class="flex flex-col gap-6">
					{#each companies as company (company.name)}
						<div class="group relative flex gap-6">
							<!-- Timeline dot -->
							<div class="relative z-10 hidden h-12 w-12 flex-shrink-0 items-center justify-center md:flex">
								<div class="h-4 w-4 rounded-full border-4 border-slate-300 bg-white transition-colors duration-300 group-hover:border-cyan-500 group-hover:bg-cyan-500"></div>
							</div>
							<!-- Company Card -->
							<div class="flex-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
								<!-- Company Header -->
								<div class="flex items-center gap-4 border-b border-slate-100 p-6">
									{#if company.logo}
										<img
											src={company.logo}
											alt="{company.name} logo"
											class="h-12 w-12 rounded-lg object-contain"
											loading="lazy"
											decoding="async"
										/>
									{:else}
										<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100">
											<svg class="h-6 w-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
											</svg>
										</div>
									{/if}
									<div class="flex-1">
										<h3 class="text-lg font-bold text-slate-900">{company.name}</h3>
									</div>
									<span class="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
										{calculateCompanyDuration(company.jobs)}
									</span>
								</div>
								<!-- Jobs List -->
								<div class="divide-y divide-slate-100">
									{#each company.jobs as job, jobIndex (job.role + job.startDate)}
										<div class="p-6">
											<div class="flex flex-wrap items-start justify-between gap-2">
												<h4 class="font-semibold text-slate-900">{job.role}</h4>
												<span class="text-sm text-slate-500">{job.startDate}&nbsp;-&nbsp;{job.endDate}</span>
											</div>
											<div class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
												<span class="text-sm text-slate-400">{job.location}</span>
												<span class="hidden text-slate-300 sm:inline">|</span>
												<span class="text-sm font-medium text-slate-500">{calculateDuration(job.startDate, job.endDate)}</span>
											</div>
											{#if job.description}
												<p class="mt-2 text-sm text-slate-600">{job.description}</p>
											{/if}
										</div>
									{/each}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Education & Certifications Section -->
	<section class="flex w-full flex-col items-center gap-8 px-4 py-16">
		<div class="flex w-full max-w-312 flex-col gap-8 md:px-6">
			<h2 class="text-4xl font-extrabold text-slate-900">Education & Certifications</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<!-- Education -->
				{#each education as edu (edu.institution + edu.year)}
					<div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
							<svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
							</svg>
						</div>
						<h3 class="text-lg font-bold text-slate-900">{edu.degree}</h3>
						{#if edu.field}
							<p class="text-slate-600">{edu.field}</p>
						{/if}
						<p class="text-sm text-slate-500">{edu.institution}</p>
						<p class="mt-2 text-sm font-medium text-slate-400">{edu.year}</p>
					</div>
				{/each}
				<!-- Certifications -->
				{#each certifications as cert (cert.name + cert.year)}
					<div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
							<svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
						</div>
						<h3 class="text-lg font-bold text-slate-900">{cert.name}</h3>
						<p class="text-slate-600">{cert.issuer}</p>
						<p class="mt-2 text-sm font-medium text-slate-400">{cert.year}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Awards Section -->
	<section class="flex w-full flex-col items-center gap-8 px-4 py-16 bg-slate-50">
		<div class="flex w-full max-w-312 flex-col gap-8 md:px-6">
			<h2 class="text-4xl font-extrabold text-slate-900">Awards</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each awards as award (award.name + award.year)}
					<div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						<div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
							<svg class="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
							</svg>
						</div>
						<h3 class="text-lg font-bold text-slate-900">{award.name}</h3>
						<p class="text-slate-600">{award.organization}</p>
						{#if award.description}
							<p class="mt-2 text-sm text-slate-500">{award.description}</p>
						{/if}
						<p class="mt-2 text-sm font-medium text-slate-400">{award.year}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Tools & Technologies Section -->
	<section class="flex w-full flex-col items-center gap-8 px-4 py-16">
		<div class="flex w-full max-w-312 flex-col gap-8 md:px-6">
			<div class="flex flex-col gap-2">
				<h2 class="text-4xl font-extrabold text-slate-900">Tools & Technologies</h2>
				<p class="text-lg text-slate-600">
					The technologies I use daily to build modern web applications.
				</p>
			</div>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each displayTools as tool (tool.slug)}
					<a
						href="/tools/{tool.slug}"
						class="tool-card group block rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
						style="--tool-color: {tool.color || '#6b7280'}"
					>
						<div class="mb-6 flex justify-center">
							{#if tool.logo}
								<img
									src={tool.logo}
									alt="{tool.name} logo"
									class="h-20 w-20 object-contain drop-shadow-md"
									loading="lazy"
									decoding="async"
								/>
							{:else if tool.icon}
								<img
									src={tool.icon}
									alt="{tool.name} icon"
									class="h-16 w-16 object-contain"
									loading="lazy"
									decoding="async"
								/>
							{:else}
								<div
									class="flex h-16 w-16 items-center justify-center rounded-xl text-xl font-bold text-white"
									style="background-color: {tool.color || '#6b7280'}"
								>
									{tool.name.charAt(0)}
								</div>
							{/if}
						</div>
						<div class="text-center">
							<h3 class="mb-3 text-xl font-semibold text-slate-900 transition-colors duration-300">
								{tool.name}
							</h3>
							{#if tool.description}
								<p class="text-sm leading-relaxed text-slate-600 transition-colors duration-300">
									{tool.description}
								</p>
							{/if}
						</div>
					</a>
				{/each}
			</div>
			<div class="flex justify-center">
				<a
					href="/tools"
					class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
				>
					View All Tools
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
					</svg>
				</a>
			</div>
		</div>
	</section>
</div>

<style>
	.tool-card:hover {
		background: color-mix(in srgb, var(--tool-color) 10%, white);
	}
</style>
