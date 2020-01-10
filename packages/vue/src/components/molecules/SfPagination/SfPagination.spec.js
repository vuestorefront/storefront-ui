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
  it("renders prev slot text when passed", () => {
    const msg = "prev";
    const component = shallowMount(SfPagination, {
      propsData,
      slots: {
        prev: msg
      }
    });
    const paginationItems = component.findAll(".sf-pagination__item");
    expect(paginationItems.at(0).text()).toEqual(msg);
  });
  it("renders next slot text when passed", () => {
    const msg = "next";
    const component = shallowMount(SfPagination, {
      propsData,
      slots: {
        next: msg
      }
    });
    const paginationItems = component.findAll(".sf-pagination__item");
    expect(paginationItems.at(paginationItems.length - 1).text()).toEqual(msg);
  });
});
