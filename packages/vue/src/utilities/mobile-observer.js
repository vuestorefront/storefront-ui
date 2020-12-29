import Vue from "vue";
let observer;
const isMobileMax = 1023;
const isMobileMin = 1024;
export const onMediaMatchMobile = (e) => {
  if (!e.matches) return;
  console.log("mobile", observer);
  e.matches ? (observer.isMobile = true) : null;
};
export const onMediaMatchDesktop = (e) => {
  if (!e.matches) return;
  console.log("desktop", observer);
  e.matches ? (observer.isMobile = false) : null;
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
  console.log("setup", observer.isMobile);
  window
    .matchMedia(`(max-width: ${isMobileMax}px)`)
    .addListener(onMediaMatchMobile);
  window
    .matchMedia(`(min-width: ${isMobileMin}px)`)
    .addListener(onMediaMatchDesktop);
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
      .removeListener(onMediaMatchMobile);
    window
      .matchMedia(`(min-width: ${isMobileMin}px)`)
      .removeListener(onMediaMatchDesktop);
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
        console.log("get clients", observer.clients);
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
    console.log(observer.clients);
    if (observer.clients === 0) {
      observer = null;
      tearDownListener();
    }
  } else {
    tearDownListener();
  }
};
