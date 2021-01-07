import { shallowMount } from "@vue/test-utils";
import SfCategoryCard from "./SfCategoryCard.vue";

describe("SfCategoryCard.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfCategoryCard);
    expect(component.classes("sf-category-card")).toBe(true);
  });
});
