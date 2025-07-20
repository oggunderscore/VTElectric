<script>
  import PageHero from '../components/PageHero.svelte';
  import ProjectCard from '../components/ProjectCard.svelte';
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
  
  .services-grid {
    width: 100%;  /* Ensure grid takes full width */
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 3rem;
  }
  
  @media (min-width: 768px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

<main class="page-main">
  <PageHero 
    label="Services"
    title="Explore our range of services"
  />
  
  <div class="services-grid">
    <ProjectCard 
      title="Fiber Optic Installation"
      image="/src/assets/placeholder.jpeg"
    />
    <ProjectCard 
      title="Street Lighting"
      image="/src/assets/placeholder.jpeg"
    />
    <ProjectCard 
      title="Traffic Systems"
      image="/src/assets/placeholder.jpeg"
    />
    <ProjectCard 
      title="Infrastructure"
      image="/src/assets/placeholder.jpeg"
    />
    <ProjectCard 
      title="Smart Cities"
      image="/src/assets/placeholder.jpeg"
    />
    <ProjectCard 
      title="Emergency Services"
      image="/src/assets/placeholder.jpeg"
    />
  </div>
</main>
