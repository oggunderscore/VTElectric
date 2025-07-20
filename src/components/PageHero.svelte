<script>
  export let label = '';
  export let title = '';
  export let subtitle = '';
  export let showLabel = true;
</script>

<style>
  .hero-section {
    padding-top: 140px; /* Account for fixed header */
    padding-bottom: 2rem;
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    line-height: 1.2;
    font-weight: 700;
  }
  
  .hero-subtitle {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    margin-top: 2rem;
    color: #374151;
    font-weight: 600;
  }
</style>

<section class="hero-section text-center">
  {#if showLabel && label}
    <p class="text-blue-600 font-medium mb-4">{label}</p>
  {/if}
  <h1 class="hero-title">{title}</h1>
  {#if subtitle}
    <h2 class="hero-subtitle">{subtitle}</h2>
  {/if}
</section>
