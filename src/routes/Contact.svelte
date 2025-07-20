<script>
  import ContactForm from '../components/ContactForm.svelte';
</script>

<style>
  .page-main {
    padding: 6rem 1.5rem 5rem;
    max-width: 80rem;
    margin: 0 auto;
  }
  
  @media (min-width: 768px) {
    .page-main {
      padding: 6rem 3rem 5rem;
    }
  }
  
  @media (min-width: 1024px) {
    .page-main {
      padding: 6rem 6rem 5rem;
    }
  }
  
  .contact-header {
    font-size: 2.25rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
  }
  
  @media (min-width: 768px) {
    .contact-header {
      font-size: 3rem;
    }
  }
  
  .contact-content {
    max-width: 72rem;
    margin: 0 auto;
  }
  
  .contact-intro {
    text-align: center;
    color: #4b5563;
    margin-bottom: 3rem;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  @media (min-width: 1024px) {
    .contact-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .contact-section-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  
  .contact-info-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .contact-info-title {
    font-weight: 600;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
  
  .contact-info-text {
    color: #4b5563;
  }
  
  .contact-link {
    color: #2563eb;
    text-decoration: none;
    transition: color 200ms;
  }
  
  .contact-link:hover {
    color: #1d4ed8;
  }
</style>

<main class="page-main">
  <h1 class="contact-header">Get in Touch</h1>
  
  <section class="contact-content">
    <p class="contact-intro">
      Ready to start your next project? Contact us today for a consultation.
    </p>
    
    <div class="contact-grid">
      <!-- Contact Form -->
      <div>
        <h2 class="contact-section-title">Send us a Message</h2>
        <ContactForm />
      </div>
      
      <!-- Contact Information -->
      <div>
        <h2 class="contact-section-title">Contact Information</h2>
        
        <div class="contact-info-list">
          <div>
            <h3 class="contact-info-title">Office Location</h3>
            <p class="contact-info-text">Ontario, CA 91762</p>
          </div>
          
          <div>
            <h3 class="contact-info-title">Phone</h3>
            <a href="tel:909-985-1755" class="contact-link">
              (909) 985-1755
            </a>
          </div>
          
          <div>
            <h3 class="contact-info-title">Email</h3>
            <a href="mailto:support@vtelectric.net" class="contact-link">
              support@vtelectric.net
            </a>
          </div>
          
          <div>
            <h3 class="contact-info-title">Business Hours</h3>
            <p class="contact-info-text">Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p class="contact-info-text">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
