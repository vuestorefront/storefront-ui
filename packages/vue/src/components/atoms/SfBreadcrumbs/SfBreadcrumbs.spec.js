import { mount } from "@vue/test-utils";
import SfBreadcrumbs from "./SfBreadcrumbs.vue";
const props = {
  breadcrumbs: [{ text: "HelloWorld" }],
};
describe("SfBreadcrumbs.vue", () => {
  it("renders a nav", () => {
    const component = mount(SfBreadcrumbs, { props });
    expect(component.classes("sf-breadcrumbs")).toBe(true);
  });
  it("renders breadcrumbs text", () => {
    const msg = "HelloWorld";
    const component = mount(SfBreadcrumbs, { props });
    console.log(component.find(".current").html());
    expect(component.find(".current").text()).toMatch(msg);
  });
});
