import { shallowMount } from "@vue/test-utils";
import SfHeading from "./SfHeading.vue";
describe("SfHeading.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(SfHeading);
    expect(wrapper.classes("sf-heading")).toBe(true);
  });
  it("renders component with proper heading level", () => {
    const wrapper = shallowMount(SfHeading, {
      propsData: {
        level: 3,
      },
    });
    expect(wrapper.find("h3").exists()).toBe(true);
  });
  it("renders title passed via slot", () => {
    const component = shallowMount(SfHeading, {
      slots: {
        title: "<div class='title'>Some content</div>",
      },
    });
    expect(component.find(".title").exists()).toBe(true);
  });
  it("renders description passed via slot", () => {
    const component = shallowMount(SfHeading, {
      slots: {
        title: "<div class='description'>Some content</div>",
      },
    });
    expect(component.find(".description").exists()).toBe(true);
  });
});
