import { shallowMount } from "@vue/test-utils";
import SfAlert from "@/components/atoms/SfAlert/SfAlert.vue";

describe("SfAlert.vue", () => {
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
        default: '<p class="slotWarning">warning</p>'
      }
    });
    expect(component.contains(".slotWarning")).toBe(true);
    expect(component.contains(".sf-alert__text")).toBe(false);
  });

  it("renders an alert with custom icon", () => {
    const msg = "Hello World"
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
    expect(component.contains(".sf-alert__icon")).toBe(false);
  });

  it("renders an alert with default message via props", () => {
    const msg = "Hello World"
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

  it("renders an alert with default message via slot", () => {
    const component = shallowMount(SfAlert, {
      attrs: {
        class: "sf-alert--info"
      },
      slots: {
        message: "<p class='iconSlot'>iconSlot</p>"
      }
    });
    expect(component.contains(".sf-alert--info")).toBe(true);
    expect(component.find(".iconSlot").text()).toMatch("iconSlot");
  });

  it("renders an alert without icon with message via props", () => {
    const component = shallowMount(SfAlert, {
      attrs: {
        class: "sf-alert--info"
      },
      propsData: {
        icon: false,
        message: "without icon"
      }
    });
    expect(component.contains(".sf-alert--info")).toBe(true);
    expect(component.contains(".sf-alert__icon")).toBe(false);
    expect(component.find(".sf-alert__text").text()).toMatch("without icon");
  });

  // Default slot check, you can replace `default` with any other
  it("renders default prop text when passed", () => {
    const component = shallowMount(SfAlert);
    expect(component).toBeDefined();
  });
});
