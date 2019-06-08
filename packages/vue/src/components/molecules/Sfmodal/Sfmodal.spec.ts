import { shallowMount } from "@vue/test-utils";
import Sfmodal from "@/components/molecules/Sfmodal.vue";

describe("Sfmodal.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(Sfmodal);
    expect(component.contains(".sf-sfmodal")).toBe(true);
  });
});
        
