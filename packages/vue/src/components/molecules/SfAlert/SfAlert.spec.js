import { shallowMount } from "@vue/test-utils";
import SfAlert from "./SfAlert.vue";
describe("SfAlert.vue", () => {
  it("renders an alert", () => {
    const component = shallowMount(SfAlert);
    expect(component.contains(".sf-alert")).toBe(true);
  });
  it("renders an alert with css modifier", () => {
    const component = shallowMount(SfAlert, {
      propsData: {
        type: "warning"
      }
    });
    expect(component.contains(".sf-alert--warning")).toBe(true);
  });
  it("renders an alert message when passed via props", () => {
    const message = "Hello World";
    const component = shallowMount(SfAlert, {
      propsData: {
        message
      }
    });
    expect(component.contains(".sf-alert__message")).toBe(true);
    expect(component.find(".sf-alert__message").text()).toMatch(message);
  });
  it("renders an alert icon when passed via props", () => {
    const component = shallowMount(SfAlert, {
      propsData: {
        type: "secondary"
      }
    });
    expect(component.contains(".sf-alert--secondary")).toBe(true);
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
