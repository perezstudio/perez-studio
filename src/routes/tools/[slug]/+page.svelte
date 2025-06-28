<script lang="ts">
  import { page } from '$app/stores';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import ToolCard from '$lib/components/ToolCard.svelte';
  import { tools } from '$lib/data/tools.js';
  import { getRelatedTools } from '$lib/types/tools.js';
  import type { PageData } from './$types';
  
  export let data: PageData;
  
  $: ({ tool, projects, projectCount } = data);
  
  // Get related tools (tools that appear in the same projects)
  $: relatedTools = getRelatedTools(projects, tool.slug);
  
  // Get other tools from the same category
  $: categoryTools = tools
    .filter(t => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, 4);
</script>

<svelte:head>
  <title>{tool.name} - Tools - Perez Studio</title>
  <meta name="description" content="{tool.description} - See projects where I've used {tool.name}." />
</svelte:head>

<div class="tool-page">
  <!-- Breadcrumb -->
  <nav class="breadcrumb">
    <a href="/tools">Tools</a>
    <span class="separator">/</span>
    <span class="current">{tool.name}</span>
  </nav>
  
  <!-- Tool Header -->
  <header class="tool-header" style="--tool-color: {tool.color || '#6b7280'}">
    <div class="tool-info">
      <div class="tool-icon">
        {#if tool.logo}
          <img src={tool.logo} alt="{tool.name} logo" class="tool-logo" />
        {:else if tool.icon}
          <img src={tool.icon} alt="{tool.name} icon" class="tool-icon-img" />
        {:else}
          <div class="tool-icon-fallback">
            {tool.name.charAt(0)}
          </div>
        {/if}
      </div>
      
      <div class="tool-details">
        <h1 class="tool-name">{tool.name}</h1>
        <p class="tool-description">{tool.description}</p>
        
        <div class="tool-meta">
          <span class="category-badge">{tool.category}</span>
          {#if projectCount > 0}
            <span class="project-count">{projectCount} project{projectCount !== 1 ? 's' : ''}</span>
          {/if}
          {#if tool.featured}
            <span class="featured-badge">Featured</span>
          {/if}
        </div>
        
        {#if tool.tags && tool.tags.length > 0}
          <div class="tool-tags">
            {#each tool.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        {/if}
        
        <div class="tool-links">
          {#if tool.website}
            <a href={tool.website} target="_blank" rel="noopener" class="link-btn">
              Website
            </a>
          {/if}
          {#if tool.documentation}
            <a href={tool.documentation} target="_blank" rel="noopener" class="link-btn link-btn--secondary">
              Documentation
            </a>
          {/if}
        </div>
      </div>
    </div>
  </header>
  
  <!-- Projects Section -->
  {#if projects.length > 0}
    <section class="projects-section">
      <h2>Projects using {tool.name}</h2>
      <div class="projects-grid">
        {#each projects as project}
          <ProjectCard {project} highlightTool={tool.slug} />
        {/each}
      </div>
    </section>
  {:else}
    <section class="no-projects">
      <h2>No projects yet</h2>
      <p>I haven't added any projects using {tool.name} to my portfolio yet. Check back soon!</p>
    </section>
  {/if}
  
  <!-- Related Tools -->
  {#if relatedTools.length > 0}
    <section class="related-section">
      <h2>Frequently used with {tool.name}</h2>
      <div class="related-grid">
        {#each relatedTools as relatedTool}
          <ToolCard tool={relatedTool} showProjectCount={false} size="small" />
        {/each}
      </div>
    </section>
  {/if}
  
  <!-- Similar Tools -->
  {#if categoryTools.length > 0}
    <section class="similar-section">
      <h2>More {tool.category} tools</h2>
      <div class="similar-grid">
        {#each categoryTools as categoryTool}
          <ToolCard tool={categoryTool} size="small" />
        {/each}
      </div>
    </section>
  {/if}
</div>

<style>
  .tool-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  
  .breadcrumb {
    margin-bottom: 2rem;
    font-size: 0.875rem;
    color: #6b7280;
  }
  
  .breadcrumb a {
    color: #6b7280;
    text-decoration: none;
  }
  
  .breadcrumb a:hover {
    color: #374151;
  }
  
  .separator {
    margin: 0 0.5rem;
  }
  
  .current {
    color: #374151;
    font-weight: 500;
  }
  
  .tool-header {
    background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 3rem;
    margin-bottom: 3rem;
    position: relative;
    overflow: hidden;
  }
  
  .tool-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--tool-color);
  }
  
  .tool-info {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }
  
  .tool-logo {
    width: 80px;
    height: 80px;
    object-fit: contain;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  }
  
  .tool-icon-img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
  
  .tool-icon-fallback {
    width: 80px;
    height: 80px;
    background: var(--tool-color);
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 2rem;
  }
  
  .tool-details {
    flex: 1;
  }
  
  .tool-name {
    font-size: 3rem;
    font-weight: 700;
    color: #111827;
    margin: 0 0 1rem 0;
    line-height: 1.1;
  }
  
  .tool-description {
    font-size: 1.25rem;
    color: #6b7280;
    margin: 0 0 2rem 0;
    line-height: 1.6;
  }
  
  .tool-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .category-badge {
    background: var(--tool-color);
    color: white;
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: capitalize;
  }
  
  .project-count {
    color: var(--tool-color);
    font-weight: 600;
    font-size: 0.875rem;
  }
  
  .featured-badge {
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    color: white;
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
  }
  
  .tool-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  
  .tag {
    background: #f3f4f6;
    color: #374151;
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
    font-size: 0.8125rem;
    font-weight: 500;
  }
  
  .tool-links {
    display: flex;
    gap: 1rem;
  }
  
  .link-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    background: var(--tool-color);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease;
  }
  
  .link-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  .link-btn--secondary {
    background: transparent;
    color: var(--tool-color);
    border: 1px solid var(--tool-color);
  }
  
  .projects-section {
    margin-bottom: 4rem;
  }
  
  .projects-section h2,
  .related-section h2,
  .similar-section h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #111827;
    margin: 0 0 2rem 0;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }
  
  .no-projects {
    text-align: center;
    padding: 4rem 2rem;
    color: #6b7280;
    margin-bottom: 4rem;
  }
  
  .no-projects h2 {
    color: #374151;
    margin-bottom: 1rem;
  }
  
  .related-section,
  .similar-section {
    margin-bottom: 4rem;
  }
  
  .related-grid,
  .similar-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    .tool-header {
      padding: 2rem;
    }
    
    .tool-info {
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .tool-name {
      font-size: 2rem;
    }
    
    .tool-description {
      font-size: 1.125rem;
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
    }
    
    .related-grid,
    .similar-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
