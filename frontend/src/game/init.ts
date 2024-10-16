import { app, initialize, type Scene, Scenes } from "@ancient-cat/foolish";

import { game_events } from "./game";
import pixidemo from "../game/scenes/pixi-demo";
import main_menu from "./scenes/main_menu";
import { is_browser } from "$lib/env";

export const start_game = async (root: HTMLElement = document.body) => {
  await initialize(root);

  await Scenes.switch(main_menu);

  game_events.on("start", async () => {
    await Scenes.switch(pixidemo);
  });

  game_events.on("quit", async () => {
    if (is_browser()) {
      window.close();
    } else {
      window.runtime?.Quit();
    }
  });

  game_events.on("pause", async () => {});

  game_events.on("settings", async () => {});
};
