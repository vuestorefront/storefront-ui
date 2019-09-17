import { shallowMount } from "@vue/test-utils";
import SfCard from "@/components/molecules/SfCard.vue";

describe("SfCard.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfCard);
    expect(component.contains(".sf-card")).toBe(true);
  });
});
