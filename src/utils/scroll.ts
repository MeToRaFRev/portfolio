/**
 * Smoothly scrolls the window to a specified vertical position over a given duration.
 *
 * @param targetPosition - The vertical pixel value to scroll to.
 * @param speed - The duration of the scroll animation in milliseconds (default is 500ms).
 *
 * @throws Will throw an error if targetPosition or speed is not a number or if speed is negative.
 */
export default async function scroll(targetPosition: number, speed: number = 500): Promise<void> {
    if (typeof targetPosition !== 'number') {
      throw new Error('scrollToPosition: targetPosition must be a number.');
    }
    if (typeof speed !== 'number' || speed < 0) {
      throw new Error('scrollToPosition: speed must be a non-negative number.');
    }
  
    const startPosition: number = window.pageYOffset;
    const distance: number = targetPosition - startPosition;
    const startTime: number = performance.now();
  
    // Easing function for smooth scroll (easeInOutQuad)
    function easeInOutQuad(t: number): number {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
  
    function animateScroll(currentTime: number): void {
      const timeElapsed: number = currentTime - startTime;
      const progress: number = Math.min(timeElapsed / speed, 1);
      const easedProgress: number = easeInOutQuad(progress);
  
      window.scrollTo(0, startPosition + distance * easedProgress);
  
      if (timeElapsed < speed) {
        requestAnimationFrame(animateScroll);
      }
    }
  
    requestAnimationFrame(animateScroll);
  }
  