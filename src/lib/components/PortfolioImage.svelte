<script>
  export let src;
  export let alt = '';
  export let caption = '';
  export let width = '100%';
  export let height = 'auto';
  export let clickable = true;
</script>

<figure class="portfolio-image" style="width: {width};">
  <img 
    {src} 
    {alt} 
    style="height: {height};"
    class:clickable
    on:click={() => clickable && window.open(src, '_blank')}
  />
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>

<style>
  .portfolio-image {
    margin: 1.5rem 0;
    text-align: center;
  }
  
  .portfolio-image img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
  }
  
  .portfolio-image img.clickable {
    cursor: pointer;
  }
  
  .portfolio-image img.clickable:hover {
    transform: scale(1.02);
  }
  
  figcaption {
    margin-top: 0.5rem;
    font-style: italic;
    color: #666;
    font-size: 0.875rem;
  }
</style>
