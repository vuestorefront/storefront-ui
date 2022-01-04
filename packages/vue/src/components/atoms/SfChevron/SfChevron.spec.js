import { shallowMount } from "@vue/test-utils";
import SfChevron from "./SfChevron.vue";
describe.only("SfChevron.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(SfChevron);
    expect(wrapper.classes("sf-chevron")).toBe(true);
  });
  it("renders slot with content passed via slot", () => {
    const wrapper = shallowMount(SfChevron, {
      slots: {
        default: "<div class='sf-chevron__chevron'>Some content</div>",
      },
    });
    expect(wrapper.find(".sf-chevron__chevron").exists()).toBe(true);
  });
});
