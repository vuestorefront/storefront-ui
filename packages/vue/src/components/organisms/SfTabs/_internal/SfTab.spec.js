import { shallowMount } from "@vue/test-utils";
import SfTab from "./SfTab.vue";
describe("SfTab.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTab, {
      provide: {
        tabConfig: {
          tabMaxContentHeight: "",
          tabShowText: "",
          tabHideText: "",
        },
      },
    });
    expect(component.exists("sf-tabs__tab")).toBe(true);
  });
});
