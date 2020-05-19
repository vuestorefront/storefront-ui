import { shallowMount } from "@vue/test-utils";
import SfSearchBar from "./SfSearchBar.vue";
describe.only("SfSearchBar.vue", () => {
  it("renders a search bar", () => {
    const component = shallowMount(SfSearchBar);
    expect(component.contains(".sf-search-bar")).toBe(true);
  });
  it("renders placeholder props when passed", () => {
    const placeholder = "Search for...";
    const component = shallowMount(SfSearchBar, {
      propsData: {
        placeholder: placeholder,
      },
    });
    expect(component.find(".sf-search-bar__input").attributes("label")).toEqual(
      placeholder
    );
  });
});
