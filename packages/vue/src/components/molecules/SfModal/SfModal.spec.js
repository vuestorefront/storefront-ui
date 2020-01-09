import { shallowMount } from "@vue/test-utils";
import SfModal from "./SfModal.vue";
describe("SfModal.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfModal);
    expect(component.contains(".sf-modal")).toBe(true);
  });
});
