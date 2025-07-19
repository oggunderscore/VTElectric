<script>
  import Router from 'svelte-spa-router';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  
  // Import all route components
  import Home from './routes/Home.svelte';
  import About from './routes/About.svelte';
  import Services from './routes/Services.svelte';
  import Projects from './routes/Projects.svelte';
  import Contact from './routes/Contact.svelte';
  
  // Define routes
  const routes = {
    '/': Home,
    '/about': About,
    '/services': Services,
    '/projects': Projects,
    '/contact': Contact
  };
</script>

<Header />

<main class="min-h-screen">
  <Router {routes} />
</main>

<Footer />
