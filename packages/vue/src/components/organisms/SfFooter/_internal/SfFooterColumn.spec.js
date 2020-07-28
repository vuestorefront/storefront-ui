import "../matchMedia.mock";
import { shallowMount } from "@vue/test-utils";
import SfFooterColumn from "./SfFooterColumn.vue";
import SfFooter from "../SfFooter.vue";
describe("SfFooterColumn.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfFooterColumn, {
      parentComponent: SfFooter,
    });
    expect(component.classes("sf-footer-column")).toBe(true);
  });
});
