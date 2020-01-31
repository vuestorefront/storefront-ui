import { shallowMount } from "@vue/test-utils";
import SfStore from "./SfStore.vue";
describe("SfStore.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfStore, {
      inject: [
        "registerStore",
        "removeStore",
        "centerOn",
        "locatorData",
        "getGeoDistance"
      ],
      provide() {
        const locatorData = {};
        Object.defineProperty(locatorData, "userPosition", {
          enumerable: true,
          get: () => this.userPosition
        });
        return {
          registerStore: this.registerStore,
          removeStore: this.removeStore,
          centerOn: this.centerOn,
          getGeoDistance: this.getGeoDistance,
          locatorData
        };
      }
    });
    expect(component.contains(".sf-store")).toBe(true);
  });
});
