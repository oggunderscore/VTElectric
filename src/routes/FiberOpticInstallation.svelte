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



  /* Hero Section with Text and Image */
  .hero-section {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 4rem auto;
    padding: 140px 25px 0 25px; /* Account for fixed header */
  }

  .hero-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: center;
  }

  @media (min-width: 768px) {
    .hero-container {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .hero-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  @media (min-width: 768px) {
    .hero-title {
      font-size: 3rem;
    }
  }

  .hero-subtitle {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #4b5563;
  }

  .hero-image-wrapper {
    position: relative;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    aspect-ratio: 4 / 3;
  }

  .hero-image {
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

  /* Content Section */
  .service-content {
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
  }
  
  .service-text {
    font-size: 1.25rem;
    line-height: 1.8;
    color: #4b5563;
    text-align: left;
  }
</style>

<div class="page-container">
  <!-- Hero Section with Text and Image -->
  <div class="hero-section">
    <div class="hero-container">
      <div class="text-wrapper">
        <h2 class="hero-title">Fiber Optic Installation</h2>
        <p class="hero-subtitle">From one edge of the city to another, we installed fiber optic systems alongside traffic signals.</p>
      </div>
      <div class="hero-image-wrapper">
        <img 
          src={`${config.imageBase}/placeholder.jpeg`}
          alt="Fiber Optic Installation" 
          class="hero-image"
        />
      </div>
    </div>
  </div>

  <!-- Additional Content Section -->
  <div class="content-wrapper">
    <div class="service-content">
      <p class="service-text">
        VT Electric offers professional streetlight fiber optic installation, enhancing connectivity for smart city infrastructure. Our services ensure high-speed data transmission for advanced lighting control, traffic management, and surveillance systems. With precision and expertise, we integrate durable, high-performance fiber optic networks to improve efficiency and reliability in urban environments.
      </p>
    </div>
  </div>
</div>