<script lang="ts">
  import type { Tool } from '$lib/types/tools.js';
  
  export let tool: Tool;
  export let projectCount: number = 0;
  export let showProjectCount: boolean = true;
  export let size: 'small' | 'medium' | 'large' = 'medium';
</script>

<a 
  href="/tools/{tool.slug}" 
  class="tool-card tool-card--{size}"
  style="--tool-color: {tool.color || '#6b7280'}"
>
  <div class="tool-icon">
    {#if tool.icon}
      <img src={tool.icon} alt={tool.name} />
    {:else}
      <div class="tool-icon-fallback">
        {tool.name.charAt(0)}
      </div>
    {/if}
  </div>
  
  <div class="tool-content">
    <h3 class="tool-name">{tool.name}</h3>
    <p class="tool-description">{tool.description}</p>
    
    {#if tool.tags && tool.tags.length > 0}
      <div class="tool-tags">
        {#each tool.tags.slice(0, 3) as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    {/if}
    
    {#if showProjectCount && projectCount > 0}
      <div class="project-count">
        {projectCount} project{projectCount !== 1 ? 's' : ''}
      </div>
    {/if}
  </div>
  
  {#if tool.featured}
    <div class="featured-badge">Featured</div>
  {/if}
</a>

<style>
  .tool-card {
    display: block;
    text-decoration: none;
    color: inherit;
    background: white;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    padding: 1.5rem;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
  }
  
  .tool-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    border-color: var(--tool-color);
  }
  
  .tool-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--tool-color);
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  
  .tool-card:hover::before {
    opacity: 1;
  }
  
  .tool-card--small {
    padding: 1rem;
  }
  
  .tool-card--large {
    padding: 2rem;
  }
  
  .tool-icon {
    margin-bottom: 1rem;
  }
  
  .tool-icon img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }
  
  .tool-card--small .tool-icon img {
    width: 32px;
    height: 32px;
  }
  
  .tool-card--large .tool-icon img {
    width: 64px;
    height: 64px;
  }
  
  .tool-icon-fallback {
    width: 48px;
    height: 48px;
    background: var(--tool-color);
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.5rem;
  }
  
  .tool-name {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
  }
  
  .tool-card--small .tool-name {
    font-size: 1.125rem;
  }
  
  .tool-card--large .tool-name {
    font-size: 1.5rem;
  }
  
  .tool-description {
    margin: 0 0 1rem 0;
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.5;
  }
  
  .tool-card--small .tool-description {
    font-size: 0.8125rem;
  }
  
  .tool-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .tag {
    background: #f3f4f6;
    color: #374151;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
  }
  
  .project-count {
    color: var(--tool-color);
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .featured-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
  }
</style>
