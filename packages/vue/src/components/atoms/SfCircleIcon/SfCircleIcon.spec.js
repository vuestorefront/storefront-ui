import { shallowMount } from "@vue/test-utils";
import SfCircleIcon from "./SfCircleIcon.vue";
describe.only("SfCircleIcon.vue", () => {
  it("renders a button", () => {
    const component = shallowMount(SfCircleIcon);
    expect(component.classes("sf-circle-icon")).toBe(true);
  });
  it("renders component as circleIcon with aria-label", () => {
    const wrapper = shallowMount(SfCircleIcon, {
      propsData: {
        ariaLabel: "Go to ...",
      },
    });
    expect(wrapper.attributes("aria-label")).toBe("Go to ...");
  });
});
