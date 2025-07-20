<script>
  import AboutCard from '../components/AboutCard.svelte';
  import PageHero from '../components/PageHero.svelte';
  import HeroImage from '../components/HeroImage.svelte';
</script>

<main class="section-padding max-width-container">
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
  <h2 class="text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-12">
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
