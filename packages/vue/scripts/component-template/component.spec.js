import { shallowMount } from "@vue/test-utils";
import ComponentNameCamelCase from "@/components/ComponentFolder/ComponentNameCamelCase.vue";

describe("ComponentNameCamelCase.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(ComponentNameCamelCase);
    expect(component.contains(".ComponentNameKebabCase")).toBe(true);
  });
});