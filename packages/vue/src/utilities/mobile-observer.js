import Vue from "vue";
let observer;
const isMobileMax = 1024;
const getMaxWidth = (breakpoint) => `(max-width: ${breakpoint - 1}px)`;
const getMinWidth = (breakpoint) => `(min-width: ${breakpoint}px)`;
const mediaQueries = {
  small: getMaxWidth(isMobileMax),
  large: getMinWidth(isMobileMax),
};
const isMobile = () => {
  if (!process.server && navigator) {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      return true;
  }
  return false;
};
const onMediaMatch = (size, e) => {
  if (e.matches) {
    observer.size = size;
    observer.isMobileDevice = isMobile();
    observer.isSmall = size === "small";
  }
};
export const setupListener = () => {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    !window.matchMedia
  ) {
    return;
  }

  for (const size of Object.keys(mediaQueries)) {
    const matchEvent = window.matchMedia(mediaQueries[size]);
    onMediaMatch(size, matchEvent);

    try {
      // Chrome & Firefox
      matchEvent.addEventListener("change", onMediaMatch.bind(null, size));
    } catch (e1) {
      try {
        // Safari
        matchEvent.addListener(onMediaMatch.bind(null, size));
      } catch (e2) {
        console.error(e2);
      }
    }

    window.addEventListener("DOMContentLoaded", () => {
      onMediaMatch(size, window.matchMedia(mediaQueries[size]));
    });
  }
};
export const tearDownListener = () => {
  if (
    typeof window !== "undefined" &&
    typeof document !== "undefined" &&
    window.matchMedia
  ) {
    window.matchMedia(mediaQueries[observer.size]).removeListener(onMediaMatch);
  }
};
export const mapMobileObserver = () => {
  if (!observer) {
    observer = Vue.observable({
      isSmall: false,
      isMobileDevice: isMobile(),
      size: "large",
      mediaQueries,
    });
  }
  return {
    isMobile: {
      get() {
        if (observer) {
          setupListener();
        }
        return observer ? observer.isMobileDevice : false;
      },
    },
  };
};
export const unMapMobileObserver = () => {
  tearDownListener();
};
