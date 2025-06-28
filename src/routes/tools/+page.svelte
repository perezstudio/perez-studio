<script lang="ts">
  import { onMount } from 'svelte';
  import ToolCard from '$lib/components/ToolCard.svelte';
  import { tools, getToolsByCategory, getFeaturedTools } from '$lib/data/tools.js';
  import type { Tool } from '$lib/types/tools.js';
  
  let selectedCategory: string = 'all';
  let searchQuery: string = '';
  let filteredTools: Tool[] = tools;
  
  const categories = {
    all: 'All Tools',
    frontend: 'Frontend',
    backend: 'Backend', 
    database: 'Database',
    design: 'Design',
    devops: 'DevOps',
    testing: 'Testing',
    mobile: 'Mobile',
    other: 'Other'
  };
  
  $: {
    let filtered = tools;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    filteredTools = filtered;
  }
  
  const featuredTools = getFeaturedTools();
  const toolsByCategory = getToolsByCategory();
  
  // Mock project counts (in real app, you'd calculate these from your projects)
  const projectCounts: Record<string, number> = {
    'svelte': 8,
    'sveltekit': 6,
    'react': 12,
    'nextjs': 7,
    'tailwindcss': 15,
    'nodejs': 18,
    'postgresql': 10,
    'prisma': 9,
    'figma': 14,
    'vercel': 11
  };
</script>

<svelte:head>
  <title>Tools & Technologies - Perez Studio</title>
  <meta name="description" content="Explore the tools and technologies I use to build amazing digital experiences." />
</svelte:head>

<div class="tools-page">
  <header class="page-header">
    <h1>Tools & Technologies</h1>
    <p class="page-description">
      The arsenal of tools and technologies I use to bring ideas to life. 
      Click on any tool to see the projects where I've used it.
    </p>
  </header>
  
  {#if featuredTools.length > 0}
    <section class="featured-section">
      <h2>Featured Tools</h2>
      <div class="featured-grid">
        {#each featuredTools as tool}
          <ToolCard 
            {tool} 
            projectCount={projectCounts[tool.slug] || 0}
            size="large"
          />
        {/each}
      </div>
    </section>
  {/if}
  
  <section class="tools-section">
    <div class="tools-controls">
      <div class="search-box">
        <input 
          type="text" 
          placeholder="Search tools..." 
          bind:value={searchQuery}
          class="search-input"
        />
      </div>
      
      <div class="category-filters">
        {#each Object.entries(categories) as [key, label]}
          <button 
            class="filter-btn"
            class:active={selectedCategory === key}
            on:click={() => selectedCategory = key}
          >
            {label}
            {#if key !== 'all'}
              <span class="count">({toolsByCategory[key]?.length || 0})</span>
            {/if}
          </button>
        {/each}
      </div>
    </div>
    
    <div class="tools-grid">
      {#each filteredTools as tool}
        <ToolCard 
          {tool} 
          projectCount={projectCounts[tool.slug] || 0}
        />
      {/each}
    </div>
    
    {#if filteredTools.length === 0}
      <div class="empty-state">
        <h3>No tools found</h3>
        <p>Try adjusting your search or category filter.</p>
      </div>
    {/if}
  </section>
</div>

<style>
  .tools-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  
  .page-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  
  .page-header h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #111827;
    margin: 0 0 1rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .page-description {
    font-size: 1.25rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .featured-section {
    margin-bottom: 4rem;
  }
  
  .featured-section h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #111827;
    margin: 0 0 2rem 0;
  }
  
  .featured-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .tools-controls {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .search-box {
    max-width: 400px;
  }
  
  .search-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s ease;
  }
  
  .search-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  .category-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    background: white;
    color: #374151;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .filter-btn:hover {
    border-color: #667eea;
    color: #667eea;
  }
  
  .filter-btn.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
  }
  
  .count {
    font-size: 0.75rem;
    opacity: 0.8;
  }
  
  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .empty-state {
    text-align: center;
    padding: 4rem 1rem;
    color: #6b7280;
  }
  
  .empty-state h3 {
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
  }
  
  @media (max-width: 768px) {
    .page-header h1 {
      font-size: 2rem;
    }
    
    .featured-grid {
      grid-template-columns: 1fr;
    }
    
    .tools-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
