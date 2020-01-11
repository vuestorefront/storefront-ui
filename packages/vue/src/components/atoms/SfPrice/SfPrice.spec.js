import { shallowMount } from "@vue/test-utils";
import SfPrice from "./SfPrice.vue";
describe("SfPrice.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfPrice);
    expect(component.contains(".sf-price")).toBe(true);
  });
  it("renders regular and special price props passed as String", () => {
    const regPrice = "$3,99";
    const spPrice = "$3,59";
    const component = shallowMount(SfPrice, {
      propsData: {
        regular: regPrice,
        special: spPrice
      }
    });
    expect(
      component.contains(".sf-price__old") &&
        component.contains(".sf-price__special")
    ).toBe(true);
  });
  it("renders regular and special price props passed as Number", () => {
    const regPrice = 3.99;
    const spPrice = 3.59;
    const component = shallowMount(SfPrice, {
      propsData: {
        regular: regPrice,
        special: spPrice
      }
    });
    expect(
      component.contains(".sf-price__old") &&
        component.contains(".sf-price__special")
    ).toBe(true);
  });
  it("renders an old price via slot", () => {
    const component = shallowMount(SfPrice, {
      slots: {
        old: "<span class='old'>text</span>"
      }
    });
    expect(component.contains(".old")).toBe(true);
  });
  it("renders a special price via slot", () => {
    const component = shallowMount(SfPrice, {
      slots: {
        special: "<ins class='special'>text</ins>"
      }
    });
    expect(component.find(".sf-price__special").exists()).toBe(false);
    expect(component.contains(".special")).toBe(true);
  });
});
