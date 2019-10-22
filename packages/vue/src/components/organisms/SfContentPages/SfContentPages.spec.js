import { shallowMount } from "@vue/test-utils";
import SfContentPages from "@/components/organisms/SfContentPages/SfContentPages.vue";

describe("SfContentPages.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfContentPages);
    expect(component.contains(".sf-content-pages")).toBe(true);
  });
});
