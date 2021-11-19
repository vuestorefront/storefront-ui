import { shallowMount } from "@vue/test-utils";
import SfRating from "./SfRating.vue";
describe("SfRating.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfRating);
    expect(component.classes("sf-rating")).toBe(true);
  });
  it("render multiple stars when max is increased", () => {
    const score = 4;
    const max = 10;
    const component = shallowMount(SfRating, {
      propsData: {
        score,
        max,
      },
    });
    expect(component.findAll(".sf-rating__icon--negative").length).toBe(
      max - score
    );
  });
  it("renders with custom positive icon", () => {
    const score = 3;
    const max = 5;
    const component = shallowMount(SfRating, {
      propsData: {
        score,
        max,
      },
      slots: {
        "icon-positive": '<div class="sf-rating__icon-clock"></div>',
      },
    });
    expect(component.findAll(".sf-rating__icon-clock").length).toBe(score);
  });
  it("renders with custom negative icon", () => {
    const score = 2;
    const max = 5;
    const component = shallowMount(SfRating, {
      propsData: {
        score,
        max,
      },
      slots: {
        "icon-negative": '<div class="sf-rating__icon-close"></div>',
      },
    });
    expect(component.findAll(".sf-rating__icon-close").length).toBe(
      max - score
    );
  });
  it("renders component when maximum is 0", () => {
    const component = shallowMount(SfRating, {
      propsData: {
        max: 0,
      },
    });
    expect(component.classes("sf-rating")).toBe(true);
  });
});
