<script lang="ts">
  import type { Tool } from '$lib/types/tools.js';

  let {
    tool,
    projectCount = 0,
    showProjectCount = true,
    size = 'medium'
  }: {
    tool: Tool;
    projectCount?: number;
    showProjectCount?: boolean;
    size?: 'small' | 'medium' | 'large';
  } = $props();

  const sizeClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };

  const logoSizes = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const nameSizes = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  };
</script>

<a
  href="/tools/{tool.slug}"
  class="group block no-underline text-inherit bg-white rounded-xl border border-slate-200 {sizeClasses[size]} transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg hover:border-slate-300"
>
  <div
    class="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    style="background-color: {tool.color || '#6b7280'}"
  ></div>

  <div class="mb-4">
    {#if tool.logo}
      <img
        src={tool.logo}
        alt="{tool.name} logo"
        class="{logoSizes[size]} object-contain drop-shadow-sm"
      />
    {:else}
      <div
        class="{logoSizes[size]} rounded-lg flex items-center justify-center font-semibold text-xl text-white"
        style="background-color: {tool.color || '#6b7280'}"
      >
        {tool.name.charAt(0)}
      </div>
    {/if}
  </div>

  <div>
    <h3 class="{nameSizes[size]} font-semibold text-slate-900 mb-2">{tool.name}</h3>
    <p class="text-sm text-slate-500 leading-relaxed mb-4">{tool.description}</p>

    {#if tool.tags && tool.tags.length > 0}
      <div class="flex flex-wrap gap-2 mb-4">
        {#each tool.tags.slice(0, 3) as tag (tag)}
          <span class="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium"
            >{tag}</span
          >
        {/each}
      </div>
    {/if}

    {#if showProjectCount && projectCount > 0}
      <div class="text-sm font-medium" style="color: {tool.color || '#6b7280'}">
        {projectCount} project{projectCount !== 1 ? 's' : ''}
      </div>
    {/if}
  </div>

  {#if tool.featured}
    <div
      class="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide"
    >
      Featured
    </div>
  {/if}
</a>
