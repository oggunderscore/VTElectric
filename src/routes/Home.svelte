<script>
  import { link } from 'svelte-spa-router';
  import ServiceCard from '../components/ServiceCard.svelte';
  
  const services = [
    { title: 'Fiber Optic Installation', image: '/src/assets/placeholder.jpeg' },
    { title: 'Street Lighting Installations', image: '/src/assets/placeholder.jpeg' },
    { title: 'Traffic Signal System Management', image: '/src/assets/placeholder.jpeg' },
    { title: 'Electrical Infrastructure', image: '/src/assets/placeholder.jpeg' },
    { title: 'Smart City Solutions', image: '/src/assets/placeholder.jpeg' },
    { title: 'Emergency Repairs', image: '/src/assets/placeholder.jpeg' }
  ];
  
  const projects = [
    { title: 'Sixth Street Viaduct', image: '/images/sixth-street-viaduct.jpg' },
    { title: '405 Freeway Traffic Signal Intersections', image: '/images/405-freeway.jpg' },
    { title: '57 & 91 Freeway High Mast Lights', image: '/images/high-mast-lights.jpg' }
  ];
</script>

<style>
  .hero-quote {
    padding-top: 140px; /* Account for fixed header */
    padding-bottom: 4rem;
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
  
  .hero-image-container {
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
</style>

<main class="section-padding max-width-container">
  <!-- Hero Quote Section -->
  <section class="hero-quote text-center">
    <h1 class="quote-text">
      "Excellence is the gradual result of always striving to do better."
    </h1>
    <p class="quote-author">-Pat Riley</p>
    <a href="/contact" use:link class="btn-primary mt-8 inline-block">Contact Us</a>
  </section>

  <!-- Large Hero Image -->
  <div class="hero-image-container">
    <img 
      src="/src/assets/home_viaduct.png" 
      alt="Sixth Street Viaduct" 
      class="rounded-xl shadow-2xl w-full h-auto object-cover"
    />
  </div>

  <!-- About Us Card Section -->
  <section id="about" class="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
      <!-- Left Half - Image -->
      <div class="h-full">
        <img 
          src="/src/assets/worker.png" 
          alt="VT Electric Worker" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Right Half - Text Content -->
      <div class="p-8 lg:p-12 flex flex-col justify-center">
        <p class="text-blue-600 font-medium mb-4">About us</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Lighting the way since 1999
        </h2>
        <div class="space-y-4 text-gray-600">
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

  <section id="services" class="mt-12">
    <h2 class="text-2xl font-semibold text-vt-dark mb-4">Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each services as service}
        <ServiceCard {...service} />
      {/each}
    </div>
  </section>

  <section id="projects" class="mt-12">
    <h2 class="text-2xl font-semibold text-vt-dark mb-4">Showcasing VT Electric's Impactful Work</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      </div>
  </section>
</main>
