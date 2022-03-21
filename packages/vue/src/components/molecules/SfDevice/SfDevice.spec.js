import { shallowMount } from "@vue/test-utils";
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
  it("renders default device", () => {
    const component = shallowMount(SfDevice, {
      propsData: {
        defaultDevice: "tablet",
      },
    });
    expect(component.find(".sf-device__tablet").exists()).toBe(true);
  });
  it("switches device after click", (done) => {
    const component = shallowMount(SfDevice, {
      propsData: {
        switchOnClick: true,
      },
    });
    component.find(".sf-device__screen").trigger("click");
    component.vm.$nextTick(() => {
      expect(component.find(".sf-device__tablet").exists()).toBe(true);
      done();
    });
  });
  it("switches device after interval", (done) => {
    const component = shallowMount(SfDevice, {
      propsData: {
        switchInterval: 1,
      },
    });
    component.vm.$nextTick(() => {
      expect(component.find(".sf-device__tablet").exists()).toBe(true);
      done();
    });
  });
  it("switches device between switchable devices only", (done) => {
    const component = shallowMount(SfDevice, {
      propsData: {
        switchableDevices: ["laptop"],
        switchOnClick: true,
      },
    });
    component.find(".sf-device__screen").trigger("click");
    component.vm.$nextTick(() => {
      expect(component.find(".sf-device__laptop").exists()).toBe(true);
      done();
    });
  });
});
