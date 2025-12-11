<script>
  import { link } from 'svelte-spa-router';
  
  export let title = '';
  export let image = '';
  export let description = '';
  export let href = null;
</script>

<style>
  .card-container {
    display: flex;
    flex-direction: column;
    transition: transform 0.3s;
    text-decoration: none;
    color: inherit;
  }
  
  .card-container:hover {
    transform: translateY(-0.5rem);
  }
  
  .card-container.clickable {
    cursor: pointer;
  }
  
  .image-container {
    position: relative;
    width: 100%;
    padding-bottom: 100%; /* Creates a square aspect ratio */
    overflow: hidden;
    border-radius: 0.75rem; /* Added rounded corners */
  }
  
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
    border-radius: 0.75rem; /* Added rounded corners */
  }
  
  .card-container:hover img {
    transform: translate(-50%, -50%) scale(1.1);
  }
  
  .card-title {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
  }
  
  .card-description {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #6b7280;
  }
</style>

{#if href}
  <a href={href} use:link class="card-container clickable">
    <div class="image-container">
      <img src={image} alt={title} />
    </div>
    <h3 class="card-title">{title}</h3>
    {#if description}
      <p class="card-description">{description}</p>
    {/if}
  </a>
{:else}
  <div class="card-container">
    <div class="image-container">
      <img src={image} alt={title} />
    </div>
    <h3 class="card-title">{title}</h3>
    {#if description}
      <p class="card-description">{description}</p>
    {/if}
  </div>
{/if}
<!-- 
<div class="group">
  <div class="aspect-container">
    <img 
      src={image} 
      alt={title}
    />
  </div>
  <div class="content-overlay">
    <div class="text-content">
      <h3 class="card-title">{title}</h3>
      {#if description}
        <p class="card-description">{description}</p>
      {/if}
    </div>
  </div>
</div> -->
