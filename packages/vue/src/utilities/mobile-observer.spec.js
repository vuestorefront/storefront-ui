import { mapMobileObserver, unMapMobileObserver } from "./mobile-observer";

describe("mobile observr", () => {
  let addListener;
  let removeListener;

  it("has a map and unmap function", () => {
    expect(mapMobileObserver).toBeInstanceOf(Function);
    expect(unMapMobileObserver).toBeInstanceOf(Function);
  });

  it("if window.matchMedia is not defined it does not initialize", () => {
    const result = mapMobileObserver();
    result.isMobile.get();
    expect(result.isInitialized.get()).toBe(false);
    unMapMobileObserver();
  });

  describe("matchMedia exists", () => {
    let instance;
    beforeEach(() => {
      addListener = jest.fn();
      removeListener = jest.fn();
      window.matchMedia = jest.fn().mockReturnValue({
        addListener,
        removeListener
      });
      instance = mapMobileObserver();
      instance.isMobile.get();
    });

    afterEach(() => {
      unMapMobileObserver();
    });

    it("mapMobileObserver initialize", () => {
      expect(instance.isInitialized.get()).toBe(true);
    });

    it("increase the clients count", () => {
      expect(instance.clients.get()).toBe(1);
      mapMobileObserver();
      expect(instance.clients.get()).toBe(2);
      unMapMobileObserver();
    });
  });
});
