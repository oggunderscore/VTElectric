<script>
  export let imageUrl = '';
  export let imageAlt = '';
</script>

<div class="bg-white rounded-lg shadow-lg overflow-hidden">
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <!-- Image Section -->
    <div class="h-64 lg:h-auto">
      <img 
        src={imageUrl} 
        alt={imageAlt}
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- Content Section -->
    <div class="p-8 lg:p-12">
      <h3 class="text-gray-600 uppercase tracking-wide text-sm font-semibold mb-2">About us</h3>
      <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Powering Progress, Connecting Communities</h2>
      <p class="text-gray-600 text-lg leading-relaxed mb-8">
        At VT Electric, we are dedicated to powering cities and enhancing infrastructure through cutting-edge electrical solutions. 
        With over 20 years of experience in street lighting, traffic systems, and fiber optic installations, we bring expertise 
        and reliability to every project. Our commitment to innovation and quality ensures we deliver safe, efficient, and 
        sustainable solutions that help create smarter, more connected communities.
      </p>
      <a href="#contact" class="btn-primary inline-block">Contact Us</a>
    </div>
  </div>
</div>
