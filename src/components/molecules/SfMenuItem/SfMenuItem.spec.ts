import { shallowMount } from "@vue/test-utils";
import SfMenuItem from "@/components/molecules/SfMenuItem/SfMenuItem.vue";

describe("SfMenuItem.vue", () => {
  it("renders a div with correct class", () => {
    const component = shallowMount(SfMenuItem);
    expect(component.html()).toContain('sf-menu-item');
  });

  it("renders correct count prop", () => {
    const countText = "10 item(s)";
    const titleText = "Example title";
    const component = shallowMount(SfMenuItem, {
      propsData: {
        title: titleText,
        count: countText
      }
    });
    expect(component.find(".sf-menu-item__title").text()).toMatch(titleText);
    expect(component.find(".sf-menu-item__count").text()).toMatch(countText);
  });

  it("renders defualt right icon", () => {
    const component = shallowMount(SfMenuItem);
    expect(component.find(".sf-menu-item__right").exists()).toBe(true);
  });

  it("renders correctly left icon slot", () => {
    const iconLeftMarkup = "<img class='sf-menu-item__right' src='/assets/arrow-alt_right.svg' alt=''>";
    const component = shallowMount(SfMenuItem, {
      slots: {
        iconLeft: iconLeftMarkup
      }
    });
    expect(component.find(".sf-menu-item__right").exists()).toBe(true);
  });
});
