import { shallowMount } from "@vue/test-utils";
import SfRow from "@/components/organisms/SfRow.vue";

describe("SfRow.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfRow);
    expect(component.contains(".sf-row")).toBe(true);
  });
});
