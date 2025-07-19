<script>
  import Logo from './Logo.svelte';
  
  let mobileMenuOpen = false;
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' }
  ];
</script>

<header class="fixed top-0 w-full bg-white shadow-sm z-50">
  <nav class="section-padding">
    <div class="max-width-container flex items-center justify-between py-4">
      <Logo />
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        {#each navItems as item}
          <a href={item.href} class="text-gray-700 hover:text-vt-orange transition-colors font-medium">
            {item.name}
          </a>
        {/each}
        <a href="#contact" class="btn-primary">Contact Us</a>
      </div>
      
      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2"
        on:click={() => mobileMenuOpen = !mobileMenuOpen}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if mobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden py-4 border-t">
        {#each navItems as item}
          <a
            href={item.href}
            class="block py-2 text-gray-700 hover:text-vt-orange transition-colors font-medium"
            on:click={() => mobileMenuOpen = false}
          >
            {item.name}
          </a>
        {/each}
        <a
          href="#contact"
          class="btn-primary inline-block mt-4"
          on:click={() => mobileMenuOpen = false}
        >
          Contact Us
        </a>
      </div>
    {/if}
  </nav>
</header>
