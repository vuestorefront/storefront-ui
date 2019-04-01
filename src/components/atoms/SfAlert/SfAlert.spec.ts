import { shallowMount } from "@vue/test-utils";
import SfAlert from "@/components/atoms/SfAlert/SfAlert.vue";

describe("SfAlert.vue", () => {
  const msg = "Hello World"
  it("renders an alert", () => {
    const component = shallowMount(SfAlert);
    expect(component.contains(".sf-alert")).toBe(true);
  });

  it("renders an warning alert", () => {
    const component = shallowMount(SfAlert, {
      attrs: {
        class: "sf-alert--warning"
      },
      slots: {
        default: msg
      }
    });
    expect(component.contains(".sf-alert--warning")).toBe(true);
  });

  it("renders an alert with custom icon", () => {
    const component = shallowMount(SfAlert, {
      attrs: {
        class: "sf-alert--alert"
      },
      slots: {
        default: msg,
        icon: "<img class='defaultIcon' src='/assets/alert-warning.svg' alt='icon'/>"
      }
    });
    expect(component.contains(".sf-alert--alert")).toBe(true);
    expect(component.contains(".defaultIcon")).toBe(true);
  });

  it("renders an alert with default message via props", () => {
    const component = shallowMount(SfAlert, {
      attrs: {
        class: "sf-alert--info"
      },
      propsData: {
        message: msg
      }
    });
    expect(component.contains(".sf-alert--info")).toBe(true);
    expect(component.find(".sf-alert__text").text()).toMatch(msg);
  });

  // Default slot check, you can replace `default` with any other
  it("renders default prop text when passed", () => {
    const component = shallowMount(SfAlert);
    expect(component).toBeDefined();
  });
});
