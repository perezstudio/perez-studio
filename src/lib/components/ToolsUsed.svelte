<script lang="ts">
  import type { ProjectTool } from '$lib/types/tools.js';

  let {
    tools = [],
    showDescription = true,
    showRole = true,
    showFeatured = true,
    columns = 3
  }: {
    tools?: ProjectTool[];
    showDescription?: boolean;
    showRole?: boolean;
    showFeatured?: boolean;
    columns?: number;
  } = $props();

  // Sort tools to show featured ones first
  let sortedTools = $derived([...tools].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  }));

  let featuredTools = $derived(tools.filter(tool => tool.featured));
  let otherTools = $derived(tools.filter(tool => !tool.featured));
</script>

<section class="my-16 py-8 border-t border-gray-200">
  <h2 class="text-4xl font-bold text-gray-900 mb-8 text-center">Tools Used</h2>

  {#if showFeatured && featuredTools.length > 0}
    <div class="mb-12">
      <h3 class="text-2xl font-semibold text-gray-700 mb-6">Primary Technologies</h3>
      <div
        class="grid gap-10 lg:grid-cols-{Math.min(featuredTools.length, columns)} md:grid-cols-2 grid-cols-1"
      >
        {#each featuredTools as tool (tool.slug)}
          <a
            href="/tools/{tool.slug}"
            class="tool-card tool-card--featured group block no-underline text-inherit bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-10 transition-all duration-300 ease-in-out relative overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl"
            style="--tool-color: {tool.color || '#6b7280'}"
          >
            <div class="flex justify-center mb-6">
              {#if tool.logo}
                <img
                  src={tool.logo}
                  alt="{tool.name} logo"
                  class="w-24 h-24 object-contain drop-shadow-lg"
                />
              {:else}
                <div
                  class="w-20 h-20 rounded-xl flex items-center justify-center font-bold text-2xl text-white"
                  style="background-color: {tool.color || '#6b7280'}"
                >
                  {tool.name.charAt(0)}
                </div>
              {/if}
            </div>

            <div class="text-center">
              <h4 class="text-2xl font-semibold text-gray-900 mb-4 transition-colors duration-300">
                {tool.name}
              </h4>
              {#if showDescription && tool.description}
                <p class="text-base text-gray-600 leading-relaxed mb-4 transition-colors duration-300">
                  {tool.description}
                </p>
              {/if}
              {#if showRole && tool.role}
                <p class="text-sm font-medium italic m-0 transition-colors duration-300" style="color: var(--tool-color)">
                  {tool.role}
                </p>
              {/if}
            </div>
          </a>
        {/each}
      </div>
    </div>
  {/if}

  {#if otherTools.length > 0}
    <div>
      {#if featuredTools.length > 0}
        <h3 class="text-2xl font-semibold text-gray-700 mb-6">Supporting Technologies</h3>
      {/if}
      <div
        class="grid gap-8 lg:grid-cols-{columns} md:grid-cols-2 grid-cols-1"
      >
        {#each otherTools as tool (tool.slug)}
          <a
            href="/tools/{tool.slug}"
            class="tool-card group block no-underline text-inherit bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 transition-all duration-300 ease-in-out relative overflow-hidden hover:-translate-y-1 hover:shadow-xl"
            style="--tool-color: {tool.color || '#6b7280'}"
          >
            <div class="flex justify-center mb-6">
              {#if tool.logo}
                <img
                  src={tool.logo}
                  alt="{tool.name} logo"
                  class="w-20 h-20 object-contain drop-shadow-md"
                />
              {:else}
                <div
                  class="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl text-white"
                  style="background-color: {tool.color || '#6b7280'}"
                >
                  {tool.name.charAt(0)}
                </div>
              {/if}
            </div>

            <div class="text-center">
              <h4 class="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300">
                {tool.name}
              </h4>
              {#if showDescription && tool.description}
                <p class="text-sm text-gray-600 leading-relaxed mb-3 transition-colors duration-300">
                  {tool.description}
                </p>
              {/if}
              {#if showRole && tool.role}
                <p class="text-xs font-medium italic m-0 transition-colors duration-300" style="color: var(--tool-color)">
                  {tool.role}
                </p>
              {/if}
            </div>
          </a>
        {/each}
      </div>
    </div>
  {/if}

  {#if tools.length === 0}
    <p class="text-center text-gray-600 italic my-8">No tools specified for this project.</p>
  {/if}
</section>

<style>
  /* Minimal custom CSS for hover background color using CSS variable */
  .tool-card:hover {
    background: color-mix(in srgb, var(--tool-color) 10%, white);
  }
</style>
