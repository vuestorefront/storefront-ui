import { shallowMount } from "@vue/test-utils";
import SfLanguageSelector from "./SfLanguageSelector.vue";

describe("SfLanguageSelector.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfLanguageSelector);
    expect(component.contains(".sf-language-selector")).toBe(true);
  });
});
