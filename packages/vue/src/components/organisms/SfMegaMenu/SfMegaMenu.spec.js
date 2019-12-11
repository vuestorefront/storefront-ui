import "./matchMedia.mock";
import { shallowMount } from "@vue/test-utils";
import SfMegaMenu from "./SfMegaMenu.vue";

describe("SfMegaMenu.vue", () => {
  it("renders a Mega Menu", () => {
    const component = shallowMount(SfMegaMenu, {
      propsData: { parentMenu: "Man" }
    });
    expect(component.contains(".sf-mega-menu")).toBe(true);
  });
});
