import {
  mapMobileObserver,
  unMapMobileObserver,
  onMediaMatch,
} from "./mobile-observer";
describe("mobile observer", () => {
  let addListener;
  let removeListener;
  it("has a map and unmap function", () => {
    expect(mapMobileObserver).toBeInstanceOf(Function);
    expect(unMapMobileObserver).toBeInstanceOf(Function);
  });
  it("if window.matchMedia is not defined it does not initialize", () => {
    const result = mapMobileObserver();
    result.isMobile.get();
    expect(result.mobileObserverIsInitialized.get()).toBe(false);
    unMapMobileObserver();
  });
  describe("matchMedia exists", () => {
    let instance;
    beforeEach(() => {
      addListener = jest.fn();
      removeListener = jest.fn();
      window.matchMedia = jest.fn().mockReturnValue({
        addListener,
        removeListener,
      });
      instance = mapMobileObserver();
    });
    afterEach(() => {
      unMapMobileObserver();
    });
    describe("mapMobileObserver", () => {
      it("returns isMobile", () => {
        expect(instance.isMobile).toBeDefined();
      });
      describe("calling get on isMobile", () => {
        beforeEach(() => {
          window.matchMedia.mockClear();
          addListener.mockClear();
          instance.isMobile.get();
        });
        it("calls matchMedia", () => {
          expect(window.matchMedia).toHaveBeenCalledWith("(max-width: 1023px)");
        });
      });
    });
  });
});
