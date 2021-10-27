import { shallowMount } from "@vue/test-utils";
import { getConfig } from "cloudinary-build-url";
import SfCimage from "./SfCimage.vue";

describe("SfCimage.vue", () => {
  it("renders a component with publicId and cloud", () => {
    const wrapper = shallowMount(SfCimage, {
      propsData: {
        publicId: "example",
        cloud: {
          cloudName: "demo",
        },
        alt: "example",
      },
    });
    expect(wrapper.classes("sf-cimage")).toBe(true);
  });
  it("renders a component with placeholder", () => {
    const wrapper = shallowMount(SfCimage, {
      propsData: {
        publicId: "example",
        cloud: {
          cloudName: "demo",
        },
        alt: "example",
        placeholder: "blur",
      },
    });
    expect(wrapper.classes("sf-cimage")).toBe(true);
  });
  it("throws an error when public id is not provided", () => {
    expect(() => shallowMount(SfCimage)).toThrow(
      "PublicId is required to use this component."
    );
  });
  it("throws an error when cloud is not provided", () => {
    jest.mock("cloudinary-build-url", () => ({
      getConfig: jest.fn({ cloudName: undefined }),
    }));
    expect(() =>
      shallowMount(SfCimage, {
        propsData: {
          publicId: "test",
        },
      })
    ).toThrow("cloudName is required to use this component.");
  });
});
