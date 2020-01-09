import { shallowMount } from "@vue/test-utils";
import SfRadio from "./SfRadio.vue";
describe("SfRadio.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfRadio);
    expect(component.contains(".sf-radio")).toBe(true);
  });
});
