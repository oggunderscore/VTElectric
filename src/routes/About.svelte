<script>
  import AboutCard from '../components/AboutCard.svelte';
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
  
  .hero-image-container {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
</style>

<main class="section-padding max-width-container">
  <!-- Hero Section -->
  <section class="hero-section text-center">
    <p class="font-medium mb-4">About us</p>
    <h1 class="hero-title">Powering Cities, Connecting Communities</h1>
  </section>

  <!-- Full Width Image -->
  <div class="hero-image-container">
    <img 
      src="/src/assets/los_angeles.png" 
      alt="Los Angeles Skyline"
      class="rounded-xl shadow-2xl w-full h-auto object-cover"
    />
  </div>

  <!-- Subtitle -->
  <h2 class="hero-subtitle text-center mb-12">
    Lighting the Way to a Smarter, more Connected Infrastructure
  </h2>

  <!-- About Card Section -->
  <section class="mt-8">
    <AboutCard 
      imageUrl="/src/assets/via_night.jpeg"
      imageAlt="Viaduct at night"
    />
  </section>
</main>
