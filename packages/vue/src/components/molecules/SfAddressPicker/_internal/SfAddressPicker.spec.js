import { shallowMount } from "@vue/test-utils";
import SfAddress from "./SfAddress.vue";
import SfAddressPicker from "../SfAddressPicker.vue";

describe("SfAddress.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfAddress, {
      parentComponent: SfAddressPicker,
      inject: ["getSelectedValue", "setSelectedValue"],
      provide() {
        return {
          getSelectedValue: this.getSelectedValue,
          setSelectedValue: this.setSelectedValue,
        };
      },
    });
    expect(component.classes("sf-address")).toBe(true);
  });
});
