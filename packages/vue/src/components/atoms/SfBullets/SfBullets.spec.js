import { shallowMount } from "@vue/test-utils";
import SfBullets from "./SfBullets.vue";
describe("SfBullets.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfBullets, {
      propsData: {
        total: 3,
      },
    });
    expect(component.classes("sf-bullets")).toBe(true);
  });
});
