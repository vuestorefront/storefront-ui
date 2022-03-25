import { shallowMount } from "@vue/test-utils";
import SfToast from "./SfToast";
import SfToastItem from "./_internal/SfToastItem";

describe("SfToast.vue", () => {
  it("renders an toast", () => {
    const component = shallowMount(SfToast);
    expect(component.classes("sf-toast")).toBe(true);
  });

  describe("with using default slot", () => {
    it("renders SfToastItem component", () => {
      const component = shallowMount(SfToast, {
        slots: {
          default: "<SfToastItem></SfToastItem>",
        },
      });
      expect(component.findAllComponents(SfToastItem)).toHaveLength(1);
    });
  });
});

describe("SfToastItem.vue", () => {
  it("renders an toast item", () => {
    const component = shallowMount(SfToastItem);
    expect(component.find("output.sf-toast__item").exists()).toBe(true);
  });
  it("renders an toast item with css modifier", () => {
    const component = shallowMount(SfToastItem, {
      propsData: {
        type: "info",
      },
    });
    expect(component.find(".color-info").exists()).toBe(true);
  });
  it("renders an toast item message when passed via props", () => {
    const message = "Toast message";
    const component = shallowMount(SfToastItem, {
      propsData: {
        message,
      },
    });
    expect(component.find("output.sf-toast__item").exists()).toBe(true);
    expect(component.find("output.sf-toast__item").text()).toMatch(message);
  });

  it("renders an toast item message when passed via slot", () => {
    const message = "Custom message";
    const component = shallowMount(SfToastItem, {
      propsData: {
        message,
      },
      slots: {
        default: `<p class='toast-message'>${message}</p>`,
      },
    });
    expect(component.find(".toast-message").exists()).toBe(true);
    expect(component.find(".toast-message").text()).toContain(message);
  });
});
