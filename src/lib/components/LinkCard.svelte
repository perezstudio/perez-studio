<script lang="ts">
	import ArrowUp from '$lib/icons/arrow.up.right.svelte';

	interface Props {
		title: string;
		paragraph: string;
		link: string;
	}

	let { title, paragraph, link }: Props = $props();
</script>

<a href={link} class="group block">
	<div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
		<div class="flex items-start justify-between gap-4">
			<div class="flex flex-col gap-2">
				<h2 class="text-3xl font-extrabold text-slate-900">{title}</h2>
				<p class="font-medium text-slate-600">{paragraph}</p>
			</div>
			<ArrowUp className="mt-1 w-5 flex-shrink-0 fill-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:fill-slate-900" />
		</div>
	</div>
</a>
