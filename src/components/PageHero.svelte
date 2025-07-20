<script>
  export let label = '';
  export let title = '';
  export let subtitle = '';
  export let showLabel = true;
</script>

<style>
  .page-hero-section {
    padding-top: 140px; /* Account for fixed header */
    padding-bottom: 2rem;
  }
  
  .page-hero-title {
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    line-height: 1.2;
    font-weight: 700;
  }
  
  .page-hero-subtitle {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    margin-top: 2rem;
    color: #374151;
    font-weight: 600;
  }
</style>

<section class="page-hero-section page-hero-center">
  {#if showLabel && label}
    <p class="page-hero-label">{label}</p>
  {/if}
  <h1 class="page-hero-title">{title}</h1>
  {#if subtitle}
    <h2 class="page-hero-subtitle">{subtitle}</h2>
  {/if}
</section>
