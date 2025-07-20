<script>
  import AboutCard from '../components/AboutCard.svelte';
  import PageHero from '../components/PageHero.svelte';
  import HeroImage from '../components/HeroImage.svelte';
</script>

<style>
  .page-main {
    @apply px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pt-24;
  }
  
  .about-subtitle {
    @apply text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-12;
  }
  
  .about-card-section {
    @apply mt-8;
  }
</style>

<main class="page-main">
  <!-- Hero Section -->
  <PageHero 
    label="About us"
    title="Powering Cities, Connecting Communities"
  />

  <!-- Full Width Image -->
  <HeroImage 
    src="/src/assets/los_angeles.png"
    alt="Los Angeles Skyline"
  />

  <!-- Subtitle -->
  <h2 class="about-subtitle">
    Lighting the Way to a Smarter, more Connected Infrastructure
  </h2>

  <!-- About Card Section -->
  <section class="about-card-section">
    <AboutCard 
      imageUrl="/src/assets/via_night.jpeg"
      imageAlt="Viaduct at night"
    />
  </section>
</main>
