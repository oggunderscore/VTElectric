<script>
  import ContactForm from '../components/ContactForm.svelte';
</script>

<main class="section-padding max-width-container py-20">
  <h1 class="text-4xl md:text-5xl font-bold text-center mb-12">Get in Touch</h1>
  
  <section class="max-w-6xl mx-auto">
    <p class="text-center text-gray-600 mb-12">
      Ready to start your next project? Contact us today for a consultation.
    </p>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div>
        <h2 class="text-2xl font-semibold mb-6">Send us a Message</h2>
        <ContactForm />
      </div>
      
      <!-- Contact Information -->
      <div>
        <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="font-semibold text-lg mb-2">Office Location</h3>
            <p class="text-gray-600">Ontario, CA 91762</p>
          </div>
          
          <div>
            <h3 class="font-semibold text-lg mb-2">Phone</h3>
            <a href="tel:909-985-1755" class="text-blue-600 hover:text-blue-700">
              (909) 985-1755
            </a>
          </div>
          
          <div>
            <h3 class="font-semibold text-lg mb-2">Email</h3>
            <a href="mailto:support@vtelectric.net" class="text-blue-600 hover:text-blue-700">
              support@vtelectric.net
            </a>
          </div>
          
          <div>
            <h3 class="font-semibold text-lg mb-2">Business Hours</h3>
            <p class="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p class="text-gray-600">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
