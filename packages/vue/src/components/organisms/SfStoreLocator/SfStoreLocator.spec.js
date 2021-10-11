import { shallowMount } from "@vue/test-utils";
import SfStoreLocator from "./SfStoreLocator.vue";
describe("SfStoreLocator.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfStoreLocator, {});
    expect(component.classes("sf-store-locator")).toBe(true);
  });
  it("emits on event when vue2-leaflet is loaded", (done) => {
    const component = shallowMount(SfStoreLocator, {
      listeners: {
        "library:loaded": () => {
          expect(component.vm.$data.loaded).toBeTruthy();
          done();
        },
      },
    });
  });
  it("emits on event when the map is ready", (done) => {
    const locateUser = jest.fn();
    const component = shallowMount(SfStoreLocator, {
      listeners: {
        "map:ready": () => {
          expect(component.vm.$data.mapReady).toBeTruthy();
          done();
        },
      },
    });
    component.vm.locateUser = locateUser;
    component.vm.onMapReady({});
    expect(locateUser).toHaveBeenCalled();
  });
  it("emits on event when the location of the user is found", () => {
    const component = shallowMount(SfStoreLocator);
    component.vm.locationFound({ latlng: { lat: 1, lng: 2 } });
    expect(component.emitted("update:center")[0]).toEqual([{ lat: 1, lng: 2 }]);
  });
  it("emits on event when an error in user location occurs", () => {
    const component = shallowMount(SfStoreLocator);
    component.vm.locationError("error");
    expect(component.emitted("location:error")[0]).toEqual(["error"]);
  });
});
