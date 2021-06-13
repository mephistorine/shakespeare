<script lang="ts">
  import { ICONS } from '../icons'

  export let name: keyof typeof ICONS

  export let size: string = 'auto'

</script>

<div class="icon-container" style="--icon-size: {size}">
  {#if ICONS[ name ]}
    {@html ICONS[ name ]}
  {/if}
</div>

<style>
  .icon-container {
    width: var(--icon-size);
    height: var(--icon-size);
  }

  .icon-container :global(svg) {
    display: block;
  }
</style>
