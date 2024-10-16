<script lang="ts">
  import type { ComponentType } from "svelte";

  export let component: ComponentType | undefined = undefined;
</script>

<main class="stack">
  <div class="game">
    <slot />
  </div>

  <div class="ui-layer roboto-mono">
    <svelte:component this={component} />
  </div>
</main>

<style>
  .stack {
    display: grid;
  }

  .stack > * {
    grid-area: 1 / 1;
  }

  .ui-layer {
    padding: 1rem 1rem;
  }
  .roboto-mono {
    font-family: "Roboto Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }
</style>
