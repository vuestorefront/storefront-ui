import { shallowMount } from "@vue/test-utils";
import SfList from "./SfList.vue";
describe("SfList.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfList);
    expect(component.classes("sf-list")).toBe(true);
  });
  // todo: test defautl slot, test if SfListItem is rendered
});
