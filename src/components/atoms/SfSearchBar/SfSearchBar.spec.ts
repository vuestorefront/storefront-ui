import { shallowMount } from "@vue/test-utils";
import SfSearchBar from "@/components/atoms/SfSearchBar/SfSearchBar.vue";

describe.only("SfSearchBar.vue", () => {
  it("renders a search bar", () => {
    const component = shallowMount(SfSearchBar);
    expect(component.contains(".sf-search-bar")).toBe(true);
  });

  it("renders default slot with image", () => {
    const component = shallowMount(SfSearchBar, {
      slots: {
        default:
          '<img class="sf-search-bar__icon" src="/assets/search.svg" alt="icon" />'
      }
    });
    expect(component.contains(".sf-search-bar__icon")).toBe(true);
  });

  it("renders iconSrc props when passed", () => {
    const src = "assets/storybook/search.svg";
    const component = shallowMount(SfSearchBar, {
      propsData: {
        iconSrc: src
      }
    });
    expect(component.find("img").attributes("src")).toEqual(src);
  });

  it("renders alt props when passed", () => {
    const msg = "About Image";
    const component = shallowMount(SfSearchBar, {
      propsData: {
        alt: msg
      }
    });
    expect(component.find("img").attributes("alt")).toEqual(msg);
  });


  it("renders placeholder props when passed", () => {
    const msg = "Search for items";
    const component = shallowMount(SfSearchBar, {
      propsData: {
        placeholder: msg
      }
    });
  
  });
});
