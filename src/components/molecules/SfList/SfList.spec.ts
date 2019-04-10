import { shallowMount } from "@vue/test-utils";
import SfList from "@/components/molecules/SfList.vue";

describe("SfList.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfList);
    expect(component.contains(".sf-list")).toBe(true);
  });

  // todo: test defautl slot, test if SfListItem is rendered
});
