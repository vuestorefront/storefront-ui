import { shallowMount } from "@vue/test-utils";
import SfContentPage from "./SfContentPage.vue";
describe("SfContentPage.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfContentPage);
    expect(component.contains(".sf-content-page")).toBe(true);
  });
});
