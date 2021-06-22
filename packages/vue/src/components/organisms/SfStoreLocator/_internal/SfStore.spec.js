import { shallowMount } from "@vue/test-utils";
import SfStore from "./SfStore.vue";
describe("SfStore.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfStore, {
      provide: {
        registerStore: () => {},
        removeStore: () => {},
        centerOn: () => {},
        getGeoDistance: () => {},
        locatorData: () => {},
      },
    });
    expect(component.classes("sf-store")).toBe(true);
  });
});
