import { shallowMount } from "@vue/test-utils";
import SfPrice from "./SfPrice.vue";

describe("SfPrice.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfPrice);
    expect(component.contains(".sf-price")).toBe(true);
  })
  it("renders regular and special price props passed as String", () => {
    const regPrice = "$3,99"
    const spPrice = "$3,59"
    const component = shallowMount(SfPrice, {
      propsData: {
        regularPrice: regPrice,
        specialPrice: spPrice
      }
    });
    expect(component.contains(".sf-price__old") && component.contains(".sf-price__special")).toBe(true);
  })
  it("renders regular and special price props passed as Number", () => {
    const regPrice = 3.99
    const spPrice = 3.59
    const component = shallowMount(SfPrice, {
      propsData: {
        regularPrice: regPrice,
        specialPrice: spPrice
      }
    });
    expect(component.contains(".sf-price__old") && component.contains(".sf-price__special")).toBe(true);
  });

  // Default slot check, you can replace `default` with any other
  // it("renders default prop text when passed", () => {
  //   const component = shallowMount(SfComponent);
  //   expect(component).toBeDefined();
  // });
});
