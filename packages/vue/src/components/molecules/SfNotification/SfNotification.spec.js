import { shallowMount } from "@vue/test-utils";
import SfNotification from "./SfNotification.vue";
describe("SfNotification.vue", () => {
  it("renders the notification", () => {
    const component = shallowMount(SfNotification, {
      propsData: {
        visible: true
      }
    });
    expect(component.contains(".sf-notification")).toBe(true);
  });
  it("renders the message when passed via props", () => {
    const message = "Hello World";
    const component = shallowMount(SfNotification, {
      propsData: {
        visible: true,
        message
      }
    });
    expect(component.find(".sf-notification__message").text()).toMatch(message);
  });
  it("renders the icon when passed via props", () => {
    const component = shallowMount(SfNotification, {
      propsData: {
        visible: true,
        icon: "info"
      }
    });
    expect(component.contains(".sf-notification__icon")).toBe(true);
  });
  it("renders an alert icon when passed via slot", () => {
    const component = shallowMount(SfNotification, {
      propsData: {
        visible: true
      },
      slots: {
        icon: "<img class='slotImg' src='/assets/img.jpg' />"
      }
    });
    expect(component.contains(".slotImg")).toBe(true);
  });
  it("renders an alert message when passed via slot", () => {
    const component = shallowMount(SfNotification, {
      propsData: {
        visible: true
      },
      slots: {
        message: "<p class='slotMessage'>text</p>"
      }
    });
    expect(component.contains(".slotMessage")).toBe(true);
  });
});
