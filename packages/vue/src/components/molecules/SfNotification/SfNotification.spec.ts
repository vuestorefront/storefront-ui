import { shallowMount } from "@vue/test-utils";
import SfNotification from "@/components/molecules/SfNotification.vue";

describe("SfNotification.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfNotification);
    expect(component.contains(".sf-notification")).toBe(true);
  });
});
