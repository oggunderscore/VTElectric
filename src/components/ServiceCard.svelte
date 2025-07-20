<script>
  export let title = '';
  export let image = '';
  export let description = '';
  export let showDescription = false;
</script>

<style>
  .service-card {
    transition: transform 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-4px);
  }
  
  .card-base {
    background-color: white;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.375rem;
  }
  
  .card-image {
    border-radius: 0.375rem;
    width: 100%;
    height: 12rem;
    object-fit: cover;
  }
  
  .card-title {
    margin-top: 1rem;
    font-size: 1.125rem;
    font-weight: 500;
  }
  
  .card-description {
    margin-top: 0.5rem;
    color: #4b5563;
    font-size: 0.875rem;
  }
</style>

<div class="service-card card-base">
  <img 
    src={image} 
    alt={title} 
    class="card-image"
  />
  <h3 class="card-title">{title}</h3>
  {#if showDescription && description}
    <p class="card-description">{description}</p>
  {/if}
</div>
