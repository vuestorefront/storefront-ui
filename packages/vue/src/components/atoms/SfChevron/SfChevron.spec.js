import { shallowMount } from "@vue/test-utils";
import SfChevron from "./SfChevron.vue";
describe.only("SfChevron.vue", () => {
  it("renders a chevron", () => {
    const component = shallowMount(SfChevron);
    expect(component.classes("sf-chevron")).toBe(true);
  });
  it("renders slot with other content", () => {
    const component = shallowMount(SfChevron, {
      slots: {
        default: "<div class='sf-chevron__chevron'>Some content</div>",
      },
    });
    expect(component.find(".sf-chevron__chevron").exists()).toBe(true);
  });
});
