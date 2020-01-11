import { shallowMount } from "@vue/test-utils";
import SfHeader from "./SfHeader.vue";

describe("SfHeader.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfHeader);
    expect(component.contains("header")).toBe(true);
  });
});
