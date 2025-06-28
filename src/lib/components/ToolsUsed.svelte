<script lang="ts">
  import type { ProjectTool } from '$lib/types/tools.js';
  
  export let tools: ProjectTool[] = [];
  export let showDescription: boolean = true;
  export let showRole: boolean = true;
  export let showFeatured: boolean = true;
  export let columns: number = 3;
  
  // Sort tools to show featured ones first
  $: sortedTools = [...tools].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
  
  $: featuredTools = tools.filter(tool => tool.featured);
  $: otherTools = tools.filter(tool => !tool.featured);
</script>

<section class="tools-used">
  <h2>Tools Used</h2>
  
  {#if showFeatured && featuredTools.length > 0}
    <div class="featured-tools">
      <h3>Primary Technologies</h3>
      <div class="tools-grid tools-grid--featured" style="--columns: {Math.min(featuredTools.length, columns)}">
        {#each featuredTools as tool}
          <a href="/tools/{tool.slug}" class="tool-item tool-item--featured" style="--tool-color: {tool.color || '#6b7280'}">
            <div class="tool-image">
              {#if tool.logo}
                <img src={tool.logo} alt="{tool.name} logo" class="tool-logo" />
              {:else if tool.icon}
                <img src={tool.icon} alt="{tool.name} icon" class="tool-icon" />
              {:else}
                <div class="tool-fallback">{tool.name.charAt(0)}</div>
              {/if}
            </div>
            
            <div class="tool-content">
              <h4 class="tool-name">{tool.name}</h4>
              {#if showDescription && tool.description}
                <p class="tool-description">{tool.description}</p>
              {/if}
              {#if showRole && tool.role}
                <p class="tool-role">{tool.role}</p>
              {/if}
            </div>
          </a>
        {/each}
      </div>
    </div>
  {/if}
  
  {#if otherTools.length > 0}
    <div class="other-tools">
      {#if featuredTools.length > 0}
        <h3>Supporting Technologies</h3>
      {/if}
      <div class="tools-grid" style="--columns: {columns}">
        {#each otherTools as tool}
          <a href="/tools/{tool.slug}" class="tool-item" style="--tool-color: {tool.color || '#6b7280'}">
            <div class="tool-image">
              {#if tool.logo}
                <img src={tool.logo} alt="{tool.name} logo" class="tool-logo" />
              {:else if tool.icon}
                <img src={tool.icon} alt="{tool.name} icon" class="tool-icon" />
              {:else}
                <div class="tool-fallback">{tool.name.charAt(0)}</div>
              {/if}
            </div>
            
            <div class="tool-content">
              <h4 class="tool-name">{tool.name}</h4>
              {#if showDescription && tool.description}
                <p class="tool-description">{tool.description}</p>
              {/if}
              {#if showRole && tool.role}
                <p class="tool-role">{tool.role}</p>
              {/if}
            </div>
          </a>
        {/each}
      </div>
    </div>
  {/if}
  
  {#if tools.length === 0}
    <p class="no-tools">No tools specified for this project.</p>
  {/if}
</section>

<style>
  .tools-used {
    margin: 4rem 0;
    padding: 2rem 0;
    border-top: 1px solid #e5e7eb;
  }
  
  .tools-used h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #111827;
    margin: 0 0 2rem 0;
    text-align: center;
  }
  
  .featured-tools {
    margin-bottom: 3rem;
  }
  
  .featured-tools h3,
  .other-tools h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #374151;
    margin: 0 0 1.5rem 0;
  }
  
  .tools-grid {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: 2rem;
  }
  
  .tools-grid--featured {
    gap: 2.5rem;
  }
  
  .tool-item {
    display: block;
    text-decoration: none;
    color: inherit;
    background: white;
    border: 2px solid #f3f4f6;
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .tool-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--tool-color);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  .tool-item:hover {
    transform: translateY(-4px);
    border-color: var(--tool-color);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
  
  .tool-item:hover::before {
    transform: scaleX(1);
  }
  
  .tool-item--featured {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    border-color: #e2e8f0;
    padding: 2.5rem;
  }
  
  .tool-item--featured:hover {
    background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
    transform: translateY(-6px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  }
  
  .tool-image {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  
  .tool-logo {
    width: 80px;
    height: 80px;
    object-fit: contain;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  }
  
  .tool-item--featured .tool-logo {
    width: 96px;
    height: 96px;
  }
  
  .tool-icon {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }
  
  .tool-item--featured .tool-icon {
    width: 80px;
    height: 80px;
  }
  
  .tool-fallback {
    width: 64px;
    height: 64px;
    background: var(--tool-color);
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.5rem;
  }
  
  .tool-item--featured .tool-fallback {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
  
  .tool-content {
    text-align: center;
  }
  
  .tool-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
    margin: 0 0 0.75rem 0;
  }
  
  .tool-item--featured .tool-name {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .tool-description {
    font-size: 0.875rem;
    color: #6b7280;
    line-height: 1.5;
    margin: 0 0 0.75rem 0;
  }
  
  .tool-item--featured .tool-description {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .tool-role {
    font-size: 0.8125rem;
    color: var(--tool-color);
    font-weight: 500;
    font-style: italic;
    margin: 0;
  }
  
  .tool-item--featured .tool-role {
    font-size: 0.875rem;
  }
  
  .no-tools {
    text-align: center;
    color: #6b7280;
    font-style: italic;
    margin: 2rem 0;
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .tools-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .tools-used {
      margin: 3rem 0;
    }
    
    .tools-used h2 {
      font-size: 2rem;
    }
    
    .tools-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .tool-item {
      padding: 1.5rem;
    }
    
    .tool-item--featured {
      padding: 2rem;
    }
    
    .tool-logo {
      width: 64px;
      height: 64px;
    }
    
    .tool-item--featured .tool-logo {
      width: 80px;
      height: 80px;
    }
  }
  
  @media (max-width: 480px) {
    .tools-used h2 {
      font-size: 1.75rem;
    }
    
    .tool-item {
      padding: 1.25rem;
    }
    
    .tool-item--featured {
      padding: 1.5rem;
    }
  }
</style>
