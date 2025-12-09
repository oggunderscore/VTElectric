<script>
  import { link } from 'svelte-spa-router';
</script>

<style>
  .contact-button-wrapper {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
</style>

<div class="contact-button-wrapper">
  <a href="/contact" use:link class="btn-primary">
    Contact Us
  </a>
</div>
