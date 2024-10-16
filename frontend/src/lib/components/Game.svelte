<script lang="ts">
  import UserInterface from "$lib/components/UserInterface.svelte";
  import PixiRenderer from "$lib/components/PixiRenderer.svelte";
  import { start_game } from "$game/init";
  import { active_ui } from "$game/ui";

  async function start(e: CustomEvent<HTMLElement>) {
    await start_game(e.detail);
  }
</script>

<UserInterface component={$active_ui}>
  <PixiRenderer on:ready={start} />
</UserInterface>
