<script lang="ts">
  import type { PortfolioPostWithTools } from '$lib/types/tools.js';

  export let project: PortfolioPostWithTools;
  export let showTools: boolean = true;
  export let highlightTool: string | null = null;
</script>

<article class="project-card">
  <a href="/portfolio/{project.slug}" class="project-link">
    {#if project.images && project.images[0]}
      <div class="project-image">
        <img
          src={project.images[0].thumbnail || project.images[0].src}
          alt={project.images[0].alt}
          loading="lazy"
        />
      </div>
    {/if}

    <div class="project-content">
      <div class="project-meta">
        <time class="project-date">{new Date(project.date).toLocaleDateString()}</time>
        {#if project.status}
          <span class="project-status project-status--{project.status}">{project.status}</span>
        {/if}
      </div>

      <h3 class="project-title">{project.title}</h3>
      <p class="project-description">{project.description}</p>

      {#if project.client}
        <p class="project-client">Client: {project.client}</p>
      {/if}

      {#if showTools && project.tools && project.tools.length > 0}
        <div class="project-tools">
          {#each project.tools.slice(0, 6) as tool}
            <span
              class="tool-tag"
              class:highlighted={highlightTool === tool.slug}
              style="--tool-color: {tool.color || '#6b7280'}"
            >
              {#if tool.logo}
                <img src={tool.logo} alt={tool.name} class="tool-icon" />
              {/if}
              {tool.name}
            </span>
          {/each}
          {#if project.tools.length > 6}
            <span class="tool-tag tool-tag--more">+{project.tools.length - 6} more</span>
          {/if}
        </div>
      {/if}

      {#if project.tags && project.tags.length > 0}
        <div class="project-tags">
          {#each project.tags.slice(0, 3) as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>
      {/if}
    </div>
  </a>
</article>

<style>
  .project-card {
    background: white;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .project-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }

  .project-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .project-image {
    aspect-ratio: 16/9;
    overflow: hidden;
    background: #f3f4f6;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;
  }

  .project-card:hover .project-image img {
    transform: scale(1.05);
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  .project-date {
    color: #6b7280;
    font-size: 0.875rem;
  }

  .project-status {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
  }

  .project-status--completed {
    background: #d1fae5;
    color: #065f46;
  }

  .project-status--in-progress {
    background: #fef3c7;
    color: #92400e;
  }

  .project-status--archived {
    background: #f3f4f6;
    color: #374151;
  }

  .project-title {
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
    line-height: 1.3;
  }

  .project-description {
    margin: 0 0 1rem 0;
    color: #6b7280;
    line-height: 1.5;
  }

  .project-client {
    margin: 0 0 1rem 0;
    color: #374151;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .project-tools {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .tool-tag {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    color: #374151;
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
    font-size: 0.8125rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .tool-tag.highlighted {
    background: var(--tool-color);
    color: white;
    border-color: var(--tool-color);
  }

  .tool-tag--more {
    background: #e5e7eb;
    color: #6b7280;
  }

  .tool-icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background: #f3f4f6;
    color: #374151;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
  }
</style>
