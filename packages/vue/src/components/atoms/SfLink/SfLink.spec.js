import { shallowMount } from "@vue/test-utils";
import SfLink from "./SfLink.vue";

describe("SfLink.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfLink);
    expect(component.classes("sf-link")).toBe(true);
  });
});
