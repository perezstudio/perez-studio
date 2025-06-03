<script>
	import LinkBlock from '$lib/components/LinkCard.svelte';
	import Email from '$lib/icons/email.svelte';
	import Twitter from '$lib/icons/twitter.svelte';
	import Instagram from '$lib/icons/instagram.svelte';
	import Dribbble from '$lib/icons/dribbble.svelte';
	import Behance from '$lib/icons/behance.svelte';
	import GitHub from '$lib/icons/github.svelte';
	import LinkedIn from '$lib/icons/linkedin.svelte';
</script>

<div>
	<section class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
		<div class="flex w-full max-w-[1248px] flex-col gap-2 md:px-6">
			<div class="flex max-w-3xl flex-col gap-2">
				<h1 class="text-5xl font-extrabold">Hi there, I'm Kevin</h1>
				<p>
					I create user-focused apps and intuitive digital experiences that solve real-world
					problems. My projects span from polished software tools to experimental designs, each
					reflecting my commitment to seamless functionality and aesthetic appeal.
				</p>
			</div>
			<div class="flex flex-row items-center gap-2">
				<a href="/contact">
					<Email className="w-8 fill-slate-500 hover:fill-cyan-500" />
				</a>
				<a href="#">
					<Twitter className="w-8 fill-slate-500 hover:fill-cyan-500" />
				</a>
				<a href="#">
					<Instagram className="w-8 fill-slate-500 hover:fill-cyan-500" />
				</a>
				<a href="#">
					<Dribbble className="w-8 fill-slate-500 hover:fill-cyan-500" />
				</a>
				<a href="#">
					<Behance className="w-8 fill-slate-500 hover:fill-cyan-500" />
				</a>
				<a href="#">
					<GitHub className="w-8 fill-slate-500 hover:fill-cyan-500" />
				</a>
				<a href="#">
					<LinkedIn className="w-8 fill-slate-500 hover:fill-cyan-500" />
				</a>
			</div>
		</div>
		<div class="flex w-full max-w-[1248px] justify-center">
			<img src="main-header.png" class="w-full rounded-xl bg-slate-100 object-cover" />
		</div>
	</section>
	<section class="flex w-full flex-col items-center gap-8 px-4 py-10">
		<div class="flex grid w-full max-w-[1248px] grid-cols-1 gap-8 md:grid-cols-2">
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
				paragraph="I'm currently working on Build UI, a subscription video site for frontend developers."
			/>
			<LinkBlock
				link="/contact"
				title="Contact Me"
				paragraph="I'm currently working on Build UI, a subscription video site for frontend developers."
			/>
		</div>
	</section>
	<section class="flex w-full flex-col items-center gap-8 px-4 pt-16 pb-10">
		<div class="flex w-full max-w-[1248px] flex-col gap-2 md:px-6">
			<div class="flex max-w-3xl flex-col gap-2">
				<h2 class="text-5xl font-extrabold">My Life</h2>
				<p>
					Born in sunny San Diego, CA, I moved to Provo, Utah at an early age. After 20 years I
					decided to relocate to Milwaukee, Wisconsin.
				</p>
			</div>
		</div>
		<div class="flex grid w-full w-full max-w-[1248px] grid-cols-1 gap-8 md:grid-cols-2">
			<div class="col-span-1 flex flex-col gap-2 md:col-span-2">
				<img src="Milwaukee.png" class="h-[350px] w-full rounded-xl object-cover md:h-[460px]" />
				<div class="px-6">
					<h3 class="text-xl font-bold text-slate-900">Milwaukee</h3>
					<p class="text-lg font-medium text-slate-500">2024 - Present</p>
				</div>
			</div>
			<div class="col-span-1 flex flex-col gap-2">
				<img src="Provo.png" class="h-[350px] w-full rounded-xl object-cover md:h-[520px]" />
				<div class="px-6">
					<h3 class="text-xl font-bold text-slate-900">Provo</h3>
					<p class="text-lg font-medium text-slate-500">2000 - 2024</p>
				</div>
			</div>
			<div class="col-span-1 flex flex-col gap-2">
				<img src="San Diego.png" class="h-[350px] w-full rounded-xl object-cover md:h-[520px]" />
				<div class="px-6">
					<h3 class="text-xl font-bold text-slate-900">San Diego</h3>
					<p class="text-lg font-medium text-slate-500">1993 - 2000</p>
				</div>
			</div>
		</div>
	</section>
</div>
