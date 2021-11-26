import { shallowMount } from "@vue/test-utils";
import SfBottomModal from "./SfBottomModal.vue";

describe("SfBottomModal.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfBottomModal);
    expect(component.classes("sf-bottom-modal")).toBe(true);
  });
});
