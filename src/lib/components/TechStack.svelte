<script>
  export let technologies = [];
  export let toolIds = []; // Alternative: pass tool IDs instead of full objects
  
  import { getToolsByIds } from '$lib/data/tools';
  
  // If toolIds are provided, get the full tool objects
  $: displayTechnologies = toolIds.length > 0 ? getToolsByIds(toolIds) : technologies;
</script>

<div class="tech-stack">
  <h3>Technologies Used</h3>
  <div class="tech-grid">
    {#each displayTechnologies as tech}
      <div class="tech-item" class:featured={tech.featured}>
        {#if tech.icon}
          <img src={tech.icon} alt={tech.name} class="tech-icon" />
        {/if}
        <span class="tech-name">{tech.name}</span>
        {#if tech.description}
          <p class="tech-description">{tech.description}</p>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .tech-stack {
    margin: 2rem 0;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 12px;
    border-left: 4px solid #007acc;
  }
  
  .tech-stack h3 {
    margin: 0 0 1rem 0;
    color: #333;
    font-size: 1.25rem;
  }
  
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
  }
  
  .tech-item:hover {
    transform: translateY(-2px);
  }
  
  .tech-item.featured {
    border: 2px solid #007acc;
    background: linear-gradient(135deg, #f0f8ff, #e6f3ff);
  }
  
  .tech-icon {
    width: 32px;
    height: 32px;
    margin-bottom: 0.5rem;
  }
  
  .tech-name {
    font-weight: 600;
    color: #333;
    text-align: center;
  }
  
  .tech-description {
    font-size: 0.875rem;
    color: #666;
    text-align: center;
    margin: 0.5rem 0 0 0;
  }
</style>
