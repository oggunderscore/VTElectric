<script>
  import ProjectCard from '../components/ProjectCard.svelte';
  import PageHero from '../components/PageHero.svelte';
  import { config } from '../lib/config';
  
  const projects = [
    {
      title: 'Sixth Street Viaduct',
      image: `${config.imageBase}/via_night.jpeg`,
      // description: 'Major infrastructure lighting project for the iconic Los Angeles bridge'
    },
    {
      title: '405 Freeway Traffic Signal Intersections',
      image: `${config.imageBase}/405.png`,
      // description: 'Comprehensive traffic signal system installation and management'
    },
    {
      title: '57 & 91 Freeway High Mast Lights',
      image: `${config.imageBase}/57.jpg`,
      // description: 'High mast lighting installation for improved highway safety'
    },
    {
      title: 'Downtown LA Street Lighting',
      image: `${config.imageBase}/placeholder.jpeg`,
      // description: 'Modern LED street lighting upgrade for downtown Los Angeles'
    },
    {
      title: 'Metro Fiber Optic Network',
      image: `${config.imageBase}/placeholder.jpeg`,
      // description: 'Fiber optic infrastructure for metropolitan connectivity'
    },
    {
      title: 'Smart City Initiative',
      image: `${config.imageBase}/placeholder.jpeg`,
      // description: 'Integrated smart lighting and traffic management systems'
    }
  ];
</script>

<style>
  .page-main {
    padding: 0 1.5rem;
    margin: 0 auto;
    max-width: 80rem;
    padding-top: 6rem;
  }
  
  .projects-section {
    margin-top: 2rem;
  }
  
  .responsive-grid-3 {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
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
  <!-- Hero Section -->
  <PageHero 
    label="Projects"
    title="Transforming Visions into Brighter, Smarter Realities"
  />
  
  <!-- Projects Grid -->
  <section class="projects-section">
    <div class="responsive-grid-3">
      {#each projects as project (project.title)}
        <ProjectCard {...project} />
      {/each}
    </div>
  </section>
</main>
