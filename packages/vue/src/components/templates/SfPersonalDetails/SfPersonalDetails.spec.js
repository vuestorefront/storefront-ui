import { shallowMount } from "@vue/test-utils";
import SfPersonalDetails from "./SfPersonalDetails.vue";
describe("SfPersonalDetails.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfPersonalDetails);
    expect(component.classes("sf-personal-details")).toBe(true);
  });
});
