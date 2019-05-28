import { shallowMount } from "@vue/test-utils";
import SfProperty from "@/components/molecules/SfProperty/SfProperty.vue";

describe("SfProperty.vue", () => {
  it("renders a div with correct class", () => {
    const component = shallowMount(SfProperty);
    expect(component.html()).toContain("sf-property");
  });

  it("renders correct row", () => {
    const propertyText = "Category";
    const valueText = "Pants";
    const component = shallowMount(SfProperty, {
      propsData: {
        property: propertyText,
        value: valueText
      }
    });
    expect(component.find(".sf-property__property").text()).toMatch(propertyText);
    expect(component.find(".sf-property__value").text()).toMatch(valueText);
  });
});
