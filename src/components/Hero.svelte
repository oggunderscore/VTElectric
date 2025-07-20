<script>
  export let title = '';
  export let subtitle = '';
  export let backgroundImage = '';
  export let showButton = false;
  export let buttonText = 'Contact Us';
  export let buttonHref = '#contact';
</script>

<style>
  .hero-section {
    position: relative;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .hero-bg-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
  }
  
  .hero-bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .hero-bg-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .hero-bg-gradient {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom right, #1e293b, #1f2937);
  }
  
  .hero-content {
    position: relative;
    z-index: 10;
    padding: 0 1.5rem;
    max-width: 80rem;
    margin: 0 auto;
    text-align: center;
    color: white;
  }
  
  @media (min-width: 768px) {
    .hero-content {
      padding: 0 3rem;
    }
  }
  
  @media (min-width: 1024px) {
    .hero-content {
      padding: 0 6rem;
    }
  }
  
  .hero-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  
  @media (min-width: 768px) {
    .hero-title {
      font-size: 3rem;
    }
  }
  
  @media (min-width: 1024px) {
    .hero-title {
      font-size: 3.75rem;
    }
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
    max-width: 48rem;
    margin: 0 auto 2rem;
  }
  
  @media (min-width: 768px) {
    .hero-subtitle {
      font-size: 1.25rem;
    }
  }
  
  @media (min-width: 1024px) {
    .hero-subtitle {
      font-size: 1.5rem;
    }
  }
</style>

<section class="hero-section">
  {#if backgroundImage}
    <div class="hero-bg-wrapper">
      <img 
        src={backgroundImage} 
        alt="Background" 
        class="hero-bg-image"
      />
      <div class="hero-bg-overlay"></div>
    </div>
  {:else}
    <div class="hero-bg-gradient"></div>
  {/if}
  
  <div class="hero-content">
    <h1 class="hero-title">
      {title}
    </h1>
    {#if subtitle}
      <p class="hero-subtitle">
        {subtitle}
      </p>
    {/if}
    {#if showButton}
      <a href={buttonHref} class="btn-primary inline-block">
        {buttonText}
      </a>
    {/if}
  </div>
</section>
