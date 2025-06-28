<script>
  export let images = [];
  export let columns = 3;
  export let gap = "1rem";
</script>

<div class="gallery" style="--columns: {columns}; --gap: {gap};">
  {#each images as image}
    <div class="gallery-item">
      <img 
        src={image.src} 
        alt={image.alt || ''} 
        loading="lazy"
        on:click={() => window.open(image.src, '_blank')}
      />
      {#if image.caption}
        <p class="caption">{image.caption}</p>
      {/if}
    </div>
  {/each}
</div>

<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: var(--gap);
    margin: 2rem 0;
  }
  
  .gallery-item {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
  }
  
  .gallery-item:hover {
    transform: translateY(-2px);
  }
  
  .gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
  }
  
  .caption {
    padding: 0.5rem;
    font-size: 0.875rem;
    color: #666;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .gallery {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .gallery {
      grid-template-columns: 1fr;
    }
  }
</style>
