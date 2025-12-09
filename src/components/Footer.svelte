<script>
  import Logo from './Logo.svelte';
  import { link } from 'svelte-spa-router';
  
  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];
</script>

<style>
  .footer {
    background-color: white;
    color: #111827;
    padding: 3rem 0;
    margin-top: 5rem;
  }
  
  .footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (min-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .footer-description {
    color: #4b5563;
    font-size: 1.25rem;
  }
  
  .footer-links-section {
    text-align: left;
  }
  
  @media (min-width: 768px) {
    .footer-links-section {
      text-align: right;
    }
  }
  
  .footer-links-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .footer-links-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .footer-link {
    display: block;
    color: #6b7280;
    transition: color 200ms;
  }
  
  .footer-link:hover {
    color: #111827;
  }
  
  .footer-copyright {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;
    text-align: center;
    color: #6b7280;
  }
</style>

<footer class="footer">
  <div class="section-padding max-width-container">
    <div class="footer-grid">
      <div>
        <Logo className="mb-4" />
        <p class="footer-description">
          VT Electric is a trusted electrical contracting company specializing in street lighting, 
          traffic systems, and fiber optic installations for cities and highways.
        </p>
      </div>
      
      <div class="footer-links-section">
        <h3 class="footer-links-title">Quick Links</h3>
        <nav class="footer-links-nav">
          {#each footerLinks as footerLink (footerLink.href)}
            <a href={footerLink.href} use:link class="footer-link">
              {footerLink.name}
            </a>
          {/each}
        </nav>
      </div>
    </div>
    
    <div class="footer-copyright">
      <p>&copy; 2024 VT Electric Inc. All rights reserved.</p>
    </div>
  </div>
</footer>
