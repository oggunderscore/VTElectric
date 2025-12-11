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
  import SixthStreetViaduct from './routes/SixthStreetViaduct.svelte';
  import FreewayTrafficSignals from './routes/FreewayTrafficSignals.svelte';
  import FreewayHighMastLights from './routes/FreewayHighMastLights.svelte';
  import FiberOpticInstallation from './routes/FiberOpticInstallation.svelte';
  import StreetLightingInstallations from './routes/StreetLightingInstallations.svelte';
  
  // Define routes
  const routes = {
    '/': Home,
    '/about': About,
    '/services': Services,
    '/projects': Projects,
    '/contact': Contact,
    '/projects/sixth-street-viaduct': SixthStreetViaduct,
    '/projects/405-freeway-traffic-signals': FreewayTrafficSignals,
    '/projects/57-91-freeway-high-mast-lights': FreewayHighMastLights,
    '/services/fiber-optic-installation': FiberOpticInstallation,
    '/services/street-lighting-installations': StreetLightingInstallations
  };
</script>

<Header />

<main class="min-h-screen">
  <Router {routes} />
</main>

<Footer />
