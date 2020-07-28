import "./matchMedia.mock";
import { shallowMount } from "@vue/test-utils";
import SfFooter from "@/components/organisms/SfFooter/SfFooter.vue";
describe("SfFooter.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfFooter);
    expect(component.classes("sf-footer")).toBe(true);
  });
});
