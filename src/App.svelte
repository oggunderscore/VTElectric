<script>
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import ProjectCard from './components/ProjectCard.svelte';
  import ContactForm from './components/ContactForm.svelte';
  import Footer from './components/Footer.svelte';
  
  const projects = [
    {
      title: 'Sixth Street Viaduct',
      image: '/images/sixth-street-viaduct.jpg',
      description: 'Major infrastructure lighting project'
    },
    {
      title: '405 Freeway Traffic Signal Intersections',
      image: '/images/405-freeway.jpg',
      description: 'Traffic signal system installation'
    },
    {
      title: '57 & 91 Freeway High Mast Lights',
      image: '/images/high-mast-lights.jpg',
      description: 'High mast lighting installation'
    }
  ];
</script>

<Header />

<main class="pt-20">
  <!-- Hero Section -->
  <Hero 
    title="Lighting the Way to a Smarter, more Connected Infrastructure"
    subtitle="Powering Progress, Connecting Communities"
    showButton={true}
  />
  
  <!-- About Section -->
  <section id="about" class="section-padding py-20">
    <div class="max-width-container">
      <h2 class="text-4xl font-bold text-center mb-4">Powering Cities, Connecting Communities</h2>
      <p class="text-lg text-gray-600 text-center max-w-4xl mx-auto">
        At VT Electric, we are dedicated to powering cities and enhancing infrastructure through cutting-edge electrical solutions. 
        With over 20 years of experience in street lighting, traffic systems, and fiber optic installations, we bring expertise 
        and reliability to every project. Our commitment to innovation and quality ensures we deliver safe, efficient, and 
        sustainable solutions that help create smarter, more connected communities.
      </p>
    </div>
  </section>
  
  <!-- Projects Section -->
  <section id="projects" class="section-padding py-20 bg-gray-50">
    <div class="max-width-container">
      <h2 class="text-4xl font-bold text-center mb-12">Transforming Visions into Brighter, Smarter Realities</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projects as project}
          <ProjectCard {...project} />
        {/each}
      </div>
    </div>
  </section>
  
  <!-- Contact Section -->
  <section id="contact" class="section-padding py-20">
    <div class="max-width-container">
      <h2 class="text-4xl font-bold text-center mb-4">Get in touch with us right now</h2>
      <p class="text-lg text-gray-600 text-center mb-12">Contact us</p>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <ContactForm />
        </div>
        <div class="bg-blue-600 text-white p-8 rounded-lg">
          <h3 class="text-2xl font-bold mb-4">Reach out directly</h3>
          <p class="mb-8">We're here to answer your questions.</p>
          
          <div class="space-y-4">
            <div class="flex items-center">
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(909)-985-1755</span>
            </div>
            <div class="flex items-center">
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>support@vtelectric.net</span>
            </div>
            <div class="flex items-center">
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Ontario, CA 91762</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<Footer />
