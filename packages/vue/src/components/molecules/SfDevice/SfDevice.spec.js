import { shallowMount, mount } from "@vue/test-utils";
import SfDevice from "./SfDevice.vue";

describe("SfDevice.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfDevice);
    expect(component.find(".sf-device").exists()).toBe(true);
  });
  it("renders slot content", () => {
    const component = shallowMount(SfDevice, {
      slots: {
        default: "<p class='slotMessage'>text</p>",
      },
    });
    expect(component.find(".slotMessage").exists()).toBe(true);
  });
  it("renders tablet device", () => {
    const component = shallowMount(SfDevice, {
      propsData: {
        device: "tablet",
      },
    });
    expect(component.find(".sf-device__tablet").exists()).toBe(true);
  });
  it("morphs after click", (done) => {
    const component = mount(SfDevice, {
      propsData: {
        device: "tablet",
        switchOnClick: true,
      },
    });
    component.find(".sf-device__screen").trigger("click");
    component.vm.$nextTick(() => {
      expect(component.find(".sf-device__laptop").exists()).toBe(true);
      done();
    });
  });
  it("device switch after interval", (done) => {
    const component = mount(SfDevice, {
      propsData: {
        device: "tablet",
        switchInterval: 1,
      },
    });
    component.vm.$nextTick(() => {
      expect(component.find(".sf-device__laptop").exists()).toBe(true);
      done();
    });
  });
});
