<script>
	import LinkBlock from '$lib/components/LinkCard.svelte';
</script>

<div>
	<section class="flex w-full justify-center px-4 pt-16 pb-10">
		<div class="flex w-full max-w-[1200px] flex-col gap-2">
			<div class="flex max-w-3xl flex-col gap-2">
				<h1 class="text-5xl font-extrabold">Hi there, I'm Kevin</h1>
				<p>
					I create user-focused apps and intuitive digital experiences that solve real-world
					problems. My projects span from polished software tools to experimental designs, each
					reflecting my commitment to seamless functionality and aesthetic appeal.
				</p>
			</div>
			<div class="flex flex-row items-center gap-2">
				<a href="#">
					<img src="email.svg" class="w-8" />
				</a>
				<a href="#">
					<img src="twitter.svg" class="w-8" />
				</a>
				<a href="#">
					<img src="instagram.svg" class="w-8" />
				</a>
				<a href="#">
					<img src="dribbble.svg" class="w-8" />
				</a>
				<a href="#">
					<img src="behance.svg" class="w-8" />
				</a>
				<a href="#">
					<img src="github.svg" class="w-8" />
				</a>
				<a href="#">
					<img src="linkedin.svg" class="w-8" />
				</a>
			</div>
		</div>
	</section>
	<section>
		<div>
			<LinkBlock
				title="Projects"
				paragraph="I'm currently working on Civics Lab, a suite of tools and resources designed for political campaigns and political parties."
			/>
			<LinkBlock
				title="Blog"
				paragraph="You can find my writing on my blog. I write mostly about frontend web development."
			/>
			<LinkBlock
				title="Newsletter"
				paragraph="I'm currently working on Build UI, a subscription video site for frontend developers."
			/>
			<LinkBlock
				title="Contact Me"
				paragraph="I'm currently working on Build UI, a subscription video site for frontend developers."
			/>
		</div>
	</section>
	<section>
		<div>
			<h2>My Life</h2>
			<p>
				Born in sunny San Diego, CA, I moved to Provo, Utah at an early age. After 20 years I
				decided to relocate to Milwaukee, Wisconsin.
			</p>
		</div>
	</section>
</div>
