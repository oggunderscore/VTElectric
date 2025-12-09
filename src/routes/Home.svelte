<script>
  import { link } from 'svelte-spa-router';
  import ProjectCard from '../components/ProjectCard.svelte';
  import PageHero from '../components/PageHero.svelte';
  import { config } from '../lib/config';
  
  const services = [
    { title: 'Fiber Optic Installation', image: `${config.imageBase}/placeholder.jpeg` },
    { title: 'Street Lighting Installations', image: `${config.imageBase}/placeholder.jpeg` },
    { title: 'Traffic Signal System Management', image: `${config.imageBase}/placeholder.jpeg` },
    { title: 'Electrical Infrastructure', image: `${config.imageBase}/placeholder.jpeg` },
    { title: 'Smart City Solutions', image: `${config.imageBase}/placeholder.jpeg` },
    { title: 'Emergency Repairs', image: `${config.imageBase}/placeholder.jpeg` }
  ];
  
  const projects = [
    { 
      title: 'Sixth Street Viaduct',
      image: `${config.imageBase}/via_night.jpeg`,
    },
    { 
      title: '405 Freeway Traffic Signal Intersections',
      image: `${config.imageBase}/405.png`,
    },
    { 
      title: '57 & 91 Freeway High Mast Lights',
      image: `${config.imageBase}/57.jpg`,
    }
  ];
</script>

<style>
  .page-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.5rem;
    margin: 0 auto;
    max-width: 80rem;
    width: 100%;
  }
  
  @media (min-width: 768px) {
    .page-main {
      padding: 0 3rem;
    }
  }
  
  @media (min-width: 1024px) {
    .page-main {
      padding: 0 6rem;
    }
  }

  /* Hero Quote Section */
  .hero-quote {
    padding-top: 140px; /* Account for fixed header */
    padding-bottom: 4rem;
    text-align: center;
    width: 100%;
  }
  
  .home-hero-quote {
    text-align: center;
  }
  
  .quote-text {
    font-size: clamp(2rem, 5vw, 3.75rem);
    line-height: 1.2;
    font-weight: 700;
  }
  
  .quote-author {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    margin-top: 1rem;
    color: #4b5563;
  }
  
  .home-hero-cta {
    margin-top: 2rem;
    display: inline-block;
  }
  
  /* Hero Image */
  .hero-image-container {
    width: 100%;
    margin: 2rem 0 4rem;
  }
  
  .home-hero-image {
    border-radius: 0.75rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  /* About Card */
  .home-about-card {
    width: 100%;
    margin-top: 3rem;
  }
  
  .home-about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: center;
  }
  
  @media (min-width: 1024px) {
    .home-about-grid {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
  }
  
  .home-about-image-wrapper {
    width: 100%;
    height: 100%;
    min-height: 400px;
  }
  
  .home-about-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  
  .home-about-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  
  .home-about-label {
    color: #6b7280;
    font-weight: 500;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
  }
  
  .home-about-title {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
  
  @media (min-width: 768px) {
    .home-about-title {
      font-size: 2.5rem;
    }
  }
  
  .home-about-text {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    color: #4b5563;
    font-size: 1.125rem;
    line-height: 1.75;
  }
  
  /* Sections */
  .home-section {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  
  .responsive-grid-3 {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  @media (min-width: 768px) {
    .responsive-grid-3 {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

<main class="page-main">
  <!-- Hero Quote Section -->
  <section class="hero-quote home-hero-quote">
    <h1 class="quote-text">
      "Excellence is the gradual result of always striving to do better."
    </h1>
    <p class="quote-author">-Pat Riley</p>
    <a href="/contact" use:link class="btn-primary home-hero-cta">Contact Us</a>
  </section>

  <!-- Large Hero Image -->
  <div class="hero-image-container">
    <img 
      src={`${config.imageBase}/home_viaduct.png`}
      alt="Sixth Street Viaduct" 
      class="home-hero-image"
    />
  </div>

  <!-- About Us Card Section -->
  <section id="about" class="home-about-card">
    <div class="home-about-grid">
      <!-- Left Half - Image -->
      <div class="home-about-image-wrapper">
        <img 
          src={`${config.imageBase}/worker.png`}
          alt="VT Electric Worker" 
          class="home-about-image"
        />
      </div>
      
      <!-- Right Half - Text Content -->
      <div class="home-about-content">
        <p class="home-about-label">About us</p>
        <h2 class="home-about-title">
          Lighting the way since 1999
        </h2>
        <div class="home-about-text">
          <p>
            For over two decades, VT Electric has been illuminating cities and highways with expertise and innovation. 
            We've had the honor of tackling complex urban projects, from a monumental bridge and a renowned city 
            restoration to traffic signal and lighting installations in the most congested areas of Southern California.
          </p>
          <p>
            As technology evolves, so do we. With a strong foundation in intelligent traffic systems, lighting, and 
            communications, we don't just get the job done—we get it done right. No matter the challenge, VT Electric 
            continues to rise above obstacles, paving the way for a brighter, more connected future.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="home-section">
    <PageHero 
      label="Services"
      title="Innovative Electrical Services for Smarter Cities"
    />
    <div class="responsive-grid-3">
      {#each services as service (service.title)}
        <ProjectCard {...service} />
      {/each}
    </div>
  </section>

  <section id="projects" class="home-section">
    <PageHero 
      label="Projects"
      title="Showcasing VT Electric's Impactful Work"
    />
    <a href="/projects" use:link class="btn-primary">Explore All</a>
    <div class="responsive-grid-3">
      {#each projects as project (project.title)}
        <ProjectCard {...project} />
      {/each}
    </div>
  </section>
</main>
