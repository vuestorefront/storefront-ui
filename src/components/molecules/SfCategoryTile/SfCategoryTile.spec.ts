import { shallowMount } from "@vue/test-utils";
import SfCategoryTile from "@/components/molecules/SfCategoryTile/SfCategoryTile.vue";

describe("SfComponent.vue", () => {
  it("renders a category tile", () => {
    const component = shallowMount(SfCategoryTile);
    expect(component.contains("image") && component.contains("title")).toBe(
      true
    );
  });
});
