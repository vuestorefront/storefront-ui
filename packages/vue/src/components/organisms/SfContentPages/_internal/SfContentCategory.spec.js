import { shallowMount } from "@vue/test-utils";
import SfContentCategory from "./SfContentCategory.vue";
import SfContentPages from "../SfContentPages.vue";
describe("SfContentCategory.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfContentCategory, {
      parentComponent: SfContentPages,
    });
    expect(component.classes("sf-content-category")).toBe(true);
  });
});
