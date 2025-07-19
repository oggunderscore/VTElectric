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

<form on:submit={handleSubmit} class="space-y-6">
  <div>
    <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">
      Full Name
    </label>
    <input
      type="text"
      id="fullName"
      bind:value={formData.fullName}
      placeholder="John Carter"
      required
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
  
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
      Email Address
    </label>
    <input
      type="email"
      id="email"
      bind:value={formData.email}
      placeholder="yourname@gmail.com"
      required
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
  
  <div>
    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
      Phone Number
    </label>
    <input
      type="tel"
      id="phone"
      bind:value={formData.phone}
      placeholder="+123 456 789"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
  
  <div>
    <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
      Message
    </label>
    <textarea
      id="message"
      bind:value={formData.message}
      placeholder="Type your message here !!!"
      rows="5"
      required
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
    ></textarea>
  </div>
  
  <button type="submit" class="w-full btn-primary">
    Submit
  </button>
</form>
