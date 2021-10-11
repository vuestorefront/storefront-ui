import { shallowMount } from "@vue/test-utils";
import SfBadge from "./SfBadge.vue";
describe("SfBadge.vue", () => {
  it("renders a badge", () => {
    const component = shallowMount(SfBadge);
    expect(component.classes("sf-badge")).toBe(true);
  });
  it("renders a badge with css modifier", () => {
    const component = shallowMount({
      components: { SfBadge },
      template: `<SfBadge class="sf-badge--warning" />`,
    });
    expect(component.classes("sf-badge--warning")).toBe(true);
  });
  it("renders a badge content via default slot", () => {
    const content = "sfbadge content";
    const component = shallowMount(SfBadge, {
      slots: {
        default: content,
      },
    });
    expect(component.find(".sf-badge").text()).toBe(content);
  });
});
