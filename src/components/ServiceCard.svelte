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
</style>

<div class="service-card bg-white p-6 shadow-md rounded-md">
  <img 
    src={image} 
    alt={title} 
    class="rounded-md w-full h-48 object-cover"
  />
  <h3 class="mt-4 text-lg font-medium">{title}</h3>
  {#if showDescription && description}
    <p class="mt-2 text-gray-600 text-sm">{description}</p>
  {/if}
</div>
