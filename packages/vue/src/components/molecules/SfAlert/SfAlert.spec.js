import { shallowMount } from "@vue/test-utils";
import SfAlert from "./SfAlert.vue";
describe("SfAlert.vue", () => {
  it("renders an alert", () => {
    const component = shallowMount(SfAlert);
    expect(component.classes("sf-alert")).toBe(true);
  });
  it("renders an alert with css modifier", () => {
    const component = shallowMount(SfAlert, {
      propsData: {
        type: "warning",
      },
    });
    expect(component.find(".color-warning").exists()).toBe(true);
  });
  it("renders an alert message when passed via props", () => {
    const message = "Hello World";
    const component = shallowMount(SfAlert, {
      propsData: {
        message,
      },
    });
    expect(component.find(".sf-alert__message").exists()).toBe(true);
    expect(component.find(".sf-alert__message").text()).toMatch(message);
  });
  it("renders an alert icon when passed via slot", () => {
    const component = shallowMount(SfAlert, {
      slots: {
        icon: "<img class='slotImg' src='/assets/img.jpg' />",
      },
    });
    expect(component.find(".slotImg").exists()).toBe(true);
  });
  it("renders an alert message when passed via slot", () => {
    const component = shallowMount(SfAlert, {
      slots: {
        message: "<p class='slotMessage'>text</p>",
      },
    });
    expect(component.find(".slotMessage").exists()).toBe(true);
  });
});
