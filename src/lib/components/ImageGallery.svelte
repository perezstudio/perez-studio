<script>
  /**
   * @typedef {Object} GalleryImage
   * @property {string} src - Image source URL
   * @property {string} [alt] - Alt text for accessibility
   * @property {string} [caption] - Optional caption
   * @property {'cover' | 'contain' | 'full'} [fit] - Image fit mode: cover (crop to fill), contain (fit within), full (natural size)
   */

  /** @type {{ type?: 'grid' | 'slider' | 'list', images: GalleryImage[], columns?: number, gap?: string }} */
  let {
    type = 'grid',
    images = [],
    columns = 3,
    gap = '1rem'
  } = $props();

  let currentSlide = $state(0);

  function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
  }

  function goToSlide(index) {
    currentSlide = index;
  }

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6'
  };

  function getImageClasses(fit) {
    const baseClasses = 'not-prose w-full block rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg';

    switch (fit) {
      case 'contain':
        return `${baseClasses} h-full object-contain`;
      case 'full':
        return `${baseClasses}`;
      case 'cover':
      default:
        return `${baseClasses} h-full object-cover`;
    }
  }

  function getContainerClasses(fit, galleryType) {
    // For 'full' fit, container wraps around image naturally
    if (fit === 'full') {
      return '';
    }

    // Fixed heights for cover/contain
    if (galleryType === 'grid') {
      return 'h-52';
    }
    if (galleryType === 'slider') {
      return 'h-[500px]';
    }
    // list
    return 'h-80 md:h-[460px]';
  }
</script>

{#if type === 'grid'}
  <div
    class="grid gap-8 my-8 {gridColsClass[columns] || 'grid-cols-3'} max-md:grid-cols-2 max-sm:grid-cols-1"
    role="list"
  >
    {#each images as image, index (image.src)}
      <figure class="m-0 flex flex-col" role="listitem">
        <div class="{getContainerClasses(image.fit, 'grid')}">
          <img
            src={image.src}
            alt={image.alt || ''}
            loading="lazy"
            class={getImageClasses(image.fit)}
          />
        </div>
        {#if image.caption}
          <figcaption class="px-4 md:px-6 text-sm font-medium text-slate-500 text-left">{image.caption}</figcaption>
        {/if}
      </figure>
    {/each}
  </div>

{:else if type === 'slider'}
  <div class="my-8 relative" role="region" aria-label="Image gallery slider">
    <div class="flex items-center gap-4">
      <button
        type="button"
        class="flex items-center justify-center w-11 h-11 border border-slate-200 rounded-full bg-white cursor-pointer transition-colors duration-300 shrink-0 hover:enabled:bg-slate-100 hover:enabled:border-slate-300 focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-2 disabled:opacity-30 disabled:cursor-not-allowed"
        onclick={prevSlide}
        aria-label="Previous image"
        disabled={images.length <= 1}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div class="flex-1">
        {#each images as image, index (image.src)}
          <figure
            class="m-0 flex flex-col {index === currentSlide ? 'block' : 'hidden'}"
            aria-hidden={index !== currentSlide}
          >
            <div class="{getContainerClasses(image.fit, 'slider')}">
              <img
                src={image.src}
                alt={image.alt || ''}
                loading={index === 0 ? 'eager' : 'lazy'}
                class={getImageClasses(image.fit)}
              />
            </div>
            {#if image.caption}
              <figcaption class="px-4 md:px-6 text-sm font-medium text-slate-500 text-left">{image.caption}</figcaption>
            {/if}
          </figure>
        {/each}
      </div>

      <button
        type="button"
        class="flex items-center justify-center w-11 h-11 border border-slate-200 rounded-full bg-white cursor-pointer transition-colors duration-300 shrink-0 hover:enabled:bg-slate-100 hover:enabled:border-slate-300 focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-2 disabled:opacity-30 disabled:cursor-not-allowed"
        onclick={nextSlide}
        aria-label="Next image"
        disabled={images.length <= 1}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>

    {#if images.length > 1}
      <div class="flex justify-center gap-2 mt-4" role="tablist" aria-label="Slide navigation">
        {#each images as image, index (image.src)}
          <button
            type="button"
            class="w-2.5 h-2.5 rounded-full border border-slate-300 p-0 cursor-pointer transition-colors duration-300 hover:border-slate-500 focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-2 {index === currentSlide ? 'bg-slate-800 border-slate-800' : 'bg-white'}"
            onclick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label="Go to slide {index + 1}"
          ></button>
        {/each}
      </div>
    {/if}

    <div class="text-center mt-2 text-sm text-slate-500" aria-live="polite">
      {currentSlide + 1} / {images.length}
    </div>
  </div>

{:else if type === 'list'}
  <div class="flex flex-col gap-8 my-8" role="list">
    {#each images as image, index (image.src)}
      <figure class="m-0 flex flex-col" role="listitem">
        <div class="{getContainerClasses(image.fit, 'list')}">
          <img
            src={image.src}
            alt={image.alt || ''}
            loading="lazy"
            class={getImageClasses(image.fit)}
          />
        </div>
        {#if image.caption}
          <figcaption class="px-4 md:px-6 text-sm font-medium text-slate-500 text-left">{image.caption}</figcaption>
        {/if}
      </figure>
    {/each}
  </div>
{/if}
