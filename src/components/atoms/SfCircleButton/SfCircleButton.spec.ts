import { shallowMount } from "@vue/test-utils";
import SfCircleButton from "@/components/atoms/SfCircleButton/SfCircleButton.vue";

describe.only("SfCircleButton.vue", () => {

  it("renders a button", () => {
    const component = shallowMount(SfCircleButton);
    expect(component.contains('.sf-circle-button')).toBe(true);
  });

  it("renders default slot with image", () => {
    const component = shallowMount(SfCircleButton);
    expect(component.contains('img')).toBe(true);
  });

  it("renders icon and alt props when passed", () => {
    const msg = 'IamAltText';
    const iconSrc = '../../../assets/add_to_cart.svg';
    const component = shallowMount(SfCircleButton, {
      propsData: {
        icon: iconSrc,
        alt: msg
      }
    });
    expect(component.find("img").attributes('alt')).toEqual(msg);
    expect(component.find("img").attributes('src')).toEqual(iconSrc);
  })
});