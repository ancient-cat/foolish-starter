import * as Runtime from "$lib/wailsjs/runtime/runtime";

declare global {
  interface Window {
    runtime: typeof Runtime | undefined;
  }
}

export const is_running_native = () => {
  if (typeof window !== undefined && typeof window.runtime !== undefined) {
    return true;
  } else {
    return false;
  }
};

export const is_browser = () => {
  return !is_running_native;
};
