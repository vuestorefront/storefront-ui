import { shallowMount } from "@vue/test-utils";
import SfTab from "./SfTab.vue";
import SfTabs from "../SfTabs.vue";
describe.skip("SfTab.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTab, {
      parentComponent: SfTabs,
      inject: ["tabConfig"],
      provide() {
        const tabConfig = {};
        Object.defineProperty(tabConfig, "tabMaxContentHeight", {
          get: () => this.tabMaxContentHeight,
        });
        Object.defineProperty(tabConfig, "tabShowText", {
          get: () => this.tabShowText,
        });
        Object.defineProperty(tabConfig, "tabHideText", {
          get: () => this.tabHideText,
        });
        return this.tabConfig;
      },
    });
    expect(component.classes("sf-tabs__tab")).toBe(true);
  });
});
