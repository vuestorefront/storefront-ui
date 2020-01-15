import "../matchMedia.mock";
import { shallowMount } from "@vue/test-utils";
import SfFooterColumn from "./SfFooterColumn.vue";
describe("SfFooterColumn.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfFooterColumn);
    expect(component.contains(".sf-footer-column")).toBe(true);
  });
});
