import { shallowMount } from "@vue/test-utils";
import SfBreadcrumbs from "./SfBreadcrumbs.vue";
const propsData = {
  breadcrumbs: [{ text: "HelloWorld" }]
};
describe("SfBreadcrumbs.vue", () => {
  it("renders a nav", () => {
    const component = shallowMount(SfBreadcrumbs, { propsData });
    expect(component.contains("nav")).toBe(true);
  });
  it("renders breadcrumbs text", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfBreadcrumbs, { propsData });
    expect(component.find(".sf-breadcrumbs__current").text()).toMatch(msg);
  });
});
