import { shallowMount } from "@vue/test-utils";
import SfListItem from "./SfListItem.vue";
describe("SfListItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfListItem);
    expect(component.classes("sf-list__item")).toBe(true);
  });
});
