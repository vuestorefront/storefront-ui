import { shallowMount } from "@vue/test-utils";
import SfLink from "./SfLink.vue";

describe("SfLink.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfLink);
    expect(component.contains(".sf-link")).toBe(true);
  });
});

