import { shallowMount } from "@vue/test-utils";
import SfBullets from "./SfBullets.vue";
const propsData = {
  total: 3,
  current: 1,
};
describe("SfBullets.vue", () => {
  it("renders a component with total number of bullets", () => {
    const wrapper = shallowMount(SfBullets, { propsData });
    expect(wrapper.classes("sf-bullets")).toBe(true);
  });
});
