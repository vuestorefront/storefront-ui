import Vue from "vue";
let observer;
const isMobileMax = 1023;
export const onMediaMatch = (e) => {
  if (typeof e.matches === null) return;
  observer.isMobile = !!e.matches;
};
export const setupListener = () => {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    !window.matchMedia
  ) {
    return;
  }
  observer.isMobile =
    Math.max(document.documentElement.clientWidth, window.innerWidth) <=
    isMobileMax;
  const matchEvent = window.matchMedia(`(max-width: ${isMobileMax}px)`);
  onMediaMatch(matchEvent);
  observer.isInitialized = true;
};
export const tearDownListener = () => {
  if (
    typeof window !== "undefined" &&
    typeof document !== "undefined" &&
    window.matchMedia
  ) {
    window
      .matchMedia(`(max-width: ${isMobileMax}px)`)
      .removeListener(onMediaMatch);
  }
};
export const mapMobileObserver = () => {
  if (!observer) {
    observer = Vue.observable({
      isMobile: false,
      clients: 0,
      isInitialized: false,
    });
  }
  observer.clients += 1;
  return {
    isMobile: {
      get() {
        if (observer && !observer.isInitialized) {
          setupListener();
        }
        return observer ? observer.isMobile : false;
      },
    },
    mobileObserverClients: {
      get() {
        return observer ? observer.clients : 0;
      },
    },
    mobileObserverIsInitialized: {
      get() {
        return observer ? observer.isInitialized : false;
      },
    },
  };
};
export const unMapMobileObserver = () => {
  if (observer) {
    observer.clients -= 1;
    if (observer.clients === 0) {
      observer = null;
      tearDownListener();
    }
  } else {
    tearDownListener();
  }
};
