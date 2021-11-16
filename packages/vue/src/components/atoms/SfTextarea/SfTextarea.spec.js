import { shallowMount } from "@vue/test-utils";
import SfTextarea from "./SfTextarea.vue";
describe("SfTextarea.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(SfTextarea);
    expect(wrapper.classes("sf-textarea")).toBe(true);
  });
  it("renders component with value", () => {
    const wrapper = shallowMount(SfTextarea, {
      propsData: {
        value: "text",
      },
      listeners: {
        input: () => {
          expect(component.vm.$data.input).toBeTruthy();
          done();
        },
      },
    });
    wrapper.find("textarea").trigger("input");
  });
});
