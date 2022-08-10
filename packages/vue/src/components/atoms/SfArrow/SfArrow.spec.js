import { shallowMount } from "@vue/test-utils";
import SfArrow from "./SfArrow.vue";
describe("SfArrow.vue", () => {
  it("renders component with default values", () => {
    const wrapper = shallowMount(SfArrow);
    expect(wrapper.classes("sf-arrow")).toBe(true);
  });

  it("renders component as arrow label with aria-label", () => {
    const wrapper = shallowMount(SfArrow, {
      propsData: {
        ariaLabel: "label",
      },
    });
    expect(wrapper.attributes("aria-label")).toBe("label");
  });
});
