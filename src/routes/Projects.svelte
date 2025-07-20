<script>
  import ServiceCard from '../components/ServiceCard.svelte';
  import PageHero from '../components/PageHero.svelte';
  
  const projects = [
    {
      title: 'Sixth Street Viaduct',
      image: '/src/assets/placeholder.jpeg',
      description: 'Major infrastructure lighting project for the iconic Los Angeles bridge'
    },
    {
      title: '405 Freeway Traffic Signal Intersections',
      image: '/src/assets/placeholder.jpeg',
      description: 'Comprehensive traffic signal system installation and management'
    },
    {
      title: '57 & 91 Freeway High Mast Lights',
      image: '/src/assets/placeholder.jpeg',
      description: 'High mast lighting installation for improved highway safety'
    },
    {
      title: 'Downtown LA Street Lighting',
      image: '/src/assets/placeholder.jpeg',
      description: 'Modern LED street lighting upgrade for downtown Los Angeles'
    },
    {
      title: 'Metro Fiber Optic Network',
      image: '/src/assets/placeholder.jpeg',
      description: 'Fiber optic infrastructure for metropolitan connectivity'
    },
    {
      title: 'Smart City Initiative',
      image: '/src/assets/placeholder.jpeg',
      description: 'Integrated smart lighting and traffic management systems'
    }
  ];
</script>


<main class="section-padding max-width-container">
  <!-- Hero Section -->
  <PageHero 
    label="Projects"
    title="Transforming Visions into Brighter, Smarter Realities"
  />
  
  <!-- Projects Grid -->
  <section class="mt-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each projects as project}
        <ServiceCard {...project} showDescription={true} />
      {/each}
    </div>
  </section>
</main>
