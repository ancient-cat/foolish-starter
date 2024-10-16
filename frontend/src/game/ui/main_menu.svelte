<script lang="ts">
  import { game_events } from "$game/game";

  function start_game() {
    game_events.emit("start");
  }
  function quit_game() {
    game_events.emit("quit");
  }
  function settings() {
    game_events.emit("settings");
  }
</script>

<nav class="main_menu">
  <ul class="unstyled">
    <li>
      <button on:click={start_game}>Start Game</button>
    </li>
    <li><button on:click={settings}>Settings</button></li>
    <li><button on:click={quit_game}>Quit</button></li>
  </ul>
</nav>

<style>
  .main_menu {
    font-size: 1.25rem;
    display: grid;
    place-content: center;
    height: 100vh;
  }
  .unstyled {
    padding: 0 0;
    margin: 0 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .main_menu button {
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 2em;
    background-color: #445;
    font-family: "Roboto Mono", monospace;
    text-transform: uppercase;
    color: #d2d2df;
    border: none;
    width: 100%;
    transition: background 0.1s ease-in-out;
  }

  .main_menu button:hover {
    background-color: #222;
  }
</style>
