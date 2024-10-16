import { active_ui } from "$game/ui";
import MainMenu from "$game/ui/main_menu.svelte";
import { app, Scenes } from "@ancient-cat/foolish";
import { Container, Assets, Sprite, Texture } from "pixi.js";

export default Scenes.create(() => {
  return {
    name: "main_menu",
    enter: async () => {
      active_ui.set(MainMenu);
      return () => {
        active_ui.set(undefined);
      };
    },
    update: (time) => {},
  };
});
