<script>
  import Logo from './Logo.svelte';
  
  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];
</script>

<footer class="bg-gray-900 text-white py-12 mt-20">
  <div class="section-padding max-width-container">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Logo className="mb-4" />
        <p class="text-gray-400">
          VT Electric is a trusted electrical contracting company specializing in street lighting, 
          traffic systems, and fiber optic installations for cities and highways.
        </p>
      </div>
      
      <div class="md:text-right">
        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
        <nav class="space-y-2">
          {#each footerLinks as link}
            <a href={link.href} class="block text-gray-400 hover:text-white transition-colors">
              {link.name}
            </a>
          {/each}
        </nav>
      </div>
    </div>
    
    <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
      <p>&copy; 2024 VT Electric Inc. All rights reserved.</p>
      <p class="mt-2 text-sm">Made in Framer</p>
    </div>
  </div>
</footer>
