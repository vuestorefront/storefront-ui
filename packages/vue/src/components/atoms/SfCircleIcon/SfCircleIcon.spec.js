import { shallowMount } from "@vue/test-utils";
import SfCircleIcon from "./SfCircleIcon.vue";

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

  it("renders SfIcon with correct icon prop when passed", () => {
    const icon = "heart";
    const component = shallowMount(SfCircleIcon, {
      propsData: {
        icon
      }
    });
    expect(component.find("sficon-stub").attributes("icon")).toEqual(icon);
  });

  it("renders SfIcon with correct iconColor when passed", () => {
    const colorIcon = "black";
    const component = shallowMount(SfCircleIcon, {
      propsData: {
        colorIcon
      }
    });
    expect(component.find("sficon-stub").attributes("color")).toEqual(
      colorIcon
    );
  });
});
