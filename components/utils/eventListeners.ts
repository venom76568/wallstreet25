import { useEffect } from "react";

export const useEventListener = (
  event: string,
  listener: EventListenerOrEventListenerObject,
  trigger = true
): void => {
  useEffect(() => {
    const t = window
    t.addEventListener(event, listener);
    trigger && t.dispatchEvent(new Event(event));
    return () => t.removeEventListener(event, listener);
  });
};
