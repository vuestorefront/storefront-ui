import Vue from "vue";
import { mount, shallowMount } from "@vue/test-utils";
import SfTabs from "./SfTabs.vue";

describe("SfTabs.vue", () => {
  it("renders a tabs", () => {
    const component = shallowMount(SfTabs);
    expect(component.contains(".sf-tabs")).toBe(true);
  });

  it("checks if Tab slot is passed correctly", () => {
    const component = shallowMount(SfTabs, {
      slots: {
        default: `<p class="test-class">test-content</p>`
      }
    });

    expect(component.find(".test-class").text()).toMatch("test-content");
  });

  it("check if navigation contains title passed in tab", () => {
    const tabs = [
      {
        title: "Apple",
        content: "Apple is a great fruit",
        isActive: false
      },
      {
        title: "Banana",
        content: "Banana is a great fruit",
        isActive: false
      },
      {
        title: "Peach",
        content: "Peach is a great fruit",
        isActive: false
      }
    ];

    const component = shallowMount(SfTabs, {
      propsData: {
        tabs
      }
    });
    console.log("siema", component);

    expect(component.findAll(".sf-tabs__chevron").length).toBe(2);
  });
});
