<script>
  export let className = '';
  export let width = '150';
  export let height = 'auto';
</script>

<div class="flex items-center {className}">
  <img 
    src="/src/assets/logo.png" 
    alt="VT Electric Logo"
    width={width}
    height={height}
    class="h-auto"
  />
</div>
