<script>
  let formData = {
    fullName: '',
    email: '',
    phone: '',
    message: ''
  };
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    formData = {
      fullName: '',
      email: '',
      phone: '',
      message: ''
    };
  }
</script>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-group {
    display: block;
  }
  
  .form-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.25rem;
  }
  
  .form-input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 200ms, box-shadow 200ms;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  .form-textarea {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
    resize: none;
    transition: border-color 200ms, box-shadow 200ms;
  }
  
  .form-textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  .form-submit {
    width: 100%;
    background-color: #2563eb;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: background-color 200ms;
  }
  
  .form-submit:hover {
    background-color: #1d4ed8;
  }
</style>

<form on:submit={handleSubmit} class="form-container">
  <div class="form-group">
    <label for="fullName" class="form-label">
      Full Name
    </label>
    <input
      type="text"
      id="fullName"
      bind:value={formData.fullName}
      placeholder="John Carter"
      required
      class="form-input"
    />
  </div>
  
  <div class="form-group">
    <label for="email" class="form-label">
      Email Address
    </label>
    <input
      type="email"
      id="email"
      bind:value={formData.email}
      placeholder="yourname@gmail.com"
      required
      class="form-input"
    />
  </div>
  
  <div class="form-group">
    <label for="phone" class="form-label">
      Phone Number
    </label>
    <input
      type="tel"
      id="phone"
      bind:value={formData.phone}
      placeholder="+123 456 789"
      class="form-input"
    />
  </div>
  
  <div class="form-group">
    <label for="message" class="form-label">
      Message
    </label>
    <textarea
      id="message"
      bind:value={formData.message}
      placeholder="Type your message here !!!"
      rows="5"
      required
      class="form-textarea"
    ></textarea>
  </div>
  
  <button type="submit" class="form-submit">
    Submit
  </button>
</form>
