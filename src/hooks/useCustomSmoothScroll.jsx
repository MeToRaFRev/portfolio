import { useEffect, useRef } from "react";

function useCustomSmoothScroll() {
  const disabledRef = useRef(false);
  // Use a ref for the target scroll position so we can update it externally.
  const targetScrollRef = useRef(window.scrollY);

  useEffect(() => {
    let isTicking = false;
    let rafId;
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

    const onWheel = (e) => {
      // If disabled, ignore wheel events.
      if (disabledRef.current) return;
      e.preventDefault();
      // Update our target scroll ref by accumulating the delta.
      targetScrollRef.current += e.deltaY;
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

  // When re-enabling custom scroll, update the target to the current scroll position.
  const disableCustomScroll = () => {
    disabledRef.current = true;
  };

  const enableCustomScroll = () => {
    disabledRef.current = false;
    targetScrollRef.current = window.scrollY;
  };

  return { disableCustomScroll, enableCustomScroll };
}

export default useCustomSmoothScroll;
