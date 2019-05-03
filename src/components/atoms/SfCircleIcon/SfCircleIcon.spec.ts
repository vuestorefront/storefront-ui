import { shallowMount } from "@vue/test-utils";
import SfCircleIcon from "@/components/atoms/SfCircleIcon/SfCircleIcon.vue";

describe.only("SfCircleIcon.vue", () => {
  it("renders a button", () => {
    const component = shallowMount(SfCircleIcon);
    expect(component.contains(".sf-circle-icon")).toBe(true);
  });

  it("renders default slot with image", () => {
    const component = shallowMount(SfCircleIcon, {
      slots: {
        default:
          '<img class="sf-circle-icon__icon" src="/assets/add_to_cart.svg" alt="icon" />'
      }
    });
    expect(component.contains(".sf-circle-icon__icon")).toBe(true);
  });

  it("renders icon props when passed", () => {
    const iconSrc = "../../../assets/add_to_cart.svg";
    const component = shallowMount(SfCircleIcon, {
      propsData: {
        icon: iconSrc
      }
    });
    expect(component.find("img").attributes("src")).toEqual(iconSrc);
  });

  it("renders alt props when passed", () => {
    const msg = "IamAltText";
    const component = shallowMount(SfCircleIcon, {
      propsData: {
        alt: msg
      }
    });
    expect(component.find("img").attributes("alt")).toEqual(msg);
  });
});
