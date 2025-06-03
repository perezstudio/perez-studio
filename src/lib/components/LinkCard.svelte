<script>
	import ArrowUp from '$lib/icons/arrow.up.right.svelte';
	export let title;
	export let paragraph;
	export let link;
</script>

<a href={link}>
	<div class="rounded-xl py-6 hover:bg-slate-100 md:px-6">
		<div class="flex gap-4">
			<h2 class="text-3xl font-extrabold text-slate-900">{title}</h2>
			<ArrowUp className="w-5 fill-slate-900" />
		</div>
		<p class="font-medium text-slate-600">
			{paragraph}
		</p>
	</div>
</a>
