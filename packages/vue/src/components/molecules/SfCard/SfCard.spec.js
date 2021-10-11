import { shallowMount } from "@vue/test-utils";
import SfCard from "./SfCard.vue";

describe("SfCard.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfCard);
    expect(component.classes("sf-card")).toBe(true);
  });
});
