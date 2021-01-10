import { shallowMount } from "@vue/test-utils";
import SfTile from "./SfTile.vue";

describe("SfTile.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTile);
    expect(component.contains(".sf-tile")).toBe(true);
  });
});
