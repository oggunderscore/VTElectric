<script>
  import ProjectCard from '../components/ProjectCard.svelte';
  
  const projects = [
    {
      title: 'Sixth Street Viaduct',
      image: '/images/sixth-street-viaduct.jpg',
      description: 'Major infrastructure lighting project for the iconic Los Angeles bridge'
    },
    {
      title: '405 Freeway Traffic Signal Intersections',
      image: '/images/405-freeway.jpg',
      description: 'Comprehensive traffic signal system installation and management'
    },
    {
      title: '57 & 91 Freeway High Mast Lights',
      image: '/images/high-mast-lights.jpg',
      description: 'High mast lighting installation for improved highway safety'
    },
    {
      title: 'Downtown LA Street Lighting',
      image: '/images/downtown-la.jpg',
      description: 'Modern LED street lighting upgrade for downtown Los Angeles'
    },
    {
      title: 'Metro Fiber Optic Network',
      image: '/images/metro-fiber.jpg',
      description: 'Fiber optic infrastructure for metropolitan connectivity'
    },
    {
      title: 'Smart City Initiative',
      image: '/images/smart-city.jpg',
      description: 'Integrated smart lighting and traffic management systems'
    }
  ];
</script>


<style>
  .hero-section {
    padding-top: 140px; /* Account for fixed header */
    padding-bottom: 2rem;
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    line-height: 1.2;
    font-weight: 300;
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

<main class="section-padding max-width-container py-20">
  <section class="hero-section text-center">
    <p class="font-medium mb-4">Projects</p>
    <h1 class="hero-title">Transforming Visions into Brighter, Smarter Realities</h1>
  </section>
  
  <section>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </section>
</main>
