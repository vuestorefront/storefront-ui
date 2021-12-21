import { shallowMount } from "@vue/test-utils";
import SfCard from "./SfCard.vue";

describe("SfCard.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfCard, {
      propsData: {
        title: "Baby Care",
        titleLevel: 3,
        description:
          "Read how to take care of your baby, see our products available, clothes and suggestions how stay healthy.",
        buttonText: "Learn more",
        imageWidth: 288,
        imageHeight: 189,
      },
    });
    expect(component.classes("sf-card")).toBe(true);
  });
});
