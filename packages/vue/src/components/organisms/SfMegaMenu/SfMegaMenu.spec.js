import "./matchMedia.mock";
import { shallowMount } from "@vue/test-utils";
import SfMegaMenu from "./SfMegaMenu.vue";
describe("SfMegaMenu.vue", () => {
  it("renders a Mega Menu", () => {
    const component = shallowMount(SfMegaMenu, {
      propsData: { visible: true },
    });
    expect(component.find(".sf-mega-menu").exists()).toBe(true);
  });
});
