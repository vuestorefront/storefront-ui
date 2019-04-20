import { shallowMount } from "@vue/test-utils";
import SfOptions from "@/components/molecules/SfOptions/SfOptions.vue";

describe("SfOptions.vue", () => {
  it("renders options", () => {
    const options = [{ text: "XL", value: "XL" }];
    const component = shallowMount(SfOptions, {
      propsData: {
        options
      }
    });
    expect(component.contains(".sf-options")).toBe(true);
  });
  it("renders text options props", () => {
    const label = "Size";
    const options = [{ text: "XL", value: "XL" }];
    const component = shallowMount(SfOptions, {
      propsData: {
        label,
        options
      }
    });
    expect(component.find(".sf-options__title").text()).toContain(label);
    expect(component.find(".sf-options__option").text()).toContain(options[0].text);
  });
  it("renders text options slots", () => {
    const label = "This is label slot";
    const text = "This is text slot";
    const options = [{ text: "XL", value: "XL" }];
    const component = shallowMount(SfOptions, {
      slots: {
        label,
        text
      },
      propsData: {
        options
      }
    });
    expect(component.find(".sf-options").text()).toContain(label);
    expect(component.find(".sf-options").text()).toContain(text);
  });
})