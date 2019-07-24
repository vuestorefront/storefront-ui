import { shallowMount } from "@vue/test-utils";
import SfModal from "@/components/molecules/SfModal.vue";

describe("SfModal.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfModal);
    expect(component.contains(".sf-sf-modal")).toBe(true);
  });
});
