<script>
  export let title = '';
  export let subtitle = '';
  export let backgroundImage = '';
  export let showButton = false;
  export let buttonText = 'Contact Us';
  export let buttonHref = '#contact';
</script>

<section class="relative min-h-[600px] flex items-center justify-center overflow-hidden">
  {#if backgroundImage}
    <div class="absolute inset-0 z-0">
      <img 
        src={backgroundImage} 
        alt="Background" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>
  {:else}
    <div class="absolute inset-0 bg-gradient-to-br from-vt-dark to-gray-800"></div>
  {/if}
  
  <div class="relative z-10 section-padding max-width-container text-center text-white">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      {title}
    </h1>
    {#if subtitle}
      <p class="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
        {subtitle}
      </p>
    {/if}
    {#if showButton}
      <a href={buttonHref} class="btn-primary inline-block">
        {buttonText}
      </a>
    {/if}
  </div>
</section>
