import { shallowMount } from "@vue/test-utils";
import SfIcon from "./SfIcon.vue";
const icon = {
  viewBox: "0 0 24 24",
  paths: [
    "M12.014 2c3.413 0 6.19 2.645 6.19 5.895 0 2.204-1.273 4.132-3.124 5.125 3.76 1.157 6.537 4.297 6.884 8.209.116.991-1.851 1.047-1.909.11-.405-3.912-3.934-6.887-8.041-6.887-4.166 0-7.637 2.975-8.042 6.887-.116.937-2.083.881-1.967-.11.405-3.857 3.182-7.052 6.884-8.21-1.852-.99-3.124-2.92-3.124-5.124C5.765 4.645 8.6 2 12.014 2zm0 1.873c-2.372 0-4.282 1.818-4.282 4.022 0 2.259 1.91 4.078 4.282 4.078 2.314 0 4.222-1.818 4.222-4.078 0-2.204-1.909-4.022-4.223-4.022z",
  ],
};

describe("SfIcon.vue", () => {
  it("renders a component with defaults", () => {
    const wrapper = shallowMount(SfIcon);
    expect(wrapper.classes("sf-icon")).toBe(true);
  });
  it("renders path when passed", async () => {
    const wrapper = shallowMount(SfIcon);
    wrapper.setData({ iconFile: icon });
    wrapper.setData({ isLoaded: false });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("path").attributes("d")).toEqual(icon.paths[0]);
  });
  it("renders sf-size when passed", () => {
    const size = "sm";
    const wrapper = shallowMount(SfIcon, {
      propsData: {
        size: size,
      },
    });
    expect(wrapper.classes(`size-${size}`)).toBe(true);
  });
  it("renders sf-color when passed", () => {
    const color = "green-primary";
    const wrapper = shallowMount(SfIcon, {
      propsData: {
        color: color,
      },
    });
    expect(wrapper.classes(`color-${color}`)).toBe(true);
  });
  it("fills path according to coverage", async () => {
    const wrapper = shallowMount(SfIcon, {
      propsData: {
        coverage: 0.5,
      },
    });
    wrapper.setData({ iconFile: icon });
    wrapper.setData({ isLoaded: false });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("stop").attributes("offset")).toEqual("0.5");
  });
  it("renders viewBox default when not passed", async () => {
    const wrapper = shallowMount(SfIcon);
    wrapper.setData({ iconFile: icon });
    wrapper.setData({ isLoaded: false });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("svg").attributes("viewBox")).toEqual("0 0 24 24");
  });
  it("renders viewBox when passed", () => {
    const viewBox = "0 12 12 12";
    const wrapper = shallowMount(SfIcon, {
      propsData: {
        viewBox: viewBox,
      },
    });
    expect(wrapper.vm.iconViewBox).toBe(viewBox);
  });
  it("renders viewBox when passed as array", () => {
    const wrapper = shallowMount(SfIcon);
    expect(wrapper.classes("sf-icon")).toBe(true);
  });
  it("renders custom color when passed", () => {
    const wrapper = shallowMount(SfIcon, {
      propsData: {
        color: "#ffffff",
      },
    });
    expect(wrapper.classes("sf-icon")).toBe(true);
  });
});
