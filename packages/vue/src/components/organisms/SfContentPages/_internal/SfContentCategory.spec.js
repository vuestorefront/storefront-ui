import { shallowMount } from "@vue/test-utils";
import SfContentCategory from "./SfContentCategory.vue";
describe("SfContentCategory.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfContentCategory);
    expect(component.contains(".sf-content-category")).toBe(true);
  });
});
