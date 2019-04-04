import { shallowMount } from "@vue/test-utils";
import SfCircleButton from "@/components/atoms/SfCircleButton/SfCircleButton.vue";

describe.only("SfCircleButton.vue", () => {

  it("renders a button", () => {
    const component = shallowMount(SfCircleButton);
    expect(component.contains('.sf-circle-button')).toBe(true);
  });

  it("renders default slot with image", () => {
    const component = shallowMount(SfCircleButton, {
    slots: {
      default: '<img class="sf-circle-button__icon" src="/assets/add_to_cart.svg" alt="icon" />'
    }
  });
    expect(component.contains('.sf-circle-button__icon')).toBe(true);
  });

  it("renders icon props when passed", () => {
    const iconSrc = '../../../assets/add_to_cart.svg';
    const component = shallowMount(SfCircleButton, {
      propsData: {
        icon: iconSrc
      }
    });
    expect(component.find("img").attributes('src')).toEqual(iconSrc);
  });

  it("renders alt props when passed", () => {
    const msg = 'IamAltText';
    const component = shallowMount(SfCircleButton, {
      propsData: {
        alt: msg
      }
    });
    expect(component.find("img").attributes('alt')).toEqual(msg);
  })
});