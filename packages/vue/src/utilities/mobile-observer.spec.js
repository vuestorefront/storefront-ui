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
      it("increase the clients count", () => {
        expect(instance.mobileObserverClients.get()).toBe(1);
        mapMobileObserver();
        expect(instance.mobileObserverClients.get()).toBe(2);
        unMapMobileObserver();
      });
      describe("calling get on isMobile", () => {
        beforeEach(() => {
          window.matchMedia.mockClear();
          addListener.mockClear();
          instance.isMobile.get();
        });
        it("initialize", () => {
          expect(instance.mobileObserverIsInitialized.get()).toBe(true);
        });
        it("calls matchMedia and addListener", () => {
          expect(window.matchMedia).toHaveBeenCalledWith("(max-width: 1023px)");
          expect(addListener).toHaveBeenCalledWith(onMediaMatch);
        });
        it("multiple calls on get do not attach multiple listeners", () => {
          instance.isMobile.get();
          expect(window.matchMedia).toHaveBeenCalledTimes(1);
          expect(addListener).toHaveBeenCalledTimes(1);
        });
      });
    });
    describe("unMapMobileObserver", () => {
      describe("if observer is defined", () => {
        it("decrement client by one", () => {
          // we are adding one more from the one registered in the beforeEAch
          mapMobileObserver();
          unMapMobileObserver();
          expect(instance.mobileObserverClients.get()).toBe(1);
        });
        it("if clients reach 0", () => {
          unMapMobileObserver();
          expect(instance.isMobile.get()).toEqual(false);
          expect(window.matchMedia).toHaveBeenCalledWith("(max-width: 1023px)");
          expect(removeListener).toHaveBeenCalledWith(onMediaMatch);
        });
      });
    });
  });
});
