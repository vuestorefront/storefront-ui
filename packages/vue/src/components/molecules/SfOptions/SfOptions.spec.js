import { shallowMount } from "@vue/test-utils";
import SfOptions from "./SfOptions.vue";
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
    expect(component.find(".sf-options__label").text()).toContain(label);
    expect(component.find(".sf-options__option-text").text()).toContain(
      options[0].text
    );
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
  it("renders color options props", () => {
    const type = "color";
    const label = "Color";
    const options = [{ color: "Orange", value: "Orange" }];
    const component = shallowMount(SfOptions, {
      propsData: {
        type,
        label,
        options
      }
    });
    expect(component.find(".sf-options__label").text()).toContain(label);
    expect(component.find(".sf-options__option-color").attributes().style).toBe(
      `background-color: ${options[0].color};`
    );
  });
  it("renders color options slots", () => {
    const label = "This is label slot";
    const color = "This is color slot";
    const options = [{ color: "Orange", value: "Orange" }];
    const component = shallowMount(SfOptions, {
      slots: {
        label,
        color
      },
      propsData: {
        options
      }
    });
    expect(component.find(".sf-options").text()).toContain(label);
    expect(component.find(".sf-options").text()).toContain(color);
  });
  it("renders image options props", () => {
    const type = "image";
    const label = "Image";
    const options = [{ image: "/assets/logo.svg", value: "logo" }];
    const component = shallowMount(SfOptions, {
      propsData: {
        type,
        label,
        options
      }
    });
    expect(component.contains(".sf-options__option-image")).toBe(true);
    expect(component.find(".sf-options__label").text()).toContain(label);
    expect(component.find(".sf-options__option").attributes().style).toBe(
      `background-image: url(${options[0].image});`
    );
  });
  it("renders image options slots", () => {
    const label = "This is label slot";
    const image = "This is image slot";
    const options = [{ image: "/assets/logo.svg", value: "logo" }];
    const component = shallowMount(SfOptions, {
      slots: {
        label,
        image
      },
      propsData: {
        options
      }
    });
    expect(component.find(".sf-options").text()).toContain(label);
    expect(component.find(".sf-options").text()).toContain(image);
  });
});
