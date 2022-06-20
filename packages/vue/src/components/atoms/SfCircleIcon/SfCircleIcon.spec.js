import { shallowMount } from "@vue/test-utils";
import SfCircleIcon from "./SfCircleIcon.vue";
describe.only("SfCircleIcon.vue", () => {
  it("renders a button", () => {
    const component = shallowMount(SfCircleIcon);
    expect(component.classes("sf-circle-icon")).toBe(true);
  });
});
