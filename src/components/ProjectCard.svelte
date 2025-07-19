<script>
  export let title = '';
  export let image = '';
  export let description = '';
</script>

<div class="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
  <div class="aspect-w-16 aspect-h-9 overflow-hidden">
    <img 
      src={image} 
      alt={title}
      class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
    />
  </div>
  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
    <div class="p-6 text-white">
      <h3 class="text-xl font-semibold mb-2">{title}</h3>
      {#if description}
        <p class="text-sm opacity-90">{description}</p>
      {/if}
    </div>
  </div>
</div>
