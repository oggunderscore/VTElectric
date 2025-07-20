<script>
  export let src = '';
  export let alt = '';
  export let className = '';
</script>

<style>
  .hero-image-container {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
</style>

<div class="hero-image-container {className}">
  <img 
    {src}
    {alt}
    class="rounded-xl shadow-2xl w-full h-auto object-cover"
  />
</div>
