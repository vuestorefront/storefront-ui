import { shallowMount } from "@vue/test-utils";
import SfStoreLocator from "./SfStoreLocator.vue";

describe("SfStoreLocator.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfStoreLocator, {
      propsData: {
        visible: true
      }
    });
    expect(component.contains(".sf-sidebar")).toBe(true);
  });
});
