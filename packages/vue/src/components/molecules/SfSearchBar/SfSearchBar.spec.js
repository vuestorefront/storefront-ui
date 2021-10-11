import { shallowMount } from "@vue/test-utils";
import SfSearchBar from "./SfSearchBar.vue";
describe.only("SfSearchBar.vue", () => {
  it("renders a search bar", () => {
    const component = shallowMount(SfSearchBar);
    expect(component.classes("sf-search-bar")).toBe(true);
  });
  it("renders slot with icon when passed", () => {
    const icon = "<svg class='sf-search-bar__icon'></svg>";
    const component = shallowMount(SfSearchBar, {
      slots: {
        icon,
      },
    });
    expect(component.find(".sf-search-bar__icon").exists()).toBe(true);
  });
  it("renders slot with clear icon when passed", () => {
    const icon = "<span class='sf-search-bar__clear-icon'></span>";
    const component = shallowMount(SfSearchBar, {
      slots: {
        icon,
      },
    });
    expect(component.find(".sf-search-bar__clear-icon").exists()).toBe(true);
  });
  it("renders placeholder props when passed", () => {
    const placeholder = "Search for...";
    const component = shallowMount(SfSearchBar, {
      propsData: {
        placeholder: placeholder,
      },
    });
    expect(
      component.find(".sf-search-bar__input").attributes("placeholder")
    ).toEqual(placeholder);
  });
});
