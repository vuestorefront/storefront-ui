import { shallowMount } from "@vue/test-utils";
import SfAddress from "./SfAddress.vue";
import SfAddressPicker from "../SfAddressPicker.vue";

describe("SfAddress.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfAddress, {
      provide: {
        getSelectedValue: () => "example",
        setSelectedValue: () => "example",
      },
    });
    expect(component.classes("sf-address")).toBe(true);
  });
});
