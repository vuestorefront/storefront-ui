import { shallowMount } from "@vue/test-utils";
import SfPrice from "./SfPrice.vue";
describe("SfPrice.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfPrice);
    expect(component.classes("sf-price")).toBe(true);
  });
  it("renders regular and special price props passed as String", () => {
    const regPrice = "$3,99";
    const spPrice = "$3,59";
    const component = shallowMount(SfPrice, {
      propsData: {
        regular: regPrice,
        special: spPrice,
      },
    });
    expect(
      component.find(".sf-price__old").exists() &&
        component.find(".sf-price__special").exists()
    ).toBe(true);
  });
  it("renders regular and special price props passed as Number", () => {
    const regPrice = 3.99;
    const spPrice = 3.59;
    const component = shallowMount(SfPrice, {
      propsData: {
        regular: regPrice,
        special: spPrice,
      },
    });
    expect(
      component.find(".sf-price__old").exists() &&
        component.find(".sf-price__special").exists()
    ).toBe(true);
  });
  it("renders an old price via slot", () => {
    const component = shallowMount(SfPrice, {
      slots: {
        old: "<del class='old'>text</del>",
      },
    });
    expect(component.find(".old").exists()).toBe(true);
  });
  it("renders a special price via slot", () => {
    const component = shallowMount(SfPrice, {
      slots: {
        special: "<ins class='special'>text</ins>",
      },
    });
    expect(component.find(".sf-price__special").exists()).toBe(false);
    expect(component.find(".special").exists()).toBe(true);
  });
});
