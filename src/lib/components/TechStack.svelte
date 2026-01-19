<script lang="ts">
  import type { Tool } from '$lib/types/tools.js';

  let {
    technologies = []
  }: {
    technologies?: Tool[];
  } = $props();
</script>

<div class="my-8 p-6 bg-slate-50 rounded-xl border-l-4 border-cyan-500">
  <h3 class="m-0 mb-4 text-slate-800 text-xl font-semibold">Technologies Used</h3>
  <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
    {#each technologies as tech (tech.slug)}
      <div
        class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
        class:border-2={tech.featured}
        class:border-cyan-500={tech.featured}
        class:bg-gradient-to-br={tech.featured}
        class:from-cyan-50={tech.featured}
        class:to-blue-50={tech.featured}
      >
        {#if tech.logo}
          <img src={tech.logo} alt={tech.name} class="w-8 h-8 mb-2 object-contain" />
        {:else}
          <div
            class="w-8 h-8 mb-2 rounded flex items-center justify-center text-white font-semibold"
            style="background-color: {tech.color || '#6b7280'}"
          >
            {tech.name.charAt(0)}
          </div>
        {/if}
        <span class="font-semibold text-slate-800 text-center">{tech.name}</span>
        {#if tech.description}
          <p class="text-sm text-slate-500 text-center mt-2 mb-0">{tech.description}</p>
        {/if}
      </div>
    {/each}
  </div>
</div>
