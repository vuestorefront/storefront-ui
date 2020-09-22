import { shallowMount } from "@vue/test-utils";
import SfTopBar from "./SfTopBar.vue";
describe("SfTopBar", () => {
  it("renders a container element", () => {
    const component = shallowMount(SfTopBar, {});
    expect(component.classes("sf-top-bar")).toBe(true);
  });
  // Left slot check
  it("renders left slot content when passed", () => {
    const leftContent = "LEFT__CONTENT";
    const component = shallowMount(SfTopBar, {
      slots: {
        left: leftContent,
      },
    });
    expect(component.find(".sf-top-bar__left").text()).toMatch(leftContent);
  });
  // Right slot check
  it("renders right slot content when passed", () => {
    const rightContent = "RIGHT__CONTENT";
    const component = shallowMount(SfTopBar, {
      slots: {
        right: rightContent,
      },
    });
    expect(component.find(".sf-top-bar__right").text()).toMatch(rightContent);
  });
});
