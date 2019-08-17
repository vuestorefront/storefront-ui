import { shallowMount } from "@vue/test-utils";
import SfStoreLocator from "@/components/organisms/SfStoreLocator/SfStoreLocator.vue";

describe("SfStoreLocator.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfStoreLocator, {});
    expect(component.contains(".sf-store-locator")).toBe(true);
  });
  it("emits on event when vue2-leaflet is loaded", done => {
    const component = shallowMount(SfStoreLocator, {
      listeners: {
        "library:loaded": () => {
          expect(component.vm.$data.loaded).toBeTruthy();
          done();
        }
      }
    });
  });
  it("emits on event when the map is ready", done => {
    const locate = jest.fn();
    const component = shallowMount(SfStoreLocator, {
      listeners: {
        "map:ready": () => {
          expect(component.vm.$data.mapReady).toBeTruthy();
          done();
        }
      }
    });
    component.vm.onMapReady({ locate });
    expect(locate).toHaveBeenCalled();
  });
  it("emits on event when the location of the user is found", () => {
    const component = shallowMount(SfStoreLocator);
    component.vm.locationFound({ latlng: { lat: 1, lng: 2 } });
    expect(component.emitted("update:center")[0]).toEqual([{ lat: 1, lng: 2 }]);
  });
  it("emits on event when an error in user location ocurrs", () => {
    const component = shallowMount(SfStoreLocator);
    component.vm.locationError("error");
    expect(component.emitted("location:error")[0]).toEqual(["error"]);
  });
});
