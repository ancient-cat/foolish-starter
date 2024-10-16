import { create_event_dispatcher } from "@ancient-cat/foolish";

export type GameEvents = {
  start: unknown;
  quit: unknown;
  pause: unknown;
  settings: unknown;
};

export const game_events = create_event_dispatcher<GameEvents>();
