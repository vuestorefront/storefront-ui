import { shallowMount } from "@vue/test-utils";
import SfSkeleton from "./SfSkeleton.vue";
describe("SfSkeleton.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfSkeleton);
    expect(component.classes("sf-skeleton")).toBe(true);
  });
});
