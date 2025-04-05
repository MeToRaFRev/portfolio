import { useEffect, useRef } from "react";

//TODO: BUGGED - when manually scrolling, the scroll position is not updated correctly so animation finishes but snaps back to the last scroll position

function useCustomSmoothScroll() {
  const disabledRef = useRef<boolean>(false);
  // Our internal target scroll position.
  const targetScrollRef = useRef<number>(window.scrollY);
  // Flag to ignore wheel events after a programmatic scroll.
  const ignoreWheelRef = useRef<boolean>(false);

  useEffect(() => {
    let isTicking = false;
    let rafId: number;

    const smoothScroll = () => {
      const currentScroll = window.scrollY;
      const diff = targetScrollRef.current - currentScroll;
      if (Math.abs(diff) > 1) {
        window.scrollTo(0, currentScroll + diff * 0.1);
        rafId = requestAnimationFrame(smoothScroll);
      } else {
        isTicking = false;
        cancelAnimationFrame(rafId);
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (disabledRef.current) return;
      // If we're ignoring wheel events, skip them.
      if (ignoreWheelRef.current) return;
      
      e.preventDefault();
      // Use current scroll as the base.
      targetScrollRef.current = window.scrollY + e.deltaY;
      targetScrollRef.current = Math.max(
        0,
        Math.min(
          targetScrollRef.current,
          document.body.scrollHeight - window.innerHeight
        )
      );
      if (!isTicking) {
        isTicking = true;
        smoothScroll();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  const disableCustomScroll = () => {
    disabledRef.current = true;
  };

  // Allow an optional newTarget parameter.
  const enableCustomScroll = (newTarget?: number) => {
    disabledRef.current = false;
    targetScrollRef.current = typeof newTarget === "number" ? newTarget : window.scrollY;
  };

  // Easing function.
  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const scrollToPosition = (target: number, duration: number): Promise<void> => {
    return new Promise((resolve) => {
      const start = window.pageYOffset;
      const distance = target - start;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutQuad(progress);
        const newScrollPos = start + distance * ease;
        window.scrollTo(0, newScrollPos);
        // Update our internal target state.
        targetScrollRef.current = newScrollPos;
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          // Finalize: ensure the internal target is set.
          targetScrollRef.current = target;
          // Optionally ignore immediate wheel events.
          ignoreWheelRef.current = true;
          setTimeout(() => {
            ignoreWheelRef.current = false;
          }, 50);
          resolve();
        }
      };

      requestAnimationFrame(animation);
    });
  };

  return { disableCustomScroll, enableCustomScroll, scrollToPosition };
}

export default useCustomSmoothScroll;
