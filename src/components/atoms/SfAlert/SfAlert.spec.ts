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
    const icon = "/assets/img.jpg"
    const component = shallowMount(SfAlert, {
      propsData: {
        icon
      }
    });
    expect(component.contains(".sf-alert__icon")).toBe(true);
  });

  it("renders an alert without icon when false prop passed", () => {
    const icon = false
    const component = shallowMount(SfAlert, {
      propsData: {
        icon
      }
    });
    expect(component.contains(".sf-alert__icon")).toBe(false);
  });

  it("renders an alert icon when passed via slot", () => {
    const icon = "<img class='slotImg' src='/assets/img.jpg' />"
    const component = shallowMount(SfAlert, {
      slots: {
        icon
      }
    });
    expect(component.contains(".slotImg")).toBe(true);
  });

  it("renders an alert message when passed via slot", () => {
    const message = "<p class='slotMessage'>text</p>"
    const component = shallowMount(SfAlert, {
      slots: {
        message
      }
    });
    expect(component.contains(".slotMessage")).toBe(true);
  });
});
