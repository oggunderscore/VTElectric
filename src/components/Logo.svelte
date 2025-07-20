<script>
  export let className = '';
  export let width = '150';
  export let height = 'auto';
  import { config } from '../lib/config';
</script>

<div class="flex items-center {className}">
  <img 
    src={`${config.imageBase}/logo.png`}
    alt="VT Electric Logo"
    width={width}
    height={height}
    class="h-auto"
  />
</div>
