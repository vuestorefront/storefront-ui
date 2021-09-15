import { shallowMount } from "@vue/test-utils";
import SfMyAccountContent from "./SfMyAccountContent.vue";
describe("SfMyAccountContent.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfMyAccountContent);
    expect(component.classes("sf-my-account-content")).toBe(true);
  });
});
