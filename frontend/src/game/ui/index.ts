import type { ComponentType } from "svelte";
import { writable } from "svelte/store";

export const active_ui = writable<ComponentType | undefined>(undefined);
