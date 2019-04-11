import { shallowMount } from "@vue/test-utils";
import SfBottomNavigation from "@/components/organisms/SfBottomNavigation/SfBottomNavigation.vue";

describe("SfBottomNavigation.vue", () => {
  it("renders a bottom navigation", () => {
    const component = shallowMount(SfBottomNavigation);
    expect(component.contains(".sf-bottom-navigation")).toBe(true);
  });

  it("renders alt props when passed", () => {
    const msg = "IamAltText";
    const component = shallowMount(SfBottomNavigation, {
      propsData: {
        alt: msg
      }
    });
    expect(component.find("img").attributes("alt")).toEqual(msg);
  });

  it("renders icon props when passed", () => {
    const iconSrc = "../../../assets/add_to_cart.svg";
    const component = shallowMount(SfBottomNavigation, {
      propsData: {
        icon: iconSrc
      }
    });
    expect(component.find("img").attributes("src")).toEqual(iconSrc);
  });
});
