<script>
  import { link } from 'svelte-spa-router';
  import ProjectCard from '../components/ProjectCard.svelte';
  import PageHero from '../components/PageHero.svelte';
  
  const services = [
    { title: 'Fiber Optic Installation', image: '/src/assets/placeholder.jpeg' },
    { title: 'Street Lighting Installations', image: '/src/assets/placeholder.jpeg' },
    { title: 'Traffic Signal System Management', image: '/src/assets/placeholder.jpeg' },
    { title: 'Electrical Infrastructure', image: '/src/assets/placeholder.jpeg' },
    { title: 'Smart City Solutions', image: '/src/assets/placeholder.jpeg' },
    { title: 'Emergency Repairs', image: '/src/assets/placeholder.jpeg' }
  ];
  
  const projects = [
    { 
      title: 'Sixth Street Viaduct',
      image: '/src/assets/via_night.jpeg',
    },
    { 
      title: '405 Freeway Traffic Signal Intersections',
      image: '/src/assets/405.png',
    },
    { 
      title: '57 & 91 Freeway High Mast Lights',
      image: '/src/assets/57.jpg',
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
    background-color: #f9fafb;
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }
  
  .home-about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  @media (min-width: 1024px) {
    .home-about-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .home-about-image-wrapper {
    height: 100%;
  }
  
  .home-about-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .home-about-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  @media (min-width: 1024px) {
    .home-about-content {
      padding: 3rem;
    }
  }
  
  .home-about-label {
    color: #2563eb;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  .home-about-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
  }
  
  @media (min-width: 768px) {
    .home-about-title {
      font-size: 2.25rem;
    }
  }
  
  .home-about-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #4b5563;
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
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
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
      src="/src/assets/home_viaduct.png" 
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
          src="/src/assets/worker.png" 
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
      {#each services as service}
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
      {#each projects as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </section>
</main>
