import { shallowMount } from "@vue/test-utils";
import SfScrollable from "./SfScrollable.vue";
describe("SfScrollable.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfScrollable);
    expect(component.contains(".sf-scrollable")).toBe(true);
  });
});
