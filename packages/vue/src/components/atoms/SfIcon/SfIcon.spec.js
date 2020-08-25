import { shallowMount } from "@vue/test-utils";
import SfIcon from "./SfIcon.vue";
describe("SfIcon.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfIcon);
    expect(component.classes("sf-icon")).toBe(true);
  });
  it("renders path when passed", () => {
    const path =
      "M10 0C4.48561 0 0 4.48561 0 10C0 15.5144 4.48561 20 10 20C15.5144 20 20 15.5144 20 10C20 4.48561 15.5144 0 10 0ZM10 1.46341C14.7237 1.46341 18.5366 5.27634 18.5366 10C18.5366 14.7237 14.7237 18.5366 10 18.5366C5.27634 18.5366 1.46341 14.7237 1.46341 10C1.46341 5.27634 5.27634 1.46341 10 1.46341ZM10 2.68293C9.59605 2.68293 9.26829 3.01068 9.26829 3.41463V10C9.26829 10.2706 9.41597 10.5059 9.63415 10.6326L14.9161 13.6814C15.2658 13.8834 15.7126 13.7643 15.9146 13.4146C16.1166 13.065 15.9975 12.6181 15.6478 12.4161L10.7317 9.58078V3.41468C10.7317 3.01073 10.404 2.68298 10 2.68298V2.68293Z";
    const component = shallowMount(SfIcon, {
      propsData: {
        icon: path,
      },
    });
    expect(component.find("path").attributes("d")).toEqual(path);
  });
  it("renders sf-size when passed", () => {
    const size = "sm";
    const component = shallowMount(SfIcon, {
      propsData: {
        size: size,
      },
    });
    expect(component.classes(`size-${size}`)).toBe(true);
  });
  it("renders sf-color when passed", () => {
    const color = "green-primary";
    const component = shallowMount(SfIcon, {
      propsData: {
        color: color,
      },
    });
    expect(component.classes(`color-${color}`)).toBe(true);
  });
  it("renders viewBox default when not passed", () => {
    const color = "green-primary";
    const component = shallowMount(SfIcon, {
      propsData: {
        color: color,
      },
    });
    expect(component.find("svg").attributes("viewBox")).toEqual("0 0 24 24");
  });
  it("renders viewBox when passed", () => {
    const viewBox = "0 12 12 12";
    const component = shallowMount(SfIcon, {
      propsData: {
        viewBox: viewBox,
      },
    });
    expect(component.find("svg").attributes("viewBox")).toEqual(viewBox);
  });
});
