import { shallowMount } from "@vue/test-utils";
import SfProperty from "./SfProperty.vue";
describe("SfProperty.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfProperty);
    expect(component.classes("sf-property")).toBe(true);
  });
  it("renders a div with correct class", () => {
    const component = shallowMount(SfProperty);
    expect(component.html()).toContain("sf-property");
  });
  it("renders correct row", () => {
    const nameText = "Category";
    const valueText = "Pants";
    const component = shallowMount(SfProperty, {
      propsData: {
        name: nameText,
        value: valueText,
      },
    });
    expect(component.find(".sf-property__name").text()).toMatch(nameText);
    expect(component.find(".sf-property__value").text()).toMatch(valueText);
  });
});
