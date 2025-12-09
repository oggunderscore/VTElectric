<script>
  import { config } from '../lib/config';
  import AboutCard from '../components/AboutCard.svelte';
  import PageHero from '../components/PageHero.svelte';
  import HeroImage from '../components/HeroImage.svelte';
  import ContactButton from '../components/ContactButton.svelte';
</script>

<style>
  .page-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.5rem;
    margin: 0 auto;
    max-width: 80rem;
    padding-top: 6rem;
  }
  
  @media (min-width: 768px) {
    .page-main {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
  
  @media (min-width: 1024px) {
    .page-main {
      padding-left: 6rem;
      padding-right: 6rem;
    }
  }
  
  .about-subtitle {
    font-size: 1.875rem;
    font-weight: 600;
    color: #1f2937;
    text-align: center;
    margin: 0 auto 3rem;  /* Center the subtitle */
    max-width: 50%;
  }
  
  @media (min-width: 1024px) {
    .about-subtitle {
      font-size: 2.25rem;
    }
  }
  
  .about-card-section {
    margin-top: 2rem;
  }
</style>

<main class="page-main">
  <!-- Hero Section -->
  <PageHero 
    label="About us"
    title="Powering Cities, Connecting Communities"
  />

  <!-- Contact Button -->
  <ContactButton />

  <!-- Full Width Image -->
  <HeroImage 
    src={`${config.imageBase}/los_angeles.png`}
    alt="Los Angeles Skyline"
  />

  <!-- Subtitle -->
  <h2 class="about-subtitle">
    Lighting the Way to a Smarter, more Connected Infrastructure
  </h2>

  <!-- About Card Section -->
  <section class="about-card-section">
    <AboutCard 
      imageUrl={`${config.imageBase}/via_night.jpeg`}
      imageAlt="Viaduct at night"
    />
  </section>
</main>
