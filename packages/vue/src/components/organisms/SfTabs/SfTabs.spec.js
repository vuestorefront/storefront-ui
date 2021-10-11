import { mount, shallowMount } from "@vue/test-utils";
import SfTabs from "./SfTabs.vue";
describe("SfTabs.vue", () => {
  it("renders a tabs", () => {
    const component = shallowMount(SfTabs);
    expect(component.classes("sf-tabs")).toBe(true);
  });
  it("checks if Tab slot is passed correctly", () => {
    const component = shallowMount(SfTabs, {
      slots: {
        default: `<p class="test-class">test-content</p>`,
      },
    });
    expect(component.find(".test-class").text()).toMatch("test-content");
  });
  it("check if navigation contains title passed in tab", () => {
    const tabsHtml = "<SfTab title='Tab1' /><SfTab title='Tab2' />";
    const component = mount(SfTabs, {
      slots: {
        default: tabsHtml,
      },
    });
    expect(component.findAll(".sf-tabs__title").length).toBe(2);
  });
});
