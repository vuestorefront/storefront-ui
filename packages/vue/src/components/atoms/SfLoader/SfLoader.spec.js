import { shallowMount } from "@vue/test-utils";
import SfLoader from "./SfLoader.vue";
describe("SfLoader.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfLoader);
    expect(component.classes("sf-loader")).toBe(true);
  });
});
