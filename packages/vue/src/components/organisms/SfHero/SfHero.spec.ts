import { shallowMount } from "@vue/test-utils";
import SfHero from "@/components/organisms/SfHero.vue";

describe("SfHero.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfHero);
    expect(component.contains(".sf-sf-hero")).toBe(true);
  });
});
