import { shallowMount } from "@vue/test-utils";
import SfAlert from "@/components/atoms/SfAlert/SfAlert.vue";

describe("SfAlert.vue", () => {
  it("renders an alert", () => {
    const component = shallowMount(SfAlert);
    expect(component.contains(".sf-alert")).toBe(true);
  });

  it("renders an alert with css modifier", () => {
    const component = shallowMount(SfAlert, {
      attrs: {
        class: "sf-alert--warning"
      }
    });
    expect(component.contains(".sf-alert__text")).toBe(false);
  });

  it("renders an alert message when passed via props", () => {
    const message = "Hello World"
    const component = shallowMount(SfAlert, {
      propsData: {
        message
      }
    });
    expect(component.find(".sf-alert__text").text()).toMatch(message);
  });

  it("renders an alert icon when passed via props", () => {
    const component = shallowMount(SfAlert, {
      propsData: {
        icon:  "/assets/img.jpg"
      }
    });
    expect(component.contains(".sf-alert__icon")).toBe(true);
  });

  it("renders an alert without icon when false prop passed", () => {
    const component = shallowMount(SfAlert, {
      propsData: {
        icon: false
      }
    });
    expect(component.contains(".sf-alert__icon")).toBe(false);
  });

  it("renders an alert icon when passed via slot", () => {
    const component = shallowMount(SfAlert, {
      slots: {
        icon: "<img class='slotImg' src='/assets/img.jpg' />"
      }
    });
    expect(component.contains(".slotImg")).toBe(true);
  });

  it("renders an alert message when passed via slot", () => {
    const component = shallowMount(SfAlert, {
      slots: {
        message: "<p class='slotMessage'>text</p>"
      }
    });
    expect(component.contains(".slotMessage")).toBe(true);
  });
});
