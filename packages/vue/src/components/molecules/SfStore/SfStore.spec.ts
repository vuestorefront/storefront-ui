import { shallowMount } from "@vue/test-utils";
import SfStore from "@/components/molecules/SfStore.vue";

describe("SfStore.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfStore);
    expect(component.contains(".sf-store")).toBe(true);
  });
});
