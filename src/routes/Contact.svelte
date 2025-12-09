<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  
  let isFormValid = false;
  let isEmailValid = true;
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  $: isEmailValid = formData.email === '' || validateEmail(formData.email);
  $: isFormValid = formData.name && formData.email && validateEmail(formData.email) && formData.phone && formData.message;
  
  function formatPhoneNumber(value) {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const limitedDigits = digits.slice(0, 10);
    
    // Format based on length
    if (limitedDigits.length <= 3) {
      return limitedDigits;
    } else if (limitedDigits.length <= 6) {
      return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
    } else {
      return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
    }
  }
  
  function handlePhoneInput(e) {
    const input = e.target;
    const newValue = formatPhoneNumber(input.value);
    
    formData.phone = newValue;
    
    // Always move cursor to the end
    setTimeout(() => {
      input.setSelectionRange(newValue.length, newValue.length);
    }, 0);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if (isFormValid) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  }
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
  
  .contact-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    border: 1px solid #e5e7eb;
    border-radius: 1rem;
    overflow: hidden;
  }
  
  @media (min-width: 1024px) {
    .contact-container {
      grid-template-columns: 1fr 400px;
    }
  }
  
  .form-section {
    padding: 2.5rem;
    background: white;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (min-width: 640px) {
    .form-row {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .form-label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .form-label-text {
    font-size: 0.875rem;
    font-weight: 500;
    color: #121212;
  }
  
  .form-input {
    padding: 0.75rem 0;
    border: none;
    border-bottom: 1px solid #d1d5db;
    border-radius: 0;
    font-size: 0.9375rem;
    background-color: transparent;
    transition: border-color 0.2s;
  }
  
  .form-input:focus {
    outline: none;
    border-bottom-color: rgb(0, 145, 228);
  }
  
  .form-input::placeholder {
    color: #9ca3af;
  }
  
  .form-input.invalid {
    border-bottom-color: #ef4444;
  }
  
  .error-message {
    font-size: 0.75rem;
    color: #ef4444;
    margin-top: 0.25rem;
  }
  
  textarea.form-input {
    min-height: 120px;
    resize: vertical;
    font-family: inherit;
  }
  
  .submit-button {
    padding: 0.875rem 2rem;
    background-color: rgb(0, 145, 228);
    color: white;
    border: none;
    border-radius: 1000px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
    width: 100%;
  }
  
  .submit-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .submit-button:not(:disabled):hover {
    opacity: 0.9;
  }
  
  .sidebar {
    background-color: rgb(0, 145, 228);
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .sidebar-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .sidebar-title {
    font-size: 2.25rem;
    font-weight: 600;
    color: white;
    margin: 0;
  }
  
  .sidebar-subtitle {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
  }
  
  .sidebar-divider {
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: white;
    text-decoration: none;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s;
  }
  
  .contact-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .contact-icon {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }
  
  .contact-text {
    font-size: 0.9375rem;
    font-weight: 500;
  }
</style>

<main class="page-main">
  <div class="contact-container">
    <!-- Form Section -->
    <div class="form-section">
      <form class="contact-form" on:submit={handleSubmit}>
        <div class="form-row">
          <label class="form-label">
            <span class="form-label-text">Full Name</span>
            <input
              type="text"
              name="name"
              placeholder="John Carter"
              class="form-input"
              bind:value={formData.name}
              required
            />
          </label>
          
          <label class="form-label">
            <span class="form-label-text">Email Address</span>
            <input
              type="email"
              name="email"
              placeholder="yourname@gmail.com"
              class="form-input"
              class:invalid={!isEmailValid}
              bind:value={formData.email}
              required
            />
            {#if !isEmailValid}
              <span class="error-message">Please enter a valid email address</span>
            {/if}
          </label>
        </div>
        
        <label class="form-label">
          <span class="form-label-text">Phone Number</span>
          <input
            type="tel"
            name="phone"
            placeholder="(123) 456-7890"
            class="form-input"
            value={formData.phone}
            on:input={handlePhoneInput}
            required
          />
        </label>
        
        <label class="form-label">
          <span class="form-label-text">Message</span>
          <textarea
            name="message"
            placeholder="Type your message here !!!"
            class="form-input"
            bind:value={formData.message}
            required
          ></textarea>
        </label>
        
        <button
          type="submit"
          class="submit-button"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </div>
    
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="sidebar-header">
        <h3 class="sidebar-title">Reach out directly</h3>
        <p class="sidebar-subtitle">We're here to answer your questions.</p>
      </div>
      
      <div class="sidebar-divider"></div>
      
      <div class="contact-details">
        <a href="tel:909-985-1755" class="contact-link">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span class="contact-text">(909)-985-1755</span>
        </a>
        
        <a href="mailto:support@vtelectric.net" class="contact-link">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span class="contact-text">support@vtelectric.net</span>
        </a>
        
        <a
          href="https://www.google.com/maps/place/10825+Vernon+Ave,+Ontario,+CA+91762/@34.0574441,-117.6874784,17z/data=!3m1!4b1!4m6!3m5!1s0x80c333b41cacdfc9:0x65cba4179ff86d92!8m2!3d34.0574441!4d-117.6849035!16s%2Fg%2F11c28lrkgm?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link"
        >
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span class="contact-text">Ontario, CA 91762</span>
        </a>
      </div>
    </div>
  </div>
</main>
