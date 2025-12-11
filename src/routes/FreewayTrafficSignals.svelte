<script>
  import { config } from '../lib/config';
</script>

<style>
  .page-container {
    width: 100%;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.5rem;
    margin: 0 auto;
    max-width: 80rem;
    width: 100%;
  }
  
  @media (min-width: 768px) {
    .content-wrapper {
      padding: 0 3rem;
    }
  }
  
  @media (min-width: 1024px) {
    .content-wrapper {
      padding: 0 6rem;
    }
  }

  .project-header {
    padding-top: 140px; /* Account for fixed header */
    padding-bottom: 2rem;
    text-align: center;
    width: 100%;
  }
  
  .project-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.2;
    font-weight: 700;
    color: #111827;
  }
  
  .project-image-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 3rem auto;
    padding: 0 25px;
  }
  
  .project-image-wrapper {
    position: relative;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
  }
  
  .project-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
    border-radius: inherit;
  }
  
  .project-content {
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
  }
  
  .project-text {
    font-size: 1.25rem;
    line-height: 1.8;
    color: #4b5563;
    text-align: left;
  }
</style>

<div class="page-container">
  <!-- Header section with constrained width -->
  <div class="content-wrapper">
    <section class="project-header">
      <h1 class="project-title">405 Freeway Traffic Signal Intersections</h1>
    </section>
  </div>

  <!-- Constrained image section -->
  <div class="project-image-container">
    <div class="project-image-wrapper">
      <img 
        src={`${config.imageBase}/405.png`}
        alt="405 Freeway Traffic Signal Intersections" 
        class="project-image"
      />
    </div>
  </div>

  <!-- Content section with constrained width -->
  <div class="content-wrapper">
    <div class="project-content">
      <p class="project-text">
        Running parallel to the bustling 405 Freeway, VT Electric took on the challenge of installing an impressive 30 traffic signal intersections. With precision and expertise, our team enhanced traffic flow and safety, contributing to a more efficient and connected roadway system.
      </p>
    </div>
  </div>
</div>