import { shallowMount } from "@vue/test-utils";
import SfBreadcrumbs from "./SfBreadcrumbs.vue";
const propsData = {
  breadcrumbs: [{ text: "HelloWorld" }],
};
describe("SfBreadcrumbs.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(SfBreadcrumbs);
    expect(wrapper.classes("sf-breadcrumbs")).toBe(true);
  });
  it("renders component with breadcrumbs prop", () => {
    const wrapper = shallowMount(SfBreadcrumbs, { propsData });
    expect(wrapper.classes("sf-breadcrumbs")).toBe(true);
  });
  xit("renders breadcrumbs text", () => {
    const msg = "HelloWorld";
    const wrapper = shallowMount(SfBreadcrumbs, { propsData });
    expect(wrapper.find(".current").text()).toMatch(msg);
  });
});
