import { shallowMount } from "@vue/test-utils";
import SfPagination from "./SfPagination.vue";

const propsData = {
  page: 2,
  limit: 10,
  totalSize: 120
};

describe("SfPagination.vue", () => {
  it("renders a nav", () => {
    const component = shallowMount(SfPagination, { propsData });
    expect(component.contains("nav")).toBe(true);
  });

  // 'prev' slot check
  it("renders prev slot text when passed", () => {
    const msg = "prev";
    const component = shallowMount(SfPagination, {
      propsData,
      slots: {
        prev: msg
      }
    });
    expect(component.find(".sf-pagination__link--prev").text()).toMatch(msg);
  });

  // 'next' slot check
  it("renders next slot text when passed", () => {
    const msg = "next";
    const component = shallowMount(SfPagination, {
      propsData,
      slots: {
        next: msg
      }
    });
    expect(component.find(".sf-pagination__link--next").text()).toMatch(msg);
  });
});
