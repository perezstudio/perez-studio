<script>
	import LinkBlock from '$lib/components/LinkCard.svelte';
	import ArrowUp from '$lib/icons/arrow.up.right.svelte';
	import { socialLinks } from '$lib/config/contact';
</script>

<div>
	<section class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
		<div class="flex w-full max-w-312 flex-col gap-2 md:px-6">
			<div class="flex max-w-3xl flex-col gap-2">
				<h1 class="text-5xl font-extrabold">Hi there, I'm Kevin</h1>
				<p>
					I create user-focused apps and intuitive digital experiences that solve real-world
					problems. My projects span from polished software tools to experimental designs, each
					reflecting my commitment to seamless functionality and aesthetic appeal.
				</p>
			</div>
			<div class="flex flex-row items-center gap-1">
				{#each socialLinks as social (social.label)}
					{@const IconComponent = social.icon}
					<a
						href={social.href}
						aria-label={social.label}
						class="group flex h-11 w-11 items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 hover:bg-slate-100 hover:shadow-md"
					>
						<IconComponent className="w-6 fill-slate-500 transition-colors duration-300 group-hover:fill-cyan-500" />
					</a>
				{/each}
			</div>
		</div>
		<div class="flex w-full max-w-312 justify-center md:px-6">
			<img
				src="/main-header.png"
				class="w-full rounded-xl bg-slate-100 object-cover"
				alt="Portfolio banner showcasing recent work"
				loading="lazy"
				decoding="async"
			/>
		</div>
	</section>
	<section class="flex w-full flex-col items-center gap-8 px-4 py-10">
		<div class="grid w-full max-w-312 grid-cols-1 gap-8 md:grid-cols-2">
			<LinkBlock
				link="/projects"
				title="Projects"
				paragraph="I'm currently working on Civics Lab, a suite of tools and resources designed for political campaigns and political parties."
			/>
			<LinkBlock
				link="/blog"
				title="Blog"
				paragraph="You can find my writing on my blog. I write mostly about frontend web development."
			/>
			<LinkBlock
				link="/newsletter"
				title="Newsletter"
				paragraph="Subscribe to get updates on new projects, tutorials, and insights about frontend development and design."
			/>
			<LinkBlock
				link="/contact"
				title="Contact Me"
				paragraph="Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something great together."
			/>
		</div>
	</section>
	<section class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
		<div class="flex w-full max-w-312 flex-col gap-2 md:px-6">
			<div class="flex max-w-3xl flex-col gap-2">
				<h2 class="text-5xl font-extrabold">My Life</h2>
				<p>
					Born in sunny San Diego, CA, I moved to Provo, Utah at an early age. After 20 years I
					decided to relocate to Milwaukee, Wisconsin.
				</p>
				<a
					href="/about"
					class="group inline-flex items-center gap-1 font-medium text-cyan-500 transition-colors duration-300 hover:text-cyan-600"
				>
					Learn More About Me
					<ArrowUp
						className="w-3.5 fill-cyan-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:fill-cyan-600"
					/>
				</a>
			</div>
		</div>
		<div class="grid w-full max-w-312 grid-cols-1 gap-8 md:grid-cols-2 md:px-6">
			<div class="group col-span-1 flex flex-col gap-2 md:col-span-2">
				<img
					src="/Milwaukee.png"
					class="h-87.5 w-full rounded-xl object-cover transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg md:h-115"
					alt="Milwaukee Skyline"
					loading="lazy"
					decoding="async"
				/>
				<div class="px-6">
					<h3 class="text-xl font-bold text-slate-900">Milwaukee</h3>
					<p class="text-lg font-medium text-slate-500">2024&nbsp;-&nbsp;Present</p>
				</div>
			</div>
			<div class="group col-span-1 flex flex-col gap-2">
				<img
					src="/Provo.png"
					class="h-87.5 w-full rounded-xl object-cover transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg md:h-130"
					alt="Provo Skyline"
					loading="lazy"
					decoding="async"
				/>
				<div class="px-6">
					<h3 class="text-xl font-bold text-slate-900">Provo</h3>
					<p class="text-lg font-medium text-slate-500">2000&nbsp;-&nbsp;2024</p>
				</div>
			</div>
			<div class="group col-span-1 flex flex-col gap-2">
				<img
					src="/San Diego.png"
					class="h-87.5 w-full rounded-xl object-cover transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg md:h-130"
					alt="San Diego Skyline"
					loading="lazy"
					decoding="async"
				/>
				<div class="px-6">
					<h3 class="text-xl font-bold text-slate-900">San&nbsp;Diego</h3>
					<p class="text-lg font-medium text-slate-500">1993&nbsp;-&nbsp;2000</p>
				</div>
			</div>
		</div>
	</section>
</div>
